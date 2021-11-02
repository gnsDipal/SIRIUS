import * as React from 'react';
import styles from '../AssignedToView/AssignedToView.module.scss';
import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { IBasePickerSuggestionsProps, IPeoplePickerProps, NormalPeoplePicker, ValidationState } from '@fluentui/react/lib/Pickers';
//import { people, mru } from '@fluentui/example-data';
import DepartmentalRequest from '../DepartmentalRequest/DepartmentalRequest'
import { IAssignState } from '../AssignedToView/IAssignState';
import { IAssignProps, IAllAssignProps } from '../AssignedToView/IAssignProps';
import {IAllAssignState} from './IAllAssignState'
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';
import {IDepartmentList, IDispacherList} from '../DepartmentalRequest/IDepartmentList'
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { IconButton } from '@fluentui/react/lib/Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import { Dropdown, IDropdown, IDropdownOption, optionProperties, TextField } from 'office-ui-fabric-react';
import { Item } from '@pnp/sp/items';
import { result } from 'lodash';
import NoDataDispatcherView from '../NoDataDispatcherView/NoDataDispatcherView';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';

import {
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneSlider,
  PropertyPaneToggle,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';

import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  IDetailsFooterProps,
  DetailsRow,
  SelectionMode,
  DetailsRowCheck,
  IDetailsRowBaseProps,
  IDetailsRowCheckStyles,
} from '@fluentui/react/lib/DetailsList';

export interface IMyIssueList {
  created:string,
  description:string,
  category:string,
  department:string,
  assignedTo:string,
  comment:string,
  status:string,
  attachments:string
}

var work;


// debugger;
export default class AllAssignedToView extends React.Component<IAllAssignProps,IAllAssignState> {


  constructor(props) {
    super(props);
    this.state={
      loading:false,
    errorMessage:'',
    homeButton:0,
    allDetails:[]
    }
  }

  componentDidMount(){
    this.allAssignToListInfo();
  }

  private allAssignToListInfo():void{
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/lists/getbytitle('EmpReq')/items?$select=*,Author/Title,ReAssignTo/Title,AttachmentFiles&$expand=Author,ReAssignTo,AttachmentFiles&$filter=ReAssignToId eq ${this.props.currentUserId}&$orderby=ID desc`,
      SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((res: SPHttpClientResponse): Promise<any> => {
        return res.json();
      })
      .then((res: any): void => {
        if (res.error) {
        //   // There was an error loading information about people.
        //   // Notify the user that loading data is finished and return the
        //   // error message that occurred
           this.setState({
             loading: false,
             errorMessage: res.error.message,
              });
          return;
        }
        if (res.value == 0) {
          // No results were found. Notify the user that loading data is finished
          this.setState({
            loading: false
          });
          return;
        }
        let createdDateFormat = new Date('').toLocaleDateString();
        this.setState({
          // ticketCount:res.value.length,
          allDetails:res.value.map((r,index)=>{
            return{
              ticketNumber:`INC_${r.Department}_000${r.ID}`,
              supportDeptName:r.DepartmentGroup,
              raisedBy:r.Author.Title,
              issueDate:r.Created,
              description:r.Description,
              category:r.Category,
              department:r.Department,
              status:r.Status,
              dispatcherDeptName:r.AssignedTo,
              reAssignedTo:r.ReAssignTo,
              dataId:r.ID
            }
          }) 
        })
        console.log("allDetails[0].reAssignedTo.text = " + this.state.allDetails[0].reAssignedTo.Title);
  
    if(this.state.allDetails.length>0){
    this.setState({
      loading:false,
    })
    }
  }, (error: any): void => {
    this.setState({
      loading: false,
      errorMessage: error
    });
  })
  .catch((error: any): void => {
    this.setState({
      loading: false,
      errorMessage: error
    });
  });
 }

  

  homeButtonClick(){
    this.setState({
      homeButton:1,
    });
    console.log("homeButton= " + this.state.homeButton);
  }
 
  public render(): React.ReactElement<IAllAssignProps> {
    return (
      <div className={ styles.assignedToView }>
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
                      <th>Status</th>
                      <th>ReAssigned To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                     this.state.allDetails.map((res,index)=>{
                     var issuedDate = new Date(res.issueDate).toLocaleDateString();
                        return(
                          <tr>
                            <td>{res.ticketNumber}</td>
                            <td>{res.raisedBy}</td>
                            <td>{issuedDate}</td>
                            <td>{res.description}</td>
                            <td>{res.category}</td>
                            <td>{res.status}</td>
                            <td>{res.reAssignedTo.Title}</td>
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
    );
  }
}





  



