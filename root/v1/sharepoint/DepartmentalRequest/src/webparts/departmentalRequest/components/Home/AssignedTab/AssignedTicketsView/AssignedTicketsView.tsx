import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import styles from '../AssignedTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings'
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link, useParams, useLocation} from "react-router-dom";
import { IconButton } from '@fluentui/react/lib/Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import { Dropdown, IDropdown, IDropdownOption, optionProperties, TextField, Tooltip } from 'office-ui-fabric-react';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { ToastContainer, toast } from 'react-toastify';
import { Logger, ConsoleListener,FunctionListener, ILogEntry,ILogListener, LogLevel} from "@pnp/logging";
import * as queryString from 'query-string';

import { TooltipHost, ITooltipHostStyles } from '@fluentui/react/lib/Tooltip';
import AssignedTab from '../AssignedTab';
import { UserContext } from '../../../Main/Main';
import SPDepartmentalServiceData from '../../../../../../services/SPDepartmentalServiceData';
import { passUser } from '../../../../../../model/MyRequestedEachPlateData';
import useMsGraphProvider, { IMSGraphInterface } from '../../../../../../services/msGraphProvider';
import * as microsoftTeams from '@microsoft/teams-js';

// debugger;
let spAssignedServiceData: SPDepartmentalServiceData = null;
const stackStyles: Partial<IStackStyles> = { root: { width: 169 } };
//Main function
const AssignedTicketsView = (props) => {
    // let loc = useLocation();
    // const urlSearchParams = new URLSearchParams(loc);
    // const params = Object.fromEntries(urlSearchParams.entries());
    // const search = useLocation().serach;
    // const main = new URLSearchParams(search).get('main');
    // const loc = useLocation();
    // const locMain = new URLSearchParams(loc).get('main');
    const {Inprocess,dept} = useParams();
    const mainContext = useContext(UserContext);


    //State variables
    const [AssignedListData,SetAssignedListData] = useState(null);
    const [LoadData,SetLoadData] = useState<boolean>(false);
    const [IndexSelect,SetIndexSelect] = useState(0);
    const [CommentData,SetCommentData] = useState('');
    const [StatusOptions,SetStatusOptions] = useState<IDropdownOption[]>([]);
    const [DeptListDropDown,SetDeptListDropDown] = useState<IDropdownOption[]>([]);
    const [StatusCompletedCheck,SetStatusCompletedCheck] = useState(0);
    const [DeleteSelectedTicket,SetDeleteSelectedTicket] = useState('');
    const [PassAssignedToUser,SetPassAssignedToUser] = useState<passUser>({
        key:0,
        text:''
    });
    const [IdSelect,SetIdSelect] = useState<number>(0);
    const [AssignedNotification,SetAssignedNotification] = useState<number>(0);
    const [TicketCount,SetTicketCount] = useState<number>(0);
    const [EmailId,SetEmailId] = useState<string>('');
    const [msGraphProvider,SetMsGraphProvider] = useState<IMSGraphInterface>(
      {
        getCurrentUserId(): Promise<any>{return},
        getUserId(userEmail: string): Promise<any>{return},
        createUsersChat(requesterId: string, birthdayPersonId: string): Promise<any>{return},
        sendMessage(chatId: string, chatMessage: string): Promise<any>{return}
      }
    );
    

    useEffect(() => { 
        init();              
   },[]);

   const init = () => {
    //Initialize Microsoft teams sdk
    microsoftTeams.initialize();
    // console.log('main = ' + main);
    // alert('main = ' + main);
    // alert('search = ' + search);
    // alert('loc = ' + loc);
    // alert('loc.main = ' + loc.main);
    spAssignedServiceData = new SPDepartmentalServiceData(mainContext);
    spAssignedServiceData.getAssignToListData(Inprocess,dept)
   .then((res)=>{
       console.log('res = ' + res.length);
       SetAssignedListData(res);
       SetLoadData(true);
       console.log('AssignedListData = ' + AssignedListData );
       fetchMsGraphProvider()
   });
    if(mainContext.sdks.microsoftTeams){ 
      mainContext.sdks.microsoftTeams.context.subEntityId = "/assigned";
      alert("mainContext.sdks.microsoftTeams.context.subEntityId = " + mainContext.sdks.microsoftTeams.context.subEntityId);
      alert("mainContext.sdks.microsoftTeams.context.entityId = " + mainContext.sdks.microsoftTeams.context.entityId);
    }
  }

  const fetchMsGraphProvider = async () => {
    SetMsGraphProvider(await useMsGraphProvider(mainContext.msGraphClientFactory))
  }

 function onTextFieldClickHandle(ticketNumber){
    SetIndexSelect(ticketNumber)
}

function inputComment(event){  
    SetCommentData(event.target.value)
  }

function loadStatusList(){

    SetStatusOptions([
        {key:1, text:'In Process'},
        {key:2, text:'Completed'},
    ])
  }

 function onStatusChangeHandle(selectedStatus,ticketNumber,department,idNumber,authorId){
    console.log(selectedStatus,ticketNumber);
    if(selectedStatus.text === 'Completed'){
      this.getEmail(authorId);
      SetDeptListDropDown([]);
      SetStatusCompletedCheck(2);
      SetDeleteSelectedTicket(ticketNumber);
      SetPassAssignedToUser({
        key:null,
        text:''
      })

    }
    if(selectedStatus.text === 'In Process'){
      spAssignedServiceData.getDeptOptionsByGrpName(department)
      .then(
        data=>{
          SetDeptListDropDown(data);
          SetIdSelect(idNumber);
          SetStatusCompletedCheck(1);
          SetDeleteSelectedTicket(ticketNumber);
        }
      )
    }
}

function getUserByDept(control,reAssignTo,department,idNumber){
  if(StatusCompletedCheck === 1) {
    spAssignedServiceData.getDeptOptionsByGrpName(department)
   .then(
    data=>{
        console.log(data);
        SetDeptListDropDown(data);
        SetIdSelect(idNumber);
    }
  )
}
else
{
  SetDeptListDropDown([]);
}
}

async function onUserSelect(userName,selectedName, ticketNumber){
  console.log(userName,selectedName);
  let AssignedUserEmailId:string = await spAssignedServiceData.getEmailId(selectedName.key);
  SetEmailId(AssignedUserEmailId);
  SetPassAssignedToUser(selectedName);
  SetDeleteSelectedTicket(ticketNumber);
}

async function onSubmitDropDownHandle(commentData:string,idRequest:number,assignedToUser,ticketNumberCheck,department){
        if(DeleteSelectedTicket === ticketNumberCheck){
          if(assignedToUser.text != ''){
            // SetEmailId(AssignedUserEmailId.Email);
            SetAssignedNotification(1);
            spAssignedServiceData.addReAssignedToData(assignedToUser,idRequest,commentData,ticketNumberCheck).then(r=>{
              var items = AssignedListData.filter(item=> item.dataId !==idRequest);
              _sendReAssignedTeamsMessage(EmailId, ticketNumberCheck, department);
              SetAssignedListData(items);
              SetDeptListDropDown([]);
              SetTicketCount(TicketCount - 1);
              SetPassAssignedToUser({
                key:null,
                text:''
              });
              SetStatusCompletedCheck(0);
              SetStatusOptions([]);
              SetCommentData('');
              SetAssignedNotification(0);

            })
          }
          if(assignedToUser.text === '' && (this.state.statusCompletedCheck === 2) ){
            _sendCompletedStatusTeamsMessage(EmailId,ticketNumberCheck);
            SetAssignedNotification(1);
           spAssignedServiceData.getCompletedWithStatusUpdate(idRequest,commentData).then(r =>{
            var items = AssignedListData.filter(item=> item.dataId !==idRequest);
            //Setting state variables
            SetAssignedListData(items);
            SetDeptListDropDown([]);
            SetTicketCount(TicketCount - 1);
            SetPassAssignedToUser({
              key:null,
              text:''
            });
            SetStatusCompletedCheck(0);
            SetStatusOptions([]);
            SetCommentData('');
            SetAssignedNotification(0);

           })
          }
      } 
  }
  // &path=${loc.pathname}
  const _sendReAssignedTeamsMessage = async(ToEmailId: string, ticketNumber:string,department:string)=>{

    if(mainContext.sdks.microsoftTeams) 
    {
    let currentUserId = await msGraphProvider.getCurrentUserId(); 
    let userIdToSendMessage = await msGraphProvider.getUserId(ToEmailId);
    let chatOfUser = await msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);

    const url = encodeURI(`https://teams.microsoft.com/l/entity/9c81173a-1b57-4a3c-9b5e-0a97015460f6/${mainContext.sdks.microsoftTeams.context.entityId}?context={"subEntityId":${mainContext.sdks.microsoftTeams.context.subEntityId}&path=main,"channelId":${chatOfUser}}`)

    let message =  `
    <div style="border-style:solid; border-width:1px; padding:10px;">
    <div>Departmental Request Application</div>
    <hr />
    <div style="background: #eaeaff; font-weight: bold ">
        <a href="${url}">Ticket number: ${ticketNumber} has been reassigned to you</a>
    </div>
    </div><br />
    `
    ;

    const chatMessage:any = {
      body: {
          contentType: "html",
          content: message
      }
  };

    await msGraphProvider.sendMessage(chatOfUser, chatMessage)
    .then(
      (result: any[]): void => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });   
    }    
    
    else{
    let currentUserId = await msGraphProvider.getCurrentUserId(); 
    let userIdToSendMessage = await msGraphProvider.getUserId(ToEmailId);
    let chatOfUser = await msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);

    let url = `${mainContext.pageContext.web.absoluteUrl}#/assigned/In Process/${department}`
    let message =  `
    <div style="border-style:solid; border-width:1px; padding:10px;">
    <div>Departmental Request Application</div>
    <hr />
    <div style="background: #eaeaff; font-weight: bold ">
        <a href="${url}">Ticket number: ${ticketNumber} has been reassigned to you</a>
    </div>
    </div><br />
    `
    ;

    const chatMessage:any = {
      body: {
          contentType: "html",
          content: message
      }
  };
    

    await msGraphProvider.sendMessage(chatOfUser, chatMessage)
    .then(
      (result: any[]): void => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });    
  }    
  }

  const _sendCompletedStatusTeamsMessage=async(ToEmailId: string,ticketNumber:string)=>{
   
    let currentUserId = await msGraphProvider.getCurrentUserId(); 
    let userIdToSendMessage = await msGraphProvider.getUserId(ToEmailId);
    let chatOfUser = await msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);

    let url = `${mainContext.pageContext.web.absoluteUrl}`
    let message =  `
    <div style="border-style:solid; border-width:1px; padding:10px;">
    <div>Departmental Request Application</div>
    <hr />
    <div style="background: #eaeaff; font-weight: bold ">
        <span>The request ${ticketNumber} you created has been marked as complete.</span>
    </div>
    </div><br />
    `
    ;

    const chatMessage:any = {
      body: {
          contentType: "html",
          content: message
      }
  };
    

    await msGraphProvider.sendMessage(chatOfUser, chatMessage)
    .then(
      (result: any[]): void => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });    
  }

    return (
         <div className={styles.assignedTab}>
            <div className="ms-Grid" dir="ltr"> 
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-lg4 ms-sm4">
                <Link to="/assigned"><Icon iconName='NavigateBack' className={styles.iconSize}></Icon></Link>
                </div>
                    <div className="ms-Grid-col ms-lg4 ms-sm4">
                      <TooltipHost
                         content="Tickets"
                      ><Icon iconName='Assign' className={styles.iconSize} ></Icon>
                      </TooltipHost>             
                    </div>
                    <div className="ms-Grid-col ms-lg4 ms-sm4">
                      <TooltipHost
                         content="All"
                      ><Icon iconName='ViewAll' className={styles.iconSize} ></Icon>
                      </TooltipHost>
                    </div>
              </div>

      <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-lg12 ms-sm12">
      <div className={styles.tableAutoFlow}>
      <table className={styles.tableSet} >
          <thead>
            <tr>
              <th>{strings.TicketNumberLabel}</th>
              <th>{strings.RaisedByLabel}</th>
              <th>{strings.IssueDateLabel}</th>
              <th>{strings.DescriptionLabel}</th>
              <th>{strings.CategoryLabel}</th>
              <th>{strings.CommentLabel}</th>
              <th>{strings.ActionLabel}</th>
              <th>{strings.AttachmentFromRequesterLabel}</th>
              <th>{strings.AttachmentFromDispatcherLabel}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { LoadData &&
             AssignedListData.map((res,index)=>{
             var issuedDate = new Date(res.issueDate).toLocaleDateString();
                return(
                  <tr>
                    <td>{res.ticketNumber}</td>
                    <td>{res.raisedBy}</td>
                    <td>{issuedDate}</td>
                    <td>{res.description}</td>
                    <td>{res.category}</td>
                    <td id={`${index}`}>
                    <Stack horizontal styles={stackStyles}>
                     <TextField multiline rows={3}
                      key={index}
                      // ref={textInput}
                      type="text"
                      // accessKey={res.ticketNumber}
                      onClick={()=>onTextFieldClickHandle(res.dataId)}
                       defaultValue=""
                       value={
                        (IndexSelect === res.dataId)?
                        CommentData:''}
                       onChange={inputComment}
                     ></TextField>    
                     </Stack>
                    </td>
                    <td>
                      <Dropdown
                        placeholder='Select Status'
                       label={'Status'}
                        options={StatusOptions}
                         defaultSelectedKey={" "}
                        onClick={()=>loadStatusList()}
                        onChange={(e,selectedStatusOption)=>onStatusChangeHandle(selectedStatusOption,res.ticketNumber,res.supportDeptName,res.dataId,res.authorId)}>
                      </Dropdown>
                      <Dropdown
                       id={res.ticketNumber + '_dropDown'} 
                       placeholder='Select User'
                       label={'ReAssigned To'}
                       defaultSelectedKey={" "}
                      onClick={(e)=>getUserByDept(res.ticketNumber + '_dropDown',this,res.supportDeptName,res.dataId)} 
                      options={DeptListDropDown}
                      onChange={(e,selectedName)=>onUserSelect(e,selectedName,res.ticketNumber)}>
                      </Dropdown>
                    </td>

                    <td>
                      {
                        res.attachmentFileName.map((r,i)=>{
                          if(r.FileName.substring(0,3) === "REQ"){
                          return(
                            <a href={r.ServerRelativeUrl}> {r.FileName}</a>
                          )
                          }
                        })                     
                      }
                    </td>
        
                    <td>
                    {
                        res.attachmentFileName.map((r,i)=>{
                          if(r.FileName.substring(0,4) === "DISP"){
                          return(
                            <a href={r.ServerRelativeUrl}> {r.FileName}</a>
                          )
                          }
                        })
                      
                      }
                    </td>
                    <td>
                    <Icon iconName="Save" className={styles.saveIcon} onClick={(e)=>onSubmitDropDownHandle(CommentData,res.dataId,PassAssignedToUser,res.ticketNumber,res.department)}></Icon>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
          </table>
         </div>
        </div>
        <ToastContainer/>
      {
        (AssignedNotification === 1) &&
        Logger.writeJSON("Ticket assigned",LogLevel.Info)
      } 
      </div>
               
            </div>
            <Switch>
                <Route exact path="/assigned" component={(props)=><AssignedTab {...props}/>}></Route>
            </Switch>
         </div>
    )
}

export default AssignedTicketsView
