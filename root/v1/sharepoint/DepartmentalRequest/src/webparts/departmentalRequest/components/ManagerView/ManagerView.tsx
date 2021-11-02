import * as React from 'react';
import styles from '../AssignedToView/AssignedToView.module.scss';
  // import styles from './ManagerView.module.scss'
import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { IBasePickerSuggestionsProps, IPeoplePickerProps, NormalPeoplePicker, ValidationState } from '@fluentui/react/lib/Pickers';
//import { people, mru } from '@fluentui/example-data';
import DepartmentalRequest from '../DepartmentalRequest/DepartmentalRequest'
import { IManagerState } from './IManagerState';
import { IManagerProps } from './IManagerProps';
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
import AllAssignedToView from '../AllAssignedToView/AllAssignedToView';
import {IManagerList} from './IManagerList';
import ManagerViewSelect from '../ManagerViewSelect/ManagerViewSelect';
import {
  Spinner,
  SpinnerSize
} from 'office-ui-fabric-react/lib/Spinner';

// debugger;

var grpName:string = 'IT Support';
var pickerGroupNames:(IPersonaProps)[]=[];
var flag=0;

const stackStyles: Partial<IStackStyles> = { root: { width: 169 } };

  export default class ManagerView extends React.Component<IManagerProps, IManagerState> {

 
 constructor(props){
   super(props)
   this.state = {
    mostRecentlyUsed:[],
    peopleList:[],
    ticketCount:0,
    newPeoplePickerUser:'',
    loading:false,
    errorMessage:'',
    managerDetails:[],
    indexSelect:0,
    homeButton:0,
    idSelect:0,
    deptListDropDown:[],
    passAssignedToUser:{
      id:0,
      text:''
    },
    deleteSelectedTicket:'',
    statusOptions:[],
    statusCompletedCheck:0,
    assignedIssuesButton:0,
    allIssuesButton:0,
    allDetails:[],
    commentData:'',
    requiredManagerId:2
   }
  
 }

  componentDidMount(){
    this.loadAllEmployeeRequestListInfo();
 
  }

   private loadAllEmployeeRequestListInfo():void{
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/lists/getbytitle('EmpReq')/items?$select=*,Author/Title,ReAssignTo/Title,DepartmentManager/Title,AttachmentFiles&$expand=Author,ReAssignTo,DepartmentManager,AttachmentFiles&$filter=Department eq '${this.props.passedDept}' and Status eq '${this.props.passedStatus}' &$orderby=ID desc`,
      SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((res: SPHttpClientResponse): Promise<any> => {
        return res.json();
      })
      .then((res: any): void => {
        if (res.error) {
           this.setState({
             errorMessage: res.error.message,
              });
          return;
        }
        if (res.value.length == 0) {
          this.setState({
            requiredManagerId:0
          });
          return;
        }
        if(res.value.length > 0){
        let createdDateFormat = new Date('').toLocaleDateString();
        this.setState({
          requiredManagerId:1,
          managerDetails:res.value.map((r,index)=>{
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
              reAssignedTo:r.ReAssignTo?r.ReAssignTo:' ',
              dataId:r.ID,
              comment:r.Comment?r.Comment:' '
            }
          })
        })
        console.log("managerDetails[0].reAssignedTo.text = " + this.state.managerDetails[0].reAssignedTo.Title);
      }
    if(this.state.managerDetails.length>0){
    this.setState({
      loading:false,
    })   
    }
  }, (error: any): void => {
    this.setState({
      errorMessage: error
    });
  })
  .catch((error: any): void => {
    this.setState({
      errorMessage: error
    });
  });
 }

  onBackButtonClick(){
      this.setState({
        homeButton:0
      })  
  }


  onSubmitHandle(){
    this.setState({
      // loadPeoplePicker:0
    })
  }

  homeButtonClick(){
    this.setState({
      homeButton:1,
    })
  }

  assignedIssuesButton(){
      this.setState({
        assignedIssuesButton:1,
        allIssuesButton:0
      })
  }

  allAssignedIssuesButton(){
    this.setState({
      allIssuesButton:1,
      assignedIssuesButton:0
    });
    // this.allAssignToListInfo();
  }

  public render(): React.ReactElement<IManagerProps> {
  return (
    <div className={styles.assignedToView}>
      {(this.state.homeButton === 0) && (this.state.requiredManagerId === 1) &&
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-lg4 ms-sm4">
             <Icon iconName='NavigateBack' style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>this.homeButtonClick()} ></Icon>
          </div>
        </div>
      <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-lg12 ms-sm12">
      <div style={{overflowX:'auto'}}>
      <table className={styles.tableSet} >
          <thead>
            <tr>
              <th>Raised By</th>
               <th>Ticket Number</th>
              <th>Issue Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Department</th>
              <th>Comment</th>
              <th>Status</th>
              <th>Dispatcher Group</th>
              <th>ReAssign To</th>
            </tr>
          </thead>
          <tbody>
            {
             this.state.managerDetails.map((res,index)=>{
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
                    {/* <td>{res.reAssignedTo.Title?res.reAssignedTo.Title: ' '} */}
                    <td>{res.reAssignedTo.Title}
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
  }
  {
    (this.state.homeButton === 0) && (this.state.requiredManagerId === 0) && 
    <div className="ms-Grid">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-lg4 ms-sm4">
           <Icon iconName='Home' style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>this.homeButtonClick()} ></Icon>
        </div>
      </div>
      <h3>There are no tickets in your Department</h3>
    </div>
  }
  {
    (this.state.homeButton === 0) && (this.state.requiredManagerId == 2) &&
    <div>
      {
            this.state.loading &&
            <Spinner size={SpinnerSize.large} label='Loading'/>
      }
    </div>
  }

  {(this.state.homeButton === 1) &&
              <ManagerViewSelect webPartContext={this.props.webPartContext} msGraphClientFactory={this.props.msGraphClientFactory} currentUserId={this.props.currentUserId} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl} emailType={this.props.emailType} description={this.props.description}/>
  }
    </div>
  );
}
}

