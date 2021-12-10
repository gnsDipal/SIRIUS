import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import styles from '../AssignedTab.module.scss';
import {BrowserRouter as Router,Switch,Route,Link, useParams} from "react-router-dom";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import AssignedTab from '../AssignedTab';
import { UserContext } from '../../../Main/Main';
import SPDepartmentalServiceData from '../../../../../../services/SPDepartmentalServiceData';
import * as strings from 'DepartmentalRequestWebPartStrings';

let spAssignedServiceData: SPDepartmentalServiceData = null;
const stackStyles: Partial<IStackStyles> = { root: { width: 169 } };
//Main function
const AssignedClosedTicketsView = () => {
    const {Closed,dept} = useParams();
    const mainContext = useContext(UserContext);
    //State variables
    const [assignedClosedListData,setAssignedClosedListData] = useState(null);
    const [loadData, setLoadData] = useState(false);
    useEffect(() => { 
        init();              
   },[]);
   const init = () => {
    spAssignedServiceData = new SPDepartmentalServiceData(mainContext);
    spAssignedServiceData.getAssignToListData(Closed,dept)
   .then((res)=>{
       console.log('res = ' + res.length);
       setAssignedClosedListData(res);
       setLoadData(true);
   });
  }

    return (
        <div className={styles.assignedTab}>
        <div className="ms-Grid" dir="ltr"> 
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg4 ms-sm4">
            <Link to="/assigned"><Icon iconName={strings.NavigateBackLabel} style={{fontSize:'25px', cursor:'pointer'}}></Icon></Link>
            </div>
          </div>

        <div className="ms-Grid-row">
         <div className="ms-Grid-col ms-lg12 ms-sm12">
          <div style={{overflowX:'auto'}}>
           <table className={styles.tableSet} >
            <thead>
              <tr>
                <th>{strings.TicketNumberLabel}</th>
                <th>{strings.RaisedByLabel}</th>
                <th>{strings.IssueDateLabel}</th>
                <th>{strings.DescriptionLabel}</th>
                <th>{strings.CategoryLabel}</th>
                <th>{strings.AttachmentFromRequesterLabel}</th>
                <th>{strings.AttachmentFromDispatcherLabel}</th>
              </tr>
            </thead>
            <tbody>
              { (loadData) && //unlock the data view
               assignedClosedListData.map((res,index)=>{
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
            <Route exact path="/assigned" component={()=><AssignedTab />}></Route>
        </Switch>
      </div>
     </div>
    )
}
export default AssignedClosedTicketsView
