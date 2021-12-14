import * as React from 'react';
import styles from '../../Birthday.module.scss';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Icon, PrimaryButton, TextField, Callout, DirectionalHint, TooltipHost, Persona, PersonaSize } from '@fluentui/react';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import useMsGraphProvider from "../../../../../services/msGraphProvider";
import Carousel from 'react-elastic-carousel';
import InputEmoji from 'react-input-emoji';
import SPBirthdayAnniversaryServiceData from '../../../../../services/SPBirthdayAnniversaryServiceData';

initializeIcons();

const MyMailIcon = () => <Icon iconName="Mail" />;
const MyTeamsIcon = () => <Icon iconName="TeamsLogo" />;

let spBirthdayServiceData:SPBirthdayAnniversaryServiceData = undefined;
let Images: string[] = [];

debugger;
const BirthdayUsers = (props) => {     
    const [showCallOut, setShowCallOut] = React.useState(false);
    const [showCallOutTeams, setshowCallOutTeams] = React.useState(false);
    const [calloutElement, setCalloutElement] = React.useState(null);
    const [person, setPerson] = React.useState(null);
    const [currentMessage, setCurrentMessage] = React.useState<string>("");
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    const [images, setImages] = React.useState([]);
    const [selectedImage, setSelectedImage] = React.useState<string>("");
    const [message, setMessage] = React.useState<string>("");
    const [msGraphProvider, setMsGraphProvider] = React.useState({
      getCurrentUserId(): Promise<any>{return},
      getUserId(userEmail: string): Promise<any>{return},
      createUsersChat(requesterId: string, birthdayPersonId: string): Promise<any>{return},
      sendMessage(chatId: string, chatMessage: string): Promise<any>{return}
    })
    React.useEffect(() => {         
      init();              
    },[]);

    const init = async() => {
        spBirthdayServiceData = new SPBirthdayAnniversaryServiceData(props.webPartContext);   
        setMsGraphProvider(await useMsGraphProvider(props.webPartContext.msGraphClientFactory));         
        await spBirthdayServiceData.getBirthdayImagesdata()
        .then((res:any)=> {
            Images = [];
            for(let i=0; i<res.length; ++i){
              Images.push(res[i].FileLeafRef);
            }
            setImages(Images);
        })       
    };

    const onSendEmailClicked = (index, person) => event => {
      setShowCallOut(!showCallOut);
      setCalloutElement(index);
      setPerson(person);
    }

    const onSendTeamsMsgClicked = (index, person) => event => {
      setshowCallOutTeams(!showCallOutTeams);
      setCalloutElement(index);
      setPerson(person);
    }

    const onCalloutDismiss = (event) =>{
      setShowCallOut(false);
      setErrorMessage("");
      setSelectedImage("");
      setMessage("");
    } 
    
    const onCalloutTeamsDismiss = (event) =>{
      setshowCallOutTeams(false);
      setErrorMessage("");
      setCurrentMessage("");      
    } 
    
    const handleChange = async(birthmessage :string) => {
      await setMessage(birthmessage);
      await setErrorMessage("");
    }

    const handleClick = async(image) => {
      await setSelectedImage(image);
      await setErrorMessage("");
    }

    const handleChangeEmoji = async(messageEmoji) => {
      await setCurrentMessage(messageEmoji);
    }

    const sendMessage = async(ToEmailId: string) => {
      if(currentMessage === "" || currentMessage === null)
        setErrorMessage("Please write message");        
      let currentUserId = await msGraphProvider.getCurrentUserId(); 
      let userIdToSendMessage = await msGraphProvider.getUserId(ToEmailId);
      let chatOfUser = await msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);
      await msGraphProvider.sendMessage(chatOfUser, currentMessage)
      .then(
        (result: any[]): void => {
          console.log(result);
          setCurrentMessage("");
          setshowCallOutTeams(false);          
        })
        .catch(error => {
          console.log(error);
        });
    }

    const SaveDataClicked = async(message: string, image: string) => {
      let userEmail = props.webPartContext.pageContext.user.email;
      if(message == "" || message == null)    
        setErrorMessage("Please Add message");        
      else if(image == "" || image == null)
        setErrorMessage("Please select image");       
      else{
        const requestlistItem: string = JSON.stringify({
        Title: "Birthday Message",
        EmailSubject: "Happy Birthday",
        EmailBody: message,
        EmailFrom: userEmail,
        EmailTo: person.email,
        EmailCCTo: "",
        ActivityEmail: {'Description': image, 'Url': props.webPartContext.pageContext.web.absoluteUrl + "/BirthdayAnniversaryImages/" + image}   
        });
  
        console.log(requestlistItem);
        props.webPartContext.spHttpClient.post(`${props.webPartContext.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('EmailSender')/items`, SPHttpClient.configurations.v1,  
        {  
          headers: {  
          'Accept': 'application/json;odata=nometadata',  
          'Content-type': 'application/json;odata=nometadata',  
          'odata-version': ''  
          },  
          body: requestlistItem  
        }) 
        .then((response: SPHttpClientResponse): Promise<void> => {  
            return response.json();  
        })  
        .then((item: any): void => {  
            console.log('Item has been created.');
            setShowCallOut(false);
            setMessage("");
            setSelectedImage("");
        }, (error: any): void => {  
            console.log('Error while creating the item: ' + error);
        });   
      }
    }

    return (
      <div>
        {!props.BUsers &&
        <div>
          <Placeholder 
            iconName = ''
            iconText = 'No Birthdays in this month.'
            description = ''/>
        </div>
        }
        {props.BUsers &&      
        <div>      
          {props.BUsers.map((p, i) => {
            let finalbirthdate;
            if(p.birthDate === "" || p.birthDate === undefined)
              finalbirthdate = p.birthDate;
            else{
              let birthdate = new Date(p.birthDate);
              finalbirthdate = new Intl.DateTimeFormat('en-US', {day: '2-digit',month: 'long'}).format(birthdate); 
            }            
            return(              
              <div className = {styles.persona_card}> 
                <Persona primaryText={`${p.name}`} secondaryText={finalbirthdate} tertiaryText={p.email} imageUrl={p.photoUrl} imageAlt={p.name} size={PersonaSize.size72} />                  
                <div>
                  <div id={`callout${i}`} onClick={() => onSendEmailClicked(i, p)} className={styles.persona}>
                    <TooltipHost content="Send Email"><MyMailIcon /></TooltipHost>
                  </div>
                  {(props.dataSource === "Azure" || props.dataSource === "Internal") && 
                    (<div id={`callout${i}`} onClick={() => onSendTeamsMsgClicked(i, p)} className={styles.persona}>
                      <TooltipHost content="Send message in Teams"><MyTeamsIcon /></TooltipHost>
                    </div>) 
                  }
                  {(props.dataSource === "API" && props.IsTeamsIcon) &&
                    (<div id={`callout${i}`} onClick={() => onSendTeamsMsgClicked(i, p)} className={styles.persona}>
                      <TooltipHost content="Send message in Teams"><MyTeamsIcon /></TooltipHost>
                    </div>) 
                  }
                </div>                 
                { showCallOut && calloutElement === i && (
                <Callout
                  className={showCallOut ? styles.calloutShow: styles.callout}
                  gapSpace={16}
                  target={`#callout${i}`}
                  isBeakVisible={true}
                  beakWidth={18}
                  setInitialFocus={true}
                  onDismiss={onCalloutDismiss}
                  directionalHint={DirectionalHint.rightCenter}
                  doNotLayer={false}
                  >
                  <div className={(styles.calloutCard,styles.emailMainContent)}>
                    <h3 className={styles.SendEmailh3}>
                      Send Message to {person.firstName}
                    </h3>        
                    <div className={styles.mt10}>
                      <TextField label="Personal Message" className={styles.emailTextarea}multiline rows={3} onChange={(e) => handleChange(e.currentTarget.value)}/>
                    </div>             
                    <div className={styles.mt10}>
                      <label className={styles.SetLabelWeight}>Select Template:</label>
                      <div className={styles.mt10}>
                        <Carousel
                            pagination={false}
                            itemsToShow={1}
                            itemsToScroll={1}
                            isRTL={false}
                            focusOnSelect={true}>
                            {images.map((img, index) => {
                              return <img src={`${props.webPartContext.pageContext.web.absoluteUrl}/BirthdayAnniversaryImages/${img}`} onClick={(e)=>handleClick(img)} className={selectedImage == img ? styles.selected:''} height="100px" width="100%" margin-top="15px"/>
                            })}     
                        </Carousel>
                        <div style={{color:'#d9534f'}}>{errorMessage}</div>
                      </div>
                    </div>                    
                    <div className={styles.SetSaveBtn}>         
                      <div>
                        <PrimaryButton style={{border:'1px solid #ddd',backgroundColor:'rgb(0,120,212)',color:'#fff', width:'100%'}} onClick={() => SaveDataClicked(message, selectedImage)}>Send</PrimaryButton>
                      </div>                        
                    </div>             
                  </div>
                </Callout> 
                )} 
                
                { showCallOutTeams && calloutElement === i && (
                <Callout
                  className={(showCallOutTeams ? styles.calloutShow: styles.callout, styles.removeHidden)}
                  gapSpace={16}
                  target={`#callout${i}`}
                  isBeakVisible={true}
                  beakWidth={18}
                  setInitialFocus={true}
                  onDismiss={onCalloutTeamsDismiss}
                  directionalHint={DirectionalHint.rightCenter}
                  doNotLayer={false}
                  styles={{ calloutMain: { overflow: 'inherit' } }}
                >
                  <div className={(styles.calloutCard,styles.emailMainContent)}>
                    <h3 className={styles.SendEmailh3}>
                        Send Message to {person.firstName} in Teams
                    </h3>
                    <InputEmoji
                      value={currentMessage}
                      onChange={(messageEmoji) => handleChangeEmoji(messageEmoji)}
                      keepOpenend
                      disableRecent
                      placeholder="Type a message"                             
                    ></InputEmoji>
                    <div style={{color:'#d9534f'}}>{errorMessage}</div>
                    <div className={styles.SetSaveBtn}>
                        <PrimaryButton style={{border:'1px solid #ddd',backgroundColor:'rgb(0,120,212)',color:'#fff', width:'100%'}} onClick={() => sendMessage(person.email)} text="Send" />         
                    </div>
                  </div>
                </Callout> 
                )}                  
              </div>
            );                                                      
          })}
          </div>
          }
    </div>
  );     
}
export default BirthdayUsers