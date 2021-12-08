import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import styles from '../MyRequestTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings'
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link, useParams, useLocation} from "react-router-dom";
import { IconButton } from '@fluentui/react/lib/Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import { Dropdown, IDropdown, IDropdownOption, optionProperties, TextField, Tooltip } from 'office-ui-fabric-react';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { Logger, ConsoleListener,FunctionListener, ILogEntry,ILogListener, LogLevel} from "@pnp/logging";
import * as queryString from 'query-string';
import { TooltipHost, ITooltipHostStyles } from '@fluentui/react/lib/Tooltip';
import MyRequestTab from '../MyRequestTab';
import { UserContext } from '../../../Main/Main';
import SPDepartmentalServiceData from '../../../../../../services/SPDepartmentalServiceData';
import { passUser } from '../../../../../../model/MyRequestedEachPlateData';
import useMsGraphProvider, { IMSGraphInterface } from '../../../../../../services/msGraphProvider';
import * as microsoftTeams from '@microsoft/teams-js';

let spMyRequestServiceData: SPDepartmentalServiceData = null;
const stackStyles: Partial<IStackStyles> = { root: { width: 169 } };
const MyRequestTicketsView = () => {
    const {myReqStatus,dept} = useParams();
    const mainContext = useContext(UserContext);
    //State variables
    const [myRequestedData, setMyRequestedData] = useState([]);
    const [unlockData, setUnlockData] = useState(false);
    useEffect(() => { 
        init();              
   },[]);
   const init = () => {
       spMyRequestServiceData = new SPDepartmentalServiceData(mainContext);
       spMyRequestServiceData.getDeptListInfo(myReqStatus,dept)
       .then(res=>{
           setMyRequestedData(res);
           setUnlockData(true);
       })
   }
    return (
        <div className={styles.myRequestTab}>
            <div className="ms-Grid" dir="ltr"> 
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-lg4 ms-sm4">
                <Link to="/requested"><Icon iconName={strings.NavigateBackLabel} className={styles.iconSize}></Icon></Link>
                </div>
              </div>
              <div className="ms-Grid-row">
         <div className="ms-Grid-col ms-lg12 ms-sm12">
         <div style={{overflowX:'auto'}}>
         <table className={styles.tableSet} >
             <thead>
               <tr>
                 <th>{strings.RaisedByLabel}</th>
                  <th>{strings.TicketNumberLabel}</th>
                 <th>{strings.IssueDateLabel}</th>
                 <th>{strings.DescriptionLabel}</th>
                 <th>{strings.CategoryLabel}</th>
                 <th>{strings.DepartmentLabel}</th>
                 <th>{strings.CommentLabel}</th>
                 <th>{strings.StatusLabel}</th>
                 <th>{strings.DispatcherGroupLabel}</th>
                 <th>{strings.ReAssignToLabel}</th>
                 <th>
                   <Icon iconName={strings.AttachLabel} />
                 </th>
               </tr>
             </thead>
             <tbody>
               {
                myRequestedData.map((res,index)=>{
                var issuedDate = new Date(res.issueDate).toLocaleDateString();
                   return(
                     <tr>
                       <td>{res.raisedBy}</td>
                       <td>{res.ticketNumber}</td>
                       <td>{issuedDate}</td>
                       <td>{res.description}</td>
                       <td>{res.category}</td>
                       <td>{res.department}</td>
                       <td>{res.comment}</td>
                       <td>{res.status}</td>
                       <td>{res.dispatcherDeptName}</td>
                       <td>{res.reAssignedTo.Title}</td>
                       <td>
                          {
                            res.attachmentFileName.map((r,i)=>{
                                    return(
                                        <a href={r.ServerRelativeUrl}> {r.FileName}</a>
                                    )
                            })                     
                          }
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
            </div>
        </div>
    )
}

export default MyRequestTicketsView
