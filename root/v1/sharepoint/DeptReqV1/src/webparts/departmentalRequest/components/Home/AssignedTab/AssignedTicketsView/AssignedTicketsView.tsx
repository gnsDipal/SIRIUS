import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import styles from '../AssignedTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import {BrowserRouter as Router,Switch,Route,Link, useParams} from "react-router-dom";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import { Dropdown, IDropdownOption, TextField } from 'office-ui-fabric-react';
import { Stack, IStackStyles } from '@fluentui/react/lib/Stack';
import { ToastContainer } from 'react-toastify';
import { Logger, LogLevel} from "@pnp/logging";
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
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
const AssignedTicketsView = () => {
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
    const [assignedListData,setAssignedListData] = useState(null);
    const [loadData,setLoadData] = useState<boolean>(false);
    const [indexSelect,setIndexSelect] = useState(0);
    const [commentData,setCommentData] = useState('');
    const [statusOptions,setStatusOptions] = useState<IDropdownOption[]>([]);
    const [deptListDropDown,setDeptListDropDown] = useState<IDropdownOption[]>([]);
    const [statusCompletedCheck,setStatusCompletedCheck] = useState(0);
    const [deleteSelectedTicket,setDeleteSelectedTicket] = useState('');
    const [passAssignedToUser,setPassAssignedToUser] = useState<passUser>({
        key:0,
        text:''
    });
    const [idSelect,setIdSelect] = useState<number>(0);
    const [assignedNotification,setAssignedNotification] = useState<number>(0);
    const [ticketCount,setTicketCount] = useState<number>(0);
    const [emailId,setEmailId] = useState<string>('');
    const [msGraphProvider,setMsGraphProvider] = useState<IMSGraphInterface>(
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
       setAssignedListData(res);
       setLoadData(true); //unlock data view
       fetchMsGraphProvider()
   });
    if(mainContext.sdks.microsoftTeams){ 
      mainContext.sdks.microsoftTeams.context.subEntityId = "/assigned";
      alert("mainContext.sdks.microsoftTeams.context.subEntityId = " + mainContext.sdks.microsoftTeams.context.subEntityId);
      alert("mainContext.sdks.microsoftTeams.context.entityId = " + mainContext.sdks.microsoftTeams.context.entityId);
    }
  }

  const fetchMsGraphProvider = async () => {
    setMsGraphProvider(await useMsGraphProvider(mainContext.msGraphClientFactory))
  }

 function onTextFieldClickHandle(ticketNumber){
    setIndexSelect(ticketNumber)
}

function inputComment(event){  
    setCommentData(event.target.value)
  }

function loadStatusList(){

    setStatusOptions([
        {key:1, text:'In Process'},
        {key:2, text:'Completed'},
    ])
  }

 function onStatusChangeHandle(selectedStatus,ticketNumber,department,idNumber,authorId){
    console.log(selectedStatus,ticketNumber);
    if(selectedStatus.text === 'Completed'){
      this.getEmail(authorId);
      setDeptListDropDown([]);
      setStatusCompletedCheck(2);
      setDeleteSelectedTicket(ticketNumber);
      setPassAssignedToUser({
        key:null,
        text:''
      })

    }
    if(selectedStatus.text === 'In Process'){
      spAssignedServiceData.getDeptOptionsByGrpName(department)
      .then(
        data=>{
          setDeptListDropDown(data);
          setIdSelect(idNumber);
          setStatusCompletedCheck(1);
          setDeleteSelectedTicket(ticketNumber);
        }
      )
    }
}

function getUserByDept(control,reAssignTo,department,idNumber){
  if(statusCompletedCheck === 1) {
    spAssignedServiceData.getDeptOptionsByGrpName(department)
   .then(
    data=>{
        console.log(data);
        setDeptListDropDown(data);
        setIdSelect(idNumber);
    }
  )
}else
{
  setDeptListDropDown([]);
}
}

async function onUserSelect(userName,selectedName, ticketNumber){
  console.log(userName,selectedName);
  let AssignedUserEmailId:string = await spAssignedServiceData.getEmailId(selectedName.key);
  setEmailId(AssignedUserEmailId);
  setPassAssignedToUser(selectedName);
  setDeleteSelectedTicket(ticketNumber);
}

async function onSubmitDropDownHandle(commentData:string,idRequest:number,assignedToUser,ticketNumberCheck,department){
        if(deleteSelectedTicket === ticketNumberCheck){
          if(assignedToUser.text != ''){
            // SetEmailId(AssignedUserEmailId.Email);
            setAssignedNotification(1);
            spAssignedServiceData.addReAssignedToData(assignedToUser,idRequest,commentData,ticketNumberCheck).then(r=>{
              var items = assignedListData.filter(item=> item.dataId !==idRequest);
              _sendReAssignedTeamsMessage(emailId, ticketNumberCheck, department);
              setAssignedListData(items);
              setDeptListDropDown([]);
              setTicketCount(ticketCount - 1);
              setPassAssignedToUser({
                key:null,
                text:''
              });
              setStatusCompletedCheck(0);
              setStatusOptions([]);
              setCommentData('');
              setAssignedNotification(0);

            })
          }
          if(assignedToUser.text === '' && (this.state.statusCompletedCheck === 2) ){
            _sendCompletedStatusTeamsMessage(emailId,ticketNumberCheck);
            setAssignedNotification(1);
           spAssignedServiceData.getCompletedWithStatusUpdate(idRequest,commentData).then(r =>{
            var items = assignedListData.filter(item=> item.dataId !==idRequest);
            //Setting state variables
            setAssignedListData(items);
            setDeptListDropDown([]);
            setTicketCount(ticketCount - 1);
            setPassAssignedToUser({
              key:null,
              text:''
            });
            setStatusCompletedCheck(0);
            setStatusOptions([]);
            setCommentData('');
            setAssignedNotification(0);

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
                         content={strings.TicketLabel}
                      ><Icon iconName={strings.AssignLabel} className={styles.iconSize} ></Icon>
                      </TooltipHost>             
                    </div>
                    <div className="ms-Grid-col ms-lg4 ms-sm4">
                      <TooltipHost
                         content={strings.AllLabel}
                      ><Icon iconName={strings.ViewAllLabel} className={styles.iconSize} ></Icon>
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
            { loadData && // unlock data view
             assignedListData.map((res,index)=>{
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
                      type="text"
                      onClick={()=>onTextFieldClickHandle(res.dataId)}
                       defaultValue=""
                       value={
                        (indexSelect === res.dataId)?
                        commentData:''}
                       onChange={inputComment}
                     ></TextField>    
                     </Stack>
                    </td>
                    <td>
                      <Dropdown
                        placeholder='Select Status'
                       label={'Status'}
                        options={statusOptions}
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
                      options={deptListDropDown}
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
                    <Icon iconName={strings.SaveLabel} className={styles.saveIcon} onClick={(e)=>onSubmitDropDownHandle(commentData,res.dataId,passAssignedToUser,res.ticketNumber,res.department)}></Icon>
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
        (assignedNotification === 1) &&
        Logger.writeJSON("Ticket assigned",LogLevel.Info)
      } 
      </div>
               
            </div>
            <Switch>
                <Route exact path="/assigned" component={(props)=><AssignedTab/>}></Route>
            </Switch>
         </div>
    )
}

export default AssignedTicketsView
