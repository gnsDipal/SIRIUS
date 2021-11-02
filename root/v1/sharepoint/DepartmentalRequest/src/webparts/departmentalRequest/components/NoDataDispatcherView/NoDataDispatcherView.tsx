import * as React from 'react';
import styles from '../TestFolder/PeoplePickerTestExample.module.scss';
// import { IMyRequestedIssuesProps } from './IMyRequestedIssuesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
// import {IMyRequestedIssuesState} from './IMyRequestedIssuesState';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import {  IStackTokens } from '@fluentui/react';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';
// import {IDepartmentList} from './IDepartmentList'
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
export default class NoDataDispatcherView extends React.Component<{}> {

  private _items: IMyIssueList[] = [];
  private _columns: IColumn[];

  constructor(props) {
    super(props);


  }

  


 
  public render(): React.ReactElement<{}> {
    return (
      <div className={ styles.peoplePickerTestExample }>
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg12">
            <Icon iconName='Home' style={{fontSize:'25px', cursor:'pointer'}} ></Icon>
            <h2>No ticket to be dispatched</h2>

      {/* {(this.state.homeButton === 1) &&
          <DepartmentalRequest chartType={this.props.chartType} description={this.props.description} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl}  currentUserId={this.props.currentUserId}/>
      } */}
            </div>
          </div>
        </div>
     </div>
    );  
  }
}
