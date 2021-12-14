import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import styles from '../ManagerTab.module.scss';
import * as strings from 'DepartmentalRequestWebPartStrings';
import {BrowserRouter as Router,Link, useParams} from "react-router-dom";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import { IStackStyles } from '@fluentui/react/lib/Stack';
import { UserContext } from '../../../Main/Main';
import SPDepartmentalServiceData from '../../../../../../services/SPDepartmentalServiceData';

let spManagerServiceData: SPDepartmentalServiceData = null;
const stackStyles: Partial<IStackStyles> = { root: { width: 169 } };
const ManagerTicketsView = () => {
    const {managerStatus,dept} = useParams();
    const mainContext = useContext(UserContext);  
    //State variables
    const [managerData, setManagerData] = useState([]);
    const [unlockData, setUnlockData] = useState(false);
    useEffect(() => { 
        init();              
   },[]);
   const init = () => {
        spManagerServiceData = new SPDepartmentalServiceData(mainContext);
        spManagerServiceData.getDeptListInfo(managerStatus,dept)
       .then(res=>{
        setManagerData(res);
           setUnlockData(true);
       })
   }
    return (
        <div className={styles.managerTab}>
              <div className="ms-Grid" dir="ltr"> 
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-lg4 ms-sm4">
                <Link to="/manager"><Icon iconName={strings.NavigateBackLabel} className={styles.iconSize}></Icon></Link>
                </div>
              </div>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-lg12 ms-sm12">
                   <div className={styles.overFlowCheck}>
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
                       managerData.map((res,index)=>{
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
export default ManagerTicketsView