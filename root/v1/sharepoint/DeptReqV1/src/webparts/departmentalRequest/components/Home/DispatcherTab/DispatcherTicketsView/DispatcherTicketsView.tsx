import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import * as strings from 'DepartmentalRequestWebPartStrings';
import styles from '../DispatcherTab.module.scss';
import {BrowserRouter as Router,Switch,Route,Link, useParams} from "react-router-dom";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import { Dropdown } from 'office-ui-fabric-react';
import { IStackStyles } from '@fluentui/react/lib/Stack';
import { ToastContainer } from 'react-toastify';
import { Logger, LogLevel} from "@pnp/logging";
import { UserContext } from '../../../Main/Main';
import SPDepartmentalServiceData from '../../../../../../services/SPDepartmentalServiceData';
import * as microsoftTeams from '@microsoft/teams-js';
import DispatcherTab from '../DispatcherTab';
import { passUser } from '../../../../../../model/IDispatcher';
import useMsGraphProvider, { IMSGraphInterface } from '../../../../../../services/msGraphProvider';

//functional component
const DispatcherTicketsView = () => {
    const stackStyles: Partial<IStackStyles> = { root: { width: 169 } };
    let spDispatcherServiceData:SPDepartmentalServiceData = null;
    const {dept} = useParams();
    const mainContext = useContext(UserContext);

    //state variables
    const [dispatcherDetails, setDispatcherDetails] = useState([]);
    const [unlockDispatcherData, setUnlockDispatcherData] = useState(false);
    const [deptListDropDown, setDeptListDropDown] = useState([]);
    const [idSelect, setIdSelect] = useState(0);
    const [passAssignedToUser, setPassAssignedToUser] = useState<passUser>({key:0,text:''});
    const [deleteSelectedTicket, setDeleteSelectedTicket] = useState<string>('')
    const [randomIndex, setRandomIndex] = useState(0)
    const [dispatcherFileAddition, setDispatcherFileAddition] = useState<File[]>(null);
    const [dispatcherNotification, setDispatcherNotification] = useState(0);
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
    //initial method
    const init = () => {
        //Initialize Microsoft teams sdk
        microsoftTeams.initialize();
        spDispatcherServiceData = new SPDepartmentalServiceData(mainContext);
        spDispatcherServiceData.getDispatcherTicketData(dept)
       .then((res)=>{
           setDispatcherDetails(res);
           setUnlockDispatcherData(true); // Condition for displaying table data
       fetchMsGraphProvider();

       });
      }
      const fetchMsGraphProvider = async () => {
        setMsGraphProvider(await useMsGraphProvider(mainContext.webPartContext.msGraphClientFactory))
      }

     const getUserByDept=(control,reAssignTo,department,idNumber)=>{
        // grpName= department;
        // this.loadDepartmentOptions();
        spDispatcherServiceData.getDepartmentOptionsByGroupName(department)
        .then(
          data=>{
              setDeptListDropDown(data); // dept list dropdown
              setIdSelect(idNumber); // setting the current selected Id
          })  
      }
      const onUserSelect=(userName,selectedName, ticketNumber)=>{
        setPassAssignedToUser(selectedName);
        setDeleteSelectedTicket(ticketNumber);
      }
      const onDispatcherFileAddition = (dispatcherFileAdd) => {
        setDispatcherFileAddition(dispatcherFileAdd);
      }

      const _sendMessage = async(ToEmailId ,raisedBy, dept) =>
      { 
        if(mainContext.webPartContext.sdks.microsoftTeams) 
        {
          let currentUserId = await msGraphProvider.getCurrentUserId(); 
          let userIdToSendMessage = await msGraphProvider.getUserId(ToEmailId);
          let chatOfUser = await msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);          
          const url = encodeURI(`https://teams.microsoft.com/l/entity/6bc42c01-5a4f-480e-bd2a-f048e32d1b5f/${mainContext.webPartContext.sdks.microsoftTeams.context.entityId}?context={"subEntityId": null,"channelId":${chatOfUser}}`);
          
          let message =  `
          <div style="border-style:solid; border-width:1px; padding:10px;">
          <div>Departmental Request Application</div>
          <hr />
          <div style="background: #eaeaff; font-weight: bold ">
            <a href="${url}">A new Request created by ${raisedBy}  has been assigned to you</a>
          </div>
          </div><br />
          `;    
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

           let url =  `${mainContext.webPartContext.pageContext.web.absoluteUrl}#/assigned/In Process/${dept}`
           let message =  `
           <div style="border-style:solid; border-width:1px; padding:10px;">
           <div>Departmental Request Application</div>
           <hr />
           <div style="background: #eaeaff; font-weight: bold ">
               <a href="${url}">A new Request created by ${raisedBy}  has been assigned to you</a>
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
         };    
    }; 
      const onSubmitDropDownHandle = async(newPeoplePicker:any,idRequest:number,assignedToUser,ticketNumberCheck,raisedBy, dept) => {
              if(deleteSelectedTicket === ticketNumberCheck){
              await spDispatcherServiceData.getEmail(assignedToUser.key)
              .then(res=>{
                _sendMessage(res,raisedBy,dept);
              })
              setDispatcherNotification(1);
             await spDispatcherServiceData.addMultipleDispatcherAttachmentLoop(idRequest,dispatcherFileAddition)
             .then(r=>{
                 spDispatcherServiceData.addDispatcherReAssign(assignedToUser,idRequest,raisedBy)
                 .then(r=>{
                  let items = dispatcherDetails.filter(item=> item.dataId !==idRequest);
                 setDispatcherDetails(items);
                 setDeptListDropDown([]);
                 setPassAssignedToUser({key:null,text:''});
                 setRandomIndex(Math.floor(Math.random() * 6) + 1);
                 setDispatcherNotification(0);
              })
             })
            }
        };
    return (
        <div className={styles.dispatcherTab}>
            <div className="ms-Grid" dir="ltr"> 
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-lg4 ms-sm4">
                <Link to="/dispatcher"><Icon iconName={strings.NavigateBackLabel} className={styles.iconSize}></Icon></Link>
                </div>
              </div> 
              <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg12 ms-sm12">
            <div className={styles.overFlowX}>
            <table className={styles.tableSet} >
                <thead>
                  <tr>
                    <th>{strings.TicketNumberLabel}</th>
                    <th>{strings.RaisedByLabel}</th>
                    <th>{strings.IssueDateLabel}</th>
                    <th>{strings.DescriptionLabel}</th>
                    <th>{strings.AssignToLabel}</th>
                    <th>{strings.AttachmentFromRequesterLabel}</th>
                    <th>{strings.AttachmentFromDispatcherLabel}</th>
                    <th>{strings.UpdateLabel}</th>
                  </tr>
                </thead>
                <tbody>
                  {
                   dispatcherDetails.map((res,index)=>{
                   var issuedDate = new Date(res.issueDate).toLocaleDateString();
                      return(
                        <tr>
                          <td>{res.ticketNumber}</td>
                          <td>{res.raisedBy}</td>
                          <td>{issuedDate}</td>
                          <td>{res.description}</td>
                           <td>
                            <Dropdown
                             id={res.ticketNumber + '_dropDown'} 
                             placeholder={strings.SelectOptionLabel}
                             defaultSelectedKey={" "}
                            onClick={(e)=>getUserByDept(res.ticketNumber + '_dropDown',res.reAssignedTo,res.supportDeptName,res.dataId)} 
                            options={deptListDropDown}
                            onChange={(e,selectedName)=>onUserSelect(e,selectedName,res.ticketNumber)}>
                            </Dropdown>
                          </td>
                          <td key={index}>
                            {
                            res.attachmentFileName.map((r,i)=>{
                              return(
                                <a href={r.ServerRelativeUrl}> {`${r.FileName}\n`}</a>
                              )
                            })
                            }
                          </td>
                          <td>
                             <input multiple type={strings.FileLabel} className={styles.dispatcherAttachmentInput}
                              key={randomIndex}
                              onChange={(e)=>onDispatcherFileAddition(e.target.files)}
                             />
                          </td>
                         <td>
                          <Icon iconName={strings.SaveLabel} className={styles.saveIcon} onClick={(e)=>onSubmitDropDownHandle(e,res.dataId,passAssignedToUser,res.ticketNumber,res.raisedBy,res.department)}></Icon>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
                </table>
               </div>
              </div>
            </div> 
            <ToastContainer/>
                {
                  (dispatcherNotification === 1) &&
                  Logger.writeJSON("Ticket dispatched",LogLevel.Info)
                }  
            </div>  
            <Switch>
                <Route exact path="/dispatcher" component={()=><DispatcherTab />}></Route>
            </Switch>      
        </div>
    );       
};
export default DispatcherTicketsView;
