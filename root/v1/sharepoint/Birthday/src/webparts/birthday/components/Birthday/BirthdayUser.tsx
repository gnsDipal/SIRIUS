import * as React from 'react';
import styles from '../Birthday.module.scss';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { IBirthdayUserListProps, IBirthdayUserListState } from './IBirthdayUserListProps';
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Icon } from '@fluentui/react/lib/Icon';
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { TextField } from '@fluentui/react/lib/TextField';
import { Callout, DirectionalHint } from '@fluentui/react/lib/Callout';
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import useMsGraphProvider from "../../../../services/msGraphProvider";
import Carousel from 'react-elastic-carousel';
import InputEmoji from 'react-input-emoji';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import {
  Persona,
  PersonaSize
} from 'office-ui-fabric-react/lib/Persona';

initializeIcons();
const MyMailIcon = () => <Icon iconName="Mail" />;
const MyTeamsIcon = () => <Icon iconName="TeamsLogo" />;

debugger;
let Images: string[] = [];
export default class BirthdayUser extends React.Component<IBirthdayUserListProps, IBirthdayUserListState> {

constructor(props: IBirthdayUserListProps, state: IBirthdayUserListState) {  
  super(props);    
  this.state = {
    showCallOut: false,
    showCallOutTeams: false,      
    calloutElement: null,
    person: null,
    currentMessage: "",
    errorMessage: "",
    images: [],
    selectedImage: "",
    message: "",      
    msGraphProvider: {
      getCurrentUserId(): Promise<any>{return},
      getUserId(userEmail: string): Promise<any>{return},
      createUsersChat(requesterId: string, birthdayPersonId: string): Promise<any>{return},
      sendMessage(chatId: string, chatMessage: string): Promise<any>{return}
    },
  };
  this._onCalloutDismiss = this._onCalloutDismiss.bind(this);
  this._onCalloutTeamsDismiss = this._onCalloutTeamsDismiss.bind(this);
  this.fetchMsGraphProvider = this.fetchMsGraphProvider.bind(this);
}

componentDidMount()
{
  this.fetchMsGraphProvider();
  this._getBirthdayImages();
} 

fetchMsGraphProvider = async () => {
  this.setState({
    msGraphProvider: (await useMsGraphProvider(this.props.webPartContext.msGraphClientFactory))
  });
}

_getBirthdayImages = async () =>
{
  const headers: HeadersInit = new Headers();
  headers.append("accept", "application/json;odata.metadata=none");

      await this.props.webPartContext.spHttpClient
      .get(`${this.props.webPartContext.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('BirthdayAnniversaryImages')/items?$select=ID,Title,FileLeafRef,ImageWidth,ImageHeight,AuthorId&$filter=Category eq 'Birthday'`, SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((result: SPHttpClientResponse) => {          
        return result.json();
      })
      .then((jsonresult) => {
        Images = [];         
        for(let i=0; i<jsonresult.value.length; ++i)
        {
          Images.push(jsonresult.value[i].FileLeafRef);
        }
        this.setState({
          images: Images
        })
      })      
}

_sendMessage = async(ToEmailId: string) =>
{ 
  if(this.state.currentMessage === "" || this.state.currentMessage === null){
    this.setState({
      errorMessage: "Please write message"
    });
  }
  let currentUserId = await this.state.msGraphProvider.getCurrentUserId(); 
  let userIdToSendMessage = await this.state.msGraphProvider.getUserId(ToEmailId);
  let chatOfUser = await this.state.msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);
  await this.state.msGraphProvider.sendMessage(chatOfUser, this.state.currentMessage)
  .then(
    (result: any[]): void => {
      console.log(result);
      this.setState({ 
        currentMessage: "",
        showCallOutTeams: false
      });
    })
    .catch(error => {
      console.log(error);
    });    
} 

private _onSendEmailClicked = (index, person) => event => {
  this.setState({
    showCallOut: !this.state.showCallOut,
    calloutElement: index,
    person: person
  });
}

private _onSendTeamsMsgClicked = (index, person) => event => {    
  this.setState({
    showCallOutTeams: !this.state.showCallOutTeams,
    calloutElement: index,
    person: person
  });
}

private _onCalloutDismiss = (event) => {
  this.setState({
    showCallOut: false,
    errorMessage: "",
    selectedImage: "",
    message: ""
  });
}

private _onCalloutTeamsDismiss = (event) => {
  this.setState({
    showCallOutTeams: false,
    errorMessage: "",
    currentMessage: ""
  });
} 

private handleChangeEmoji(messageEmoji)
{
  console.log("emoji " + messageEmoji);
  this.setState({
    currentMessage: messageEmoji
  });
}

handleClick = async(image) => {

  await this.setState({
    selectedImage:image,
    errorMessage: ""
  })
}

handleChange = async(birthmessage :string) => {
  await this.setState({
    message: birthmessage,
    errorMessage: ""
  })  
}

SaveDataClicked = async(message: string, image: string) =>
  { 
    let userEmail = this.props.webPartContext.pageContext.user.email;
    if(message == "" || message == null)
    {
      this.setState({
        errorMessage: "Please Add message"
      })
      this.render();
    }
    else if(image == "" || image == null)
    {
      this.setState({
        errorMessage: "Please select image"
      })
      this.render();
    }
    else
    {
      const requestlistItem: string = JSON.stringify({
      Title: "Birthday Message",
      EmailSubject: "Happy Birthday",
      EmailBody: message,
      EmailFrom: userEmail,
      EmailTo: this.state.person.email,
      EmailCCTo: "",
      ActivityEmail: {'Description': image, 'Url': this.props.webPartContext.pageContext.web.absoluteUrl + "/BirthdayAnniversaryImages/" + image}   
      });

      console.log(requestlistItem);
      this.props.webPartContext.spHttpClient.post(`${this.props.webPartContext.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('EmailSender')/items`, SPHttpClient.configurations.v1,  
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
          this.setState({             
            showCallOut: false,
            message: "",
            selectedImage: ""
          });
      }, (error: any): void => {  
          console.log('Error while creating the item: ' + error);
      });   
    }
  }

public render(): React.ReactElement<IBirthdayUserListProps> {
  return (
      <div>
        {!this.props.people &&
        <div>
          <Placeholder 
            iconName = ''
            iconText = 'No Birthdays in this month.'
            description = ''/>
        </div>
      }
      {this.props.people &&
      
      <div>
      
      {this.props.people.map((p, i) => {
          let finalbirthdate;
          if(p.birthDate === "" || p.birthDate === undefined)
          {
            finalbirthdate = p.birthDate;
          }
          else
          {
            let birthdate = new Date(p.birthDate);
            finalbirthdate = new Intl.DateTimeFormat('en-US', {day: '2-digit',month: 'long'}).format(birthdate); 
          }   
          
          return(  
            
              <div className = {styles.persona_card}> 
                <Persona primaryText={`${p.name}`} secondaryText={finalbirthdate} tertiaryText={p.email} imageUrl={p.photoUrl} imageAlt={p.name} size={PersonaSize.size72} />                  
                <div>
                  <div id={`callout${i}`} onClick={this._onSendEmailClicked(i, p)} className={styles.persona}>
                    <TooltipHost content="Send Email"><MyMailIcon /></TooltipHost>
                  </div>
                  {this.props.dataSource === "Azure" && 
                    <div id={`callout${i}`} onClick={this._onSendTeamsMsgClicked(i, p)} className={styles.persona}>
                      <TooltipHost content="Send message in Teams"><MyTeamsIcon /></TooltipHost>
                    </div> 
                  }
                  {this.props.dataSource === "Internal" && 
                    <div id={`callout${i}`} onClick={this._onSendTeamsMsgClicked(i, p)} className={styles.persona}>
                      <TooltipHost content="Send message in Teams"><MyTeamsIcon /></TooltipHost>
                    </div> 
                  }
                  {this.props.dataSource === "API" && this.props.IsTeamsIcon &&
                    <div id={`callout${i}`} onClick={this._onSendTeamsMsgClicked(i, p)} className={styles.persona}>
                      <TooltipHost content="Send message in Teams"><MyTeamsIcon /></TooltipHost>
                    </div> 
                  }
                </div>                 
                { this.state.showCallOut && this.state.calloutElement === i && (
                <Callout
                  className={this.state.showCallOut ? styles.calloutShow: styles.callout}
                  gapSpace={16}
                  target={`#callout${i}`}
                  isBeakVisible={true}
                  beakWidth={18}
                  setInitialFocus={true}
                  onDismiss={this._onCalloutDismiss}
                  directionalHint={DirectionalHint.rightCenter}
                  doNotLayer={false}
                  >
                  <div className={(styles.calloutCard,styles.emailMainContent)}>
                    <h3 className={styles.SendEmailh3}>
                      Send Message to {this.state.person.firstName}
                    </h3>        
                      <div className={styles.mt10}>
                        <TextField label="Personal Message" className={styles.emailTextarea}multiline rows={3} onChange={e => this.handleChange(e.currentTarget.value)}/>
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
                              {this.state.images.map((img, index) => {
                                return <img src={`${this.props.webPartContext.pageContext.web.absoluteUrl}/BirthdayAnniversaryImages/${img}`} onClick={e=>this.handleClick(img)} className={this.state.selectedImage == img ? styles.selected:''} height="100px" width="100%" margin-top="15px"/>
                              })}     
                        </Carousel>
                        <div style={{color:'#d9534f'}}>{this.state.errorMessage}</div>
                      </div>
                    </div>
                    
                    <div className={styles.SetSaveBtn}>         
                      <div><PrimaryButton style={{border:'1px solid #ddd',backgroundColor:'rgb(0,120,212)',color:'#fff', width:'100%'}} onClick={()=>this.SaveDataClicked(this.state.message,this.state.selectedImage)}>Send</PrimaryButton></div>                        
                    </div>             
                  </div>
                </Callout> 
                )} 
                
                { this.state.showCallOutTeams && this.state.calloutElement === i && (
                <Callout
                  className={(this.state.showCallOutTeams ? styles.calloutShow: styles.callout, styles.removeHidden)}
                  gapSpace={16}
                  target={`#callout${i}`}
                  isBeakVisible={true}
                  beakWidth={18}
                  setInitialFocus={true}
                  onDismiss={this._onCalloutTeamsDismiss}
                  directionalHint={DirectionalHint.rightCenter}
                  doNotLayer={false}
                  styles={{ calloutMain: { overflow: 'inherit' } }}
                >
                  <div className={(styles.calloutCard,styles.emailMainContent)}>
                    <h3 className={styles.SendEmailh3}>
                        Send Message to {this.state.person.firstName} in Teams
                    </h3>
                    <InputEmoji
                      value={this.state.currentMessage}
                      onChange={(messageEmoji) => this.handleChangeEmoji(messageEmoji)}
                      keepOpenend
                      disableRecent
                      placeholder="Type a message"                             
                    ></InputEmoji>
                    <div style={{color:'#d9534f'}}>{this.state.errorMessage}</div>
                    <div className={styles.SetSaveBtn}>
                        <PrimaryButton style={{border:'1px solid #ddd',backgroundColor:'rgb(0,120,212)',color:'#fff', width:'100%'}} onClick={() => this._sendMessage(this.state.person.email)} text="Send" />         
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
}