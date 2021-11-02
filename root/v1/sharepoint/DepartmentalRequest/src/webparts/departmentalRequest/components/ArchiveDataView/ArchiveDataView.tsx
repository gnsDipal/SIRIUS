import * as React from 'react';
import styles from '../MyRequestedIssues/MyRequestedIssues.module.scss';
import { IMyRequestedIssuesProps } from '../MyRequestedIssues/IMyRequestedIssuesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import {IMyRequestedIssuesState} from '../MyRequestedIssues/IMyRequestedIssuesState';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import {  IStackTokens } from '@fluentui/react';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';
import {IDepartmentList} from '../DepartmentalRequest/IDepartmentList'
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
import { Attachment } from 'sp-pnp-js/lib/graph/attachments';

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

var work;


// debugger;
export default class ArchiveDataView extends React.Component<IMyRequestedIssuesProps,IMyRequestedIssuesState> {

  private _items: IMyIssueList[] = [];
  private _columns: IColumn[];

  constructor(props) {
    super(props);
    // this._items = this.props.archiveIssueDataList;
    this.state={
      homeButton:0,
      myIssuesUnlock:1,
      archiveIssuesUnlock:0,
      deptDetails:[],
      errorMessage:'',
      loading:false,
      ticketCount:0,
      noDataUnlock:0
    }
    // this._items = [];
   // for (let i = 0; i < 5; i++) {
      // this._items.push({
      //   key: i,
      //   name: 'Item ' + i,
      //   value: i,
      // });
    //}
    

    this._columns = [
      { key: 'column1', name: 'Issue Date', fieldName: 'created', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column2', name: 'Description', fieldName: 'description', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column3', name: 'Category', fieldName: 'category', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column4', name: 'Department', fieldName: 'department', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column5', name: 'AssignedTo', fieldName: 'assignedTo', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column6', name: 'Comment', fieldName: 'comment', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column7', name: 'Status', fieldName: 'status', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column8', name: 'Attachments', fieldName: 'attachments', minWidth: 100, maxWidth: 200, isResizable: true },   
      { key: 'column9', name: 'ReAssigned To', fieldName: 'test', minWidth: 100, maxWidth: 200, isResizable: true },    
    ];
  }

  

  homeButtonClick(){
    this.setState({
      homeButton:1,
    });
    console.log("homeButton= " + this.state.homeButton);
  }
 
  public render(): React.ReactElement<IMyRequestedIssuesProps> {
    return (
      <div className={ styles.myRequestedIssues }>
        {(this.state.homeButton === 0) && (this.state.myIssuesUnlock === 1) && (this.state.archiveIssuesUnlock === 0) &&
        <div className="ms-Grid">
          {/* <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg12">
            <Icon iconName='Home' style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>this.homeButtonClick()} ></Icon>
            </div>
          </div> */}
          <div className="ms-Grid-row">
         <DetailsList
        items={this._items}
        columns={this._columns}
        setKey="set"
        layoutMode={DetailsListLayoutMode.justified}
        selectionPreservedOnEmptyClick={true}
        ariaLabelForSelectionColumn="Toggle selection"
        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
        checkButtonAriaLabel="select row"
        onRenderDetailsFooter={this._onRenderDetailsFooter}
         />
        </div>
        </div>
      }
      
      {
        (this.state.homeButton === 0) && (this.state.myIssuesUnlock === 0) && (this.state.archiveIssuesUnlock === 1) &&
        <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-lg12">
          <Icon iconName='Home' style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>this.homeButtonClick()} ></Icon>
          </div>
        </div>
        <div className="ms-Grid-row">
       <DetailsList
      items={this._items}
      columns={this._columns}
      setKey="set"
      layoutMode={DetailsListLayoutMode.justified}
      selectionPreservedOnEmptyClick={true}
      ariaLabelForSelectionColumn="Toggle selection"
      ariaLabelForSelectAllCheckbox="Toggle selection for all items"
      checkButtonAriaLabel="select row"
      onRenderDetailsFooter={this._onRenderDetailsFooter}
       />
      </div>
      </div>
      }
      {(this.state.homeButton === 1) &&
          <DepartmentalRequest webPartContext={this.props.webPartContext} msGraphClientFactory={this.props.msGraphClientFactory} emailType={this.props.emailType} description={this.props.description} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl}  currentUserId={this.props.currentUserId}/>
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

