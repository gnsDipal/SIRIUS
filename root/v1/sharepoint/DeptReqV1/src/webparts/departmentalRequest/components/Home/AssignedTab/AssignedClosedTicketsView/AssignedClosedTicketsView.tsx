import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import styles from '../AssignedTab.module.scss'
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link, useParams} from "react-router-dom";
import { IconButton } from '@fluentui/react/lib/Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import { Dropdown, IDropdown, IDropdownOption, optionProperties, TextField, Tooltip } from 'office-ui-fabric-react';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { ToastContainer, toast } from 'react-toastify';
import { Logger, ConsoleListener,FunctionListener, ILogEntry,ILogListener, LogLevel} from "@pnp/logging";

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
const AssignedClosedTicketsView = () => {
    const {Closed,dept} = useParams();
    const mainContext = useContext(UserContext);

    //State variables
    const [AssignedClosedListData,SetAssignedClosedListData] = useState(null);
    const [LoadData, SetLoadData] = useState(false);

    useEffect(() => { 
        init();              
   },[]);

   const init = () => {
    spAssignedServiceData = new SPDepartmentalServiceData(mainContext);
    spAssignedServiceData.getAssignToListData(Closed,dept)
   .then((res)=>{
       console.log('res = ' + res.length);
       SetAssignedClosedListData(res);
       SetLoadData(true);
   });
  }

    return (
        <div className={styles.assignedTab}>
        <div className="ms-Grid" dir="ltr"> 
          {/* <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12">
              <Link to="/assigned"><button>Back</button></Link>
           </div>             
          </div> */}

          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg4 ms-sm4">
            <Link to="/assigned"><Icon iconName='NavigateBack' style={{fontSize:'25px', cursor:'pointer'}}></Icon></Link>
            </div>
                {/* <div className="ms-Grid-col ms-lg4 ms-sm4">
                  <TooltipHost
                     content="Tickets"
                  ><Icon iconName='Assign' style={{fontSize:'25px', cursor:'pointer'}} ></Icon>
                  </TooltipHost>             
                </div> */}
                {/* <div className="ms-Grid-col ms-lg4 ms-sm4">
                  <TooltipHost
                     content="All"
                  ><Icon iconName='ViewAll' style={{fontSize:'25px', cursor:'pointer'}} ></Icon>
                  </TooltipHost>
                </div> */}
          </div>

        <div className="ms-Grid-row">
         <div className="ms-Grid-col ms-lg12 ms-sm12">
          <div style={{overflowX:'auto'}}>
           <table className={styles.tableSet} >
            <thead>
              <tr>
                <th>Ticket Number</th>
                <th>Raised By</th>
                <th>Issue Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Attachment from Requester</th>
                <th>Attachment from Dispatcher</th>
              </tr>
            </thead>
            <tbody>
              { (LoadData) &&
               AssignedClosedListData.map((res,index)=>{
               var issuedDate = new Date(res.issueDate).toLocaleDateString();
                  return(
                    <tr>
                      <td>{res.ticketNumber}</td>
                      <td>{res.raisedBy}</td>
                      <td>{issuedDate}</td>
                      <td>{res.description}</td>
                      <td>{res.category}</td>
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
                    </tr>
                  )
                })
              }
            </tbody>
            </table>
           </div>
          </div>
        </div>
        <Switch>
            <Route exact path="/assigned" component={(props)=><AssignedTab {...props}/>}></Route>
        </Switch>
      </div>
     </div>
    )
}

export default AssignedClosedTicketsView
