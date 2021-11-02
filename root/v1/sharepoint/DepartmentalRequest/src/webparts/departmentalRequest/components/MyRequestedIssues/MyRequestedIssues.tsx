import * as React from 'react';
import styles from './MyRequestedIssues.module.scss';
import { IMyRequestedIssuesProps } from './IMyRequestedIssuesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import {IMyRequestedIssuesState} from './IMyRequestedIssuesState';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import {  IStackTokens } from '@fluentui/react';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';
import {IMyRequestList} from './IMyRequestedIssues';
//import Select from 'react-select';
import DepartmentalRequest from '../DepartmentalRequest/DepartmentalRequest'
import 'office-ui-fabric-react/dist/css/fabric.css';

import { IconButton } from '@fluentui/react/lib/Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';

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
import { Attachment, Attachments } from 'sp-pnp-js/lib/graph/attachments';
import MyRequestedSelect from '../MyRequestedSelect/MyRequestedSelect';

export interface IMyIssueList {
  created:string,
  description:string,
  category:string,
  department:string,
  assignedTo:string,
  comment:string,
  status:string,
  attachments:File
}

// var deptDetails:IMyRequestList[];


// debugger;
export default class MyRequestedIssues extends React.Component<IMyRequestedIssuesProps,IMyRequestedIssuesState> {

  private _items: IMyIssueList[] = [];
  private _itemsArchive: IMyIssueList[] = [];
  private _columns: IColumn[];

  constructor(props) {
    super(props);
    // this._items = this.props.issueDataList;
    // this._itemsArchive = this.props.archiveIssueDataList;
    this.state={
      loading:false,
      errorMessage:'',
      ticketCount:0,
      deptDetails:[],
      homeButton:0,
      myIssuesUnlock:1,
      archiveIssuesUnlock:0,
      noDataUnlock:0
    }

    this.loadDeptListInfo();
  }

  private loadDeptListInfo():void{
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/lists/getbytitle('EmpReq')/items?$select=*,Author/Title,ReAssignTo/Title,AttachmentFiles&$expand=Author,ReAssignTo,AttachmentFiles&$filter=Department eq '${this.props.passedDept}' and Status eq '${this.props.passedStatus}' and Author eq ${this.props.currentUserId} &$orderby=ID desc`,
      SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((res: SPHttpClientResponse): Promise<any> => {
        return res.json();
      })
      .then((res: any): void => {
        if (res.error) {
           this.setState({
             loading: false,
             errorMessage: res.error.message,
              });
          return;
        }
        if (res.value.length == 0) {

          this.setState({
            loading: false,
            noDataUnlock:1
          });
          return;
        }
        if(res.value.length>0){
        let createdDateFormat = new Date('').toLocaleDateString();
        this.setState({
          ticketCount:res.value.length,
          deptDetails:res.value.map((r,index)=>{
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
              reAssignedTo:r.ReAssignTo?r.ReAssignTo:'',
              dataId:r.ID,
              comment:r.Comment?r.Comment:'',
              attachmentFileName:r.AttachmentFiles.length?r.AttachmentFiles[0].FileName:'',
              getAttachmentData:r.AttachmentFiles.length?r.AttachmentFiles[0].ServerRelativeUrl:''
            }
          }) 
        })
        console.log("deptDetail = " + this.state.deptDetails[0].supportDeptName);
      }
    if(this.state.deptDetails.length>0){
    this.setState({
      loading:false,
    });
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

  myIssuesButtonClickHandle(){
    this.setState({
      myIssuesUnlock:1,
      archiveIssuesUnlock:0
    })
  }

  myArchiveIssuesButtonClickHandle(){
    this.setState({
      myIssuesUnlock:0,
      archiveIssuesUnlock:1
    })
  }
 
  public render(): React.ReactElement<IMyRequestedIssuesProps> {
    return (
      <div className={ styles.myRequestedIssues }>
        {(this.state.homeButton === 0) &&
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg12">
            <Icon iconName='NavigateBack' style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>this.homeButtonClick()} ></Icon>
            </div>
          </div>
        </div>
        } 
        {(this.state.homeButton === 0) && (this.state.noDataUnlock === 0) &&
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
                 <th>
                   <Icon iconName='Attach' style={{fontSize:'25px'}}/>
                 </th>
               </tr>
             </thead>
             <tbody>
               {
                this.state.deptDetails.map((res,index)=>{
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
                          <a href={res.getAttachmentData}> {res.attachmentFileName}</a>
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
        }

      {(this.state.homeButton === 0) && (this.state.noDataUnlock === 1) &&
        <div className="ms-Grid">
        <div className="ms-Grid-row">
          <h4>No Data to be displayed</h4>
       </div>
      </div>
      }


      {(this.state.homeButton === 1) &&
          <MyRequestedSelect webPartContext={this.props.webPartContext} msGraphClientFactory={this.props.msGraphClientFactory} emailType={this.props.emailType} description={this.props.description} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl}  currentUserId={this.props.currentUserId}/>
      }
     </div>
    );
  }

private _onRenderDetailsFooter(detailsFooterProps: IDetailsFooterProps): JSX.Element {
  return (
    <DetailsRow
      {...detailsFooterProps}
      columns={detailsFooterProps.columns}
      item={{}}
      itemIndex={-1}
      groupNestingDepth={detailsFooterProps.groupNestingDepth}
      selectionMode={SelectionMode.single}
      selection={detailsFooterProps.selection}
     // onRenderItemColumn={_renderDetailsFooterItemColumn}
       onRenderCheck={_onRenderCheckForFooterRow}
    />
  );
}
}

const _renderDetailsFooterItemColumn: IDetailsRowBaseProps['onRenderItemColumn'] = (item, index, column) => {
if (column) {
  return (
    <div>
      <b>{column.name}</b>
    </div>
  );
}
return undefined;
};

const detailsRowCheckStyles: Partial<IDetailsRowCheckStyles> = { root: { visibility: 'hidden' } };

const _onRenderCheckForFooterRow: IDetailsRowBaseProps['onRenderCheck'] = (props): JSX.Element => {
return <DetailsRowCheck {...props} styles={detailsRowCheckStyles} selected={true} />;
};

