import * as React from 'react';
import styles from '../../Birthday.module.scss';
import { initializeIcons } from "@fluentui/font-icons-mdl2";;
import { PrimaryButton, Callout, DirectionalHint, TextField, Icon, TooltipHost, Persona, PersonaSize } from "@fluentui/react";
import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import useMsGraphProvider, { IMSGraphInterface } from "../../../../../services/msGraphProvider";
import InputEmoji from 'react-input-emoji';
import Carousel from 'react-elastic-carousel';
import SPBirthdayAnniversaryServiceData from '../../../../../services/SPBirthdayAnniversaryServiceData';
import * as strings from 'BirthdayWebPartStrings';
import { IAnniversary } from '../../../../../Models/IAnniversary';

initializeIcons();
const AnniversaryUsers = (props) => {
    let spAnniversaryServiceData:SPBirthdayAnniversaryServiceData = null;
    const [showCallOut, setShowCallOut] = React.useState(false);
    const [showCallOutTeams, setshowCallOutTeams] = React.useState(false);
    const [calloutElement, setCalloutElement] = React.useState(null);
    const [person, setPerson] = React.useState(null);
    const [currentMessage, setCurrentMessage] = React.useState<string>("");
    const [errorMessage, setErrorMessage] = React.useState<string>("");
    const [images, setImages] = React.useState([]);
    const [selectedImage, setSelectedImage] = React.useState<string>("");
    const [message, setMessage] = React.useState<string>("");
    const [callInit, setCallInit] = React.useState<number>(0);
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [upperPageBound, setUpperPageBound] = React.useState<number>(3);
    const [lowerPageBound, setLowerPageBound] = React.useState<number>(0);
    const [isPrevBtnActive, setIsPrevBtnActive] = React.useState<string>('disabled');
    const [isNextBtnActive, setIsNextBtnActive] = React.useState<string>('');
    const [pageBound, setPageBound] = React.useState<number>(3);
    const [currentRecords, setCurrentRecords] = React.useState<IAnniversary[]>([]);
    const [renderPageNumbers, setRenderPageNumbers] = React.useState<JSX.Element[]>(null);
    const [pageIncrementBtn, setPageIncrementBtn] = React.useState<JSX.Element>(null);
    const [pageDecrementBtn, setPageDecrementBtn] = React.useState<JSX.Element>(null);
    const [renderPrevBtn, setRenderPrevBtn] = React.useState<JSX.Element>(null);
    const [renderNextBtn, setRenderNextBtn] = React.useState<JSX.Element>(null);
    const [prevListid, setPrevListid] = React.useState<string>("");
    const [btnclicked, setBtnclicked] = React.useState<boolean>(false);
    const [msGraphProvider, setMsGraphProvider] = React.useState<IMSGraphInterface>({
        getCurrentUserId(): Promise<any>{return},
        getUserId(userEmail: string): Promise<any>{return},
        createUsersChat(requesterId: string, birthdayPersonId: string): Promise<any>{return},
        sendMessage(chatId: string, chatMessage: string): Promise<any>{return}
    });
    const LiField = React.useRef(null);
    const MyMailIcon = () => <Icon iconName="Mail" />;
    const MyTeamsIcon = () => <Icon iconName="TeamsLogo" />; 
    const recPerpage: number = 1;
    spAnniversaryServiceData = new SPBirthdayAnniversaryServiceData(props);
    React.useEffect(() => {
        if(callInit === 0)           
            init();
        getPaginationDetails();
        if(prevListid !== "" && btnclicked === true){
            document.getElementById(prevListid).classList.remove("active_b5e9b0f9");
        }              
    },[currentPage, props.AUsers]);

    React.useEffect(() => {
        if(prevListid !== "" && btnclicked === true){            
            document.getElementById(currentPage.toString()).classList.add("active_b5e9b0f9");
            setBtnclicked(false);    
        }  
    },[renderPageNumbers]);

    React.useEffect(() => {
        if(currentPage !== 1)
            document.getElementById(currentPage.toString()).classList.remove("active_b5e9b0f9");
        setCurrentPage(1);
        setUpperPageBound(3);
        setLowerPageBound(0);
        setPageIncrementBtn(null);
        setPageDecrementBtn(null);
        setIsNextBtnActive('');
        setIsPrevBtnActive('disabled');
    },[props.IfDropdownChanged]);

    const init = async() => {           
        setMsGraphProvider(await useMsGraphProvider(props.webPartContext.msGraphClientFactory));   
        await spAnniversaryServiceData.getAnniversaryImagesdata()
            .then((res:any)=> {
                let Images: string[] = [];  //to store birthday images loaded from library
                for(let i=0; i<res.length; ++i){
                  Images.push(res[i].FileLeafRef);
                }
                setImages(Images);
                setCallInit(1);
            });
    };

    const getPaginationDetails = () => {        
        const Records: IAnniversary[] = props.AUsers;
        const indexOfLastRec = currentPage * recPerpage;
        const indexOfFirstRec = indexOfLastRec - recPerpage;
        let finalRecords = Records.slice(indexOfFirstRec, indexOfLastRec);
        setCurrentRecords(finalRecords);
        
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(Records.length / recPerpage); i++) {
            pageNumbers.push(i);
        }

        let finalPageNumbers = pageNumbers.map(number => {
            if(number === 1 && currentPage === 1){
                return(
                    <li ref={LiField} key={number} className={styles.active} id={number}><a href='#' id={number} onClick={handlePageClick}>{number}</a></li>
                )
            }
            else if((number < upperPageBound + 1) && number > lowerPageBound){
                return(
                    <li key={number} id={number}><a href='#' id={number} onClick={handlePageClick}>{number}</a></li>
                )
            }            
        });        
        setRenderPageNumbers(finalPageNumbers);
        let pageIncBtn = null;
        if(pageNumbers.length > upperPageBound){
            pageIncBtn = <li className=''><a href='#' onClick={btnIncrementClick}> &raquo; </a></li>
            setPageIncrementBtn(pageIncBtn);
        }
        else    
            setPageIncrementBtn(pageIncBtn);
        let pageDecBtn = null;
        if(lowerPageBound >= 1){
            pageDecBtn = <li className=''><a href='#' onClick={btnDecrementClick}> &laquo; </a></li>
            setPageDecrementBtn(pageDecBtn);
        }
        else
            setPageDecrementBtn(pageDecBtn);
        let rendPrevBtn = null;
        if(isPrevBtnActive === 'disabled') {
            rendPrevBtn = <li className={styles.disabled}><span id="btnPrev"> Prev </span></li>
            setRenderPrevBtn(rendPrevBtn);
        }
        else if(isPrevBtnActive !== 'disabled'){
            rendPrevBtn = <li className=''><a href='#' id="btnPrev" onClick={btnPrevClick}> Prev </a></li>
            setRenderPrevBtn(rendPrevBtn);
        }
        else
            setRenderPrevBtn(rendPrevBtn);
        let rendNextBtn = null;
        if(isNextBtnActive === 'disabled') {
            rendNextBtn = <li className={styles.disabled}><span id="btnNext"> Next </span></li>
            setRenderNextBtn(rendNextBtn);
        }
        else if(isNextBtnActive !== 'disabled'){
            rendNextBtn = <li className=''><a href='#' id="btnNext" onClick={btnNextClick}> Next </a></li>
            setRenderNextBtn(rendNextBtn);
        }
        else
            setRenderNextBtn(rendNextBtn); 
    };

    const handlePageClick = (event) => {
        let listid = Number(event.target.id);
        if(currentPage === 1){
            LiField.current.classList.remove("active_b5e9b0f9");
            document.getElementById(event.target.id).classList.add("active_b5e9b0f9");
        }
        else{
            document.getElementById(currentPage.toString()).classList.remove("active_b5e9b0f9");
            document.getElementById(event.target.id).classList.add("active_b5e9b0f9");
        }   
        setCurrentPage(listid);       
        setPrevAndNextBtnClass(listid);
    };

    const setPrevAndNextBtnClass = (listid: number) => {
        let totalPage = Math.ceil(props.AUsers.length / recPerpage);
        setIsNextBtnActive("disabled");
        setIsPrevBtnActive("disabled");        
        if(totalPage === listid && totalPage > 1){
            setIsPrevBtnActive("");
        }
        else if(listid === 1 && totalPage > 1){
            setIsNextBtnActive("");
        }
        else if(totalPage > 1){
            setIsNextBtnActive("");
            setIsPrevBtnActive("");            
        }
    };

    const btnIncrementClick = () => {
        setBtnclicked(true);
        setPrevListid(currentPage.toString());
        setUpperPageBound(upperPageBound + pageBound);
        setLowerPageBound(lowerPageBound + pageBound);        
        let listid = upperPageBound + 1;
        setCurrentPage(listid);
        setPrevAndNextBtnClass(listid);
    };

    const btnDecrementClick = () => {
        setBtnclicked(true);
        setPrevListid(currentPage.toString());
        setUpperPageBound(upperPageBound - pageBound);
        setLowerPageBound(lowerPageBound - pageBound);      
        let listid = upperPageBound - pageBound;
        setCurrentPage(listid);
        setPrevAndNextBtnClass(listid);
    };

    const btnPrevClick = () => {
        setBtnclicked(true);
        setPrevListid(currentPage.toString());
        if((currentPage - 1) % pageBound === 0 ){
            setUpperPageBound(upperPageBound - pageBound);
            setLowerPageBound(lowerPageBound - pageBound);            
        }
        let listid = currentPage - 1;
        setCurrentPage(listid);
        setPrevAndNextBtnClass(listid);
    };

    const btnNextClick = () => {
        setBtnclicked(true);
        setPrevListid(currentPage.toString());
        if((currentPage + 1) > upperPageBound ){
            setUpperPageBound(upperPageBound + pageBound);
            setLowerPageBound(lowerPageBound + pageBound);            
        }
        let listid = currentPage + 1;
        setCurrentPage(listid);
        setPrevAndNextBtnClass(listid);
    };

    const onSendEmailClicked = (index, person) => {
        setShowCallOut(!showCallOut);
        setCalloutElement(index);
        setPerson(person);
    };

    const onSendTeamsMsgClicked = (index, person) => {
        setshowCallOutTeams(!showCallOutTeams);
        setCalloutElement(index);
        setPerson(person);
    };

    const onCalloutDismiss = (event) =>{
        setShowCallOut(false);
        setErrorMessage("");
        setSelectedImage("");
        setMessage("");
    }; 
    
    const onCalloutTeamsDismiss = (event) =>{
        setshowCallOutTeams(false);
        setErrorMessage("");
        setCurrentMessage("");      
    }; 

    const handleChange = async(birthmessage :string) => {
        setMessage(birthmessage);
        setErrorMessage("");
    };

    const handleClick = async(image) => {
        setSelectedImage(image);
        setErrorMessage("");
    };

    const handleChangeEmoji = async(messageEmoji) => {
        setCurrentMessage(messageEmoji);
    };

    //send messagein teams
    const sendMessageInTeams = async(ToEmailId: string) => {
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
    };

    //save data to email sending list
    const SaveDataClicked = async(message: string, image: string) => {
        let userEmail = props.webPartContext.pageContext.user.email;
        if(message == "" || message == null)
            setErrorMessage("Please Add message");        
        else if(image == "" || image == null)
            setErrorMessage("Please select image");       
        else{
            const requestlistItem: string = JSON.stringify({
                Title: "Work Anniversary Message",
                EmailSubject: "Happy Work Anniversary",
                EmailBody: message,
                EmailFrom: userEmail,
                EmailTo: person.email,
                EmailCCTo: "",
                ActivityEmail: {'Description': image, 'Url': props.webPartContext.pageContext.web.absoluteUrl + "/BirthdayAnniversaryImages/" + image}   
            });

            await spAnniversaryServiceData.addEmailDataToList(requestlistItem)
            .then((item: any): void => {  
                console.log('Item has been created.');
                setShowCallOut(false);
                setMessage("");
                setSelectedImage("");
            }, (error: any): void => {  
                console.log('Error while creating the item: ' + error);
            });   
        }
    };

    return (
        <div>
        {!props.AUsers &&
            <div>
                <Placeholder 
                  iconName = ''
                  iconText = {strings.noAnniversaryTet}
                  description = ''/>
            </div>
        }
        {props.AUsers &&
            <div>
                <div id="page-numbers" className={ styles.pagination}>
                    {renderPrevBtn}
                    {pageDecrementBtn}
                    {renderPageNumbers}
                    {pageIncrementBtn}
                    {renderNextBtn}
                </div>
                <div>
                    {currentRecords.map((p, i) => {
                        let finalhiredate;
                        if(p.hireDate === "" || p.hireDate === undefined)
                            finalhiredate = p.hireDate;
                        else{
                            let hiredate = new Date(p.hireDate);
                            finalhiredate = new Intl.DateTimeFormat('en-US', {day: '2-digit',month: 'long'}).format(hiredate); 
                        } 
                        return(                
                        <div className = {styles.persona_card}> 
                            <Persona primaryText={p.name} secondaryText={finalhiredate} tertiaryText={p.email} imageUrl={p.photoUrl} imageAlt={p.name} size={PersonaSize.size72} />                
                            <div>
                                <div id={`callout${i}`} onClick={() => onSendEmailClicked(i, p)} className={styles.persona}>
                                    <TooltipHost content={strings.sendEmailTooltipContent}><MyMailIcon /></TooltipHost>
                                </div>                  
                                {(props.dataSource === "Azure" || props.dataSource === "Internal") && 
                                    (<div id={`callout${i}`} onClick={() => onSendTeamsMsgClicked(i, p)} className={styles.persona}>
                                        <TooltipHost content={strings.sendMessageTooltipContent}><MyTeamsIcon /></TooltipHost>
                                    </div>) 
                                }
                                {(props.dataSource === "API" && props.IsTeamsIcon) &&
                                    (<div id={`callout${i}`} onClick={() => onSendTeamsMsgClicked(i, p)} className={styles.persona}>
                                        <TooltipHost content={strings.sendMessageTooltipContent}><MyTeamsIcon /></TooltipHost>
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
                                    {strings.sendMsgText} {person.firstName}
                                </h3>        
                                <div className={styles.mt10}>
                                    <TextField label={strings.personalMsgText} className={styles.emailTextarea}multiline rows={3} onChange={(e) => handleChange(e.currentTarget.value)}/>
                                </div>             
                                <div className={styles.mt10}>
                                    <label>{strings.templateText}</label>
                                    <div className={styles.mt10}>
                                        <Carousel
                                            pagination={false}
                                            itemsToShow={1}
                                            itemsToScroll={1}
                                            isRTL={false}
                                            focusOnSelect={true}>
                                                {images.map((img, index) => {
                                                    return <img src={`${props.webPartContext.pageContext.web.absoluteUrl}/BirthdayAnniversaryImages/${img}`} onClick={(e) => handleClick(img)} className={selectedImage == img ? styles.selected:''} height="100px" width="100%" margin-top="15px"/>
                                            })}                                                
                                        </Carousel>
                                        <div style={{color:'#d9534f'}}>{errorMessage}</div>
                                    </div>
                                </div>                    
                                <div className={styles.SetSaveBtn}>                                                                                                        
                                    <div><PrimaryButton style={{border:'1px solid #ddd',backgroundColor:'rgb(0,120,212)',color:'#fff', width:'100%'}} onClick={() => SaveDataClicked(message,selectedImage)}>{strings.sendText}</PrimaryButton></div>                        
                                </div>             
                            </div>
                            </Callout>)}
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
                                    {strings.sendMsgText} {person.firstName} in Teams
                                </h3>
                                <div>
                                    <InputEmoji
                                        value={currentMessage}
                                        onChange={(messageEmoji) => handleChangeEmoji(messageEmoji)}
                                        keepOpenend
                                        disableRecent
                                        placeholder="Type a message"
                                    />
                                </div>                      
                                <div style={{color:'#d9534f'}}>{errorMessage}</div>
                                <div className={styles.SetSaveBtn}>
                                    <PrimaryButton style={{border:'1px solid #ddd',backgroundColor:'rgb(0,120,212)',color:'#fff', width:'100%'}} onClick={() => sendMessageInTeams(person.email)} text={strings.sendText} />         
                                </div>
                            </div>
                            </Callout>)}                                    
                        </div>);                                                      
                    })}
                </div>
            </div>
        }
    </div>
  );
}
export default AnniversaryUsers
