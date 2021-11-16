import * as React from 'react';
import styles from './DepartmentalRequest.module.scss';
import { IDepartmentalRequestProps } from './IDepartmentalRequestProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
// import 'office-ui-fabric-react/dist/css/fabric.css';
import {IDepartmentalRequestState} from './IDepartmentalRequestState';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import {  IStackTokens } from '@fluentui/react';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';
import {IDepartmentList} from './IDepartmentList'
//import Select from 'react-select';
import 'office-ui-fabric-react/dist/css/fabric.css';
// import 'office-ui-fabric-react/dist/css/fabric.css';
//import { ChevronIcon } from '@fluentui/react-icons-mdl2';
import { IconButton } from '@fluentui/react/lib/Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import pnp from 'sp-pnp-js';
import {IMyIssueList} from '../MyRequestedIssues/IMyRequestedIssuesProps';
import MyRequestedIssues from '../MyRequestedIssues/MyRequestedIssues';
import PeoplePickerTestExample from '../TestFolder/PeoplePickerTestExample'
import { MSGraphClient } from '@microsoft/sp-http';
import {
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneSlider,
  PropertyPaneToggle,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
//import DepartmentSelect from '../MyRequestedIssues/MyRequestedIssues';
import DispatcherView from '../DispatcherView/DispatcherView';
import AssignedToView from '../AssignedToView/AssignedToView';
import ManagerView from '../ManagerView/ManagerView';
import ChartView from '../ChartView/ChartView';
import { TextStyles } from 'office-ui-fabric-react';
import DispatcherSelect from '../DispatcherSelect/DispatcherSelect';
import MyRequestedSelect from '../MyRequestedSelect/MyRequestedSelect';
import AssignedToViewSelect from '../AssignedToViewSelect/AssignedToViewSelect';
import ManagerViewSelect from '../ManagerViewSelect/ManagerViewSelect';
// import { ToastProvider, useToasts } from 'react-toast-notifications' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from '../Toast/ReactToast';
import { Logger, ConsoleListener,FunctionListener, ILogEntry,ILogListener, LogLevel} from "@pnp/logging";
import AppListener from '../../../../services/appListener';
// import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
 
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import useMsGraphProvider, { IMSGraphInterface } from "../../../../services/msGraphProvider";
import { TooltipHost, ITooltipHostStyles } from '@fluentui/react/lib/Tooltip';
import {IConversationService} from './IDepartmentalRequestProps';
import PanelSettings from '../PanelSettings/PanelSettings'
import * as microsoftTeams from "@microsoft/teams-js";  
import {Web, PermissionKind, IItem, IFieldInfo } from '@pnp/sp/presets/all';
import { SPPermission } from '@microsoft/sp-page-context';
import spservices from '../../../../services/spservices'
import { MSGraphClientFactory } from "@microsoft/sp-http";
// import {BrowserRouter as Router,Switch,Route,HashRouter,Link} from "react-router-dom";


const stackTokens = { childrenGap: 50  };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
// const columnProps: Partial<IStackProps> = {
//   tokens: { childrenGap: 10 },
//   styles: { root: { width: 125, textAlign: "Center"  } },
// };

//Dropdown options
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 200 },
};
const hostStyles: Partial<ITooltipHostStyles> = { root: { display: 'inline-block' } };

var departmentOptions: IDropdownOption[] = [];
var departmentCategoryOptions: IDropdownOption[] = [];
var	departmentFAQ_ArchiveTimeSpan:number = 0;
var departmentFAQ_deptList: IDepartmentList[] = Array();
var loggedInUserEmail, loggedInUserId,issueData:IMyIssueList[],archiveData:IMyIssueList[];
var myIssueCount:number = 0;
var textbody,EmailSubject, Guid:string;
var SPDispatcherGroupList = new Array();
var SPSupportGroupList = new Array();

var conversationService: IConversationService;
var itemId;

export interface IUserPermissions {
  hasPermissionAdd: boolean;
  hasPermissionEdit: boolean;
  hasPermissionDelete: boolean;
  hasPermissionView: boolean;
}

debugger;
export default class DepartmentalRequest extends React.Component<IDepartmentalRequestProps, IDepartmentalRequestState> {
  private spService: spservices = null;
  private permissionPass = undefined;
  private appListner: AppListener = new AppListener();
  constructor(props:any){
    super(props);
    this.state = {
      count : 0,
      dataFilledCheck:0,
      myIssueUnlock:0,
      nextCount:0,
      initialRaisedCount:0,
      totalRaisedIssuesCount:0,
      bgColorRaiseRequest:"#ef8700",
      bgColorFollowers:"white",
      bgColorFollowing:"white",
      colorRaiseRequest:"white",
      colorFollowers:"black",
      colorFollowing:"black",
      loading:false,
      errorMessage:null,
      selectedDept:"",
      selectedDeptCategory:"",
      requestDescription:"",
      dispatcherViewUnlock:0,
      assignedToViewUnlock:0,
      managerViewUnlock:0,
      archiveTimeSpan:0,
      fileAddition:null,
      managerCheckForManagerView:0,
      notificationTest:0,
      msGraphProvider: {
        getCurrentUserId(): Promise<any>{return},
        getUserId(userEmail: string): Promise<any>{return},
        createUsersChat(requesterId: string, birthdayPersonId: string): Promise<any>{return},
        sendMessage(chatId: string, chatMessage: string): Promise<any>{return}
      },
      raisedDispatcherGroupMembersEmailIds:[],
      dispatcherShow:false,
      assignedShow:false,
      isSettingsPanelOpen:false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.onChangeDeptHandle = this.onChangeDeptHandle.bind(this);
    this.fetchMsGraphProvider = this.fetchMsGraphProvider.bind(this);
    microsoftTeams.initialize();  
    this.spService = new spservices(this.props.webPartContext);

    // registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
  }

  componentDidMount(){
    this.loadDepartmentOptions();
    this.fetchMsGraphProvider();
    loggedInUserEmail = this.props.loggedInUserEmail;
    microsoftTeams.getContext(teamsContext => {  
      itemId = teamsContext.entityId;  
      });
      this.getUserPermissions(this.props.webUrl,this.props.loggedInUserName)
      this.checkLoggedInUserAsAdmin();
      // this.redirect();
      // this.checkTeamCreatedBefore();
  }

  // public async checkAdmin(){
  //   this.permissionPass = await this.spService.checkLoggedInUserAsAdmin(); 
  // }
  checkLoggedInUserAsAdmin() {
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/currentuser/issiteadmin`,
      SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((res: SPHttpClientResponse): Promise<any> => {
        return res.json();
      })
      .then((res: any): void => {
          if(res){
            console.log('res = ' + res);
          }
          else{
            console.log('res = ' + res);
          }
          // return res.value;
        })        
  }

  redirect = async() =>
  {    
    // alert("In redirect"); 
    let entityId = this.props.webPartContext.sdks.microsoftTeams.context.entityId;
    alert(entityId);
    let teamId = this.props.webPartContext.sdks.microsoftTeams.context.teamId;
    let channelId = this.props.webPartContext.sdks.microsoftTeams.context.channelId;
    const msGraphClient = await this.props.webPartContext.msGraphClientFactory.getClient();
    let body = {
      "body": {
        "name": "Teams.rocks",
        "teamsAppId": "com.microsoft.teamspace.tab.web",
        "configuration": {
          "entityId": entityId,
          "contentUrl": "https://Teams.rocks",
          "websiteUrl": "https://Teams.rocks",
          "removeUrl": ""
        }
      }
    }; 
    
    let result = await msGraphClient.api(`teams/${teamId}/channels/${channelId}/tabs`).version("beta").post(body);
  }

  // createTeam = async() =>
  // {
  //   //const msGraphClient: MSGraphClient = this.props.webPartContext.msGraphClientFactory.getClient();

  //   let body: any = {      
  //       "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
  //       "displayName": "CheckTeams",
  //       "description": "The team for those in architecture design."       
  //   };
  //   //let resultGraph = await msGraphClient.api(`teams`).version("v1.0").post(body);


  //   this.props.webPartContext.msGraphClientFactory
  //     .getClient()
  //     .then((client: MSGraphClient): void => {
  //       // get information about the current user from the Microsoft Graph
  //       client
  //         .api(`teams`)
  //         .version("v1.0")
  //         .post(body);
  //     });
  //     this.checkAdminTeamsCreated();
  // }

  checkTeamCreatedBefore = async() =>{

   await this.props.webPartContext.msGraphClientFactory
    .getClient()
    .then((client: MSGraphClient): void => {        
      client
        .api(`me/joinedTeams`)
        .version("beta")
        .get().then((res)=>{
          // console.log("Inside get teams");
          // console.log("res:" + res);
          let teamPresent:Boolean = false;
          for(let i:number =0; i<res.value.length; ++i)
          {
            if(res.value[i].displayName === "DepartmentalRequestAdmin")
            {
              teamPresent = true;
            }
          }
          if(teamPresent === false){
            this.createTeam();
          }
          
        });
    }); 
}

  createTeam = async() =>
  {
    let body: any = {      
        "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
        "displayName": "DepartmentalRequestAdmin",
        "description": "The team for those in architecture design."       
    };
    
    await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams`)
          .version("v1.0")
          .post(body).then(()=>{
            // console.log("Inside post");
            this.GetTeams();
          });
      });
  }

  GetTeams = async() =>
  {
   await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`me/joinedTeams`)
          .version("beta")
          .get().then((res)=>{
            // console.log("Inside get teams");
            // console.log("res:" + res);
            let teamId ='';
            for(let i:number =0; i<res.value.length; ++i)
            {
              if(res.value[i].displayName === "DepartmentalRequestAdmin")
              {
                teamId = res.value[i].id;
              }
            }
            if(teamId != '')
            this.GetChannelId(teamId);
          });
      }); 
  }

  GetChannelId = async(teamId) =>
  {
   await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams/${teamId}/channels`)
          .version("beta")
          .get().then((res)=>{
            // console.log("Inside get channels");
            // console.log("res:" + res);
            let channelId = res.value[0].id;           
            this.createTab1(teamId,channelId);
            this.createTab2(teamId,channelId);
            this.createTab3(teamId,channelId);
          });
      });
  }

  createTabGeneralPost = async(teamId,channelId,body) =>{
    await this.props.webPartContext.msGraphClientFactory
    .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams/${teamId}/channels/${channelId}/tabs`)
          .version("beta")
          .post(body).then(()=>{
            // console.log("Inside create tab");  
          });
      });
  }

  createTab1 = async(teamId,channelId) =>
  {
    let contentURL = `${this.props.webPartContext.pageContext.web.absoluteUrl}/_layouts/15/groups.aspx`
    let body: any = {      
      "displayName": "PeopleAndGroup",
      "teamsAppId": null,
      "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
      "configuration": {
          "entityId": null,
          "contentUrl": contentURL,
          "removeUrl": null,
          "websiteUrl": null
        }    

    };
    this.createTabGeneralPost(teamId,channelId,body);
 
  } 

  createTab2 = async(teamId,channelId) =>
  {
    let contentURL = `${this.props.webPartContext.pageContext.web.absoluteUrl}/Lists/Dept/AllItems.aspx`
    let body: any = {      
      "displayName": "Dept",
      "teamsAppId": null,
      "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
      "configuration": {
          "entityId": null,
          "contentUrl": contentURL,
          "removeUrl": null,
          "websiteUrl": null
        }       
    };
    this.createTabGeneralPost(teamId,channelId,body);
  } 

  createTab3 = async(teamId,channelId) =>
  {
    let contentURL = `${this.props.webPartContext.pageContext.web.absoluteUrl}/Lists/DeptCateg/AllItems.aspx`
    let body: any = {      
      "displayName": "DeptCateg",
      "teamsAppId": null,
      "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
      "configuration": {
          "entityId": null,
          "contentUrl": contentURL,
          "removeUrl": null,
          "websiteUrl": null
        }       
    };
    this.createTabGeneralPost(teamId,channelId,body);
  }

  checkAdminTeamsCreated = async () => {
    const msGraphClient = await this.props.webPartContext.msGraphClientFactory.getClient();
    let resultGraph = await msGraphClient.api(`teams`).get();
        return resultGraph.id;
  }

  public async getUserPermissions(siteUrl: string, listId: string): Promise<IUserPermissions> {
    let hasPermissionAdd: boolean = false;
    let hasPermissionEdit: boolean = false;
    let hasPermissionDelete: boolean = false;
    let hasPermissionView: boolean = false;
    let userPermissions: IUserPermissions = undefined;
    try {
      const web = Web(siteUrl);
      // const test = await sp.web.getUserEffectivePermissions(this.props.loggedInUserEmail);
      // console.log('test = ' + test);
      const newTest = this.props.webPartContext.pageContext.web.permissions.value;
      console.log('newTest = ' + newTest);
      let permission = new SPPermission(this.props.webPartContext.pageContext.web.permissions.value);
      let randomTest1 = sp.web.roleAssignments;
      const perms2 = await sp.web.getCurrentUserEffectivePermissions();
      console.log('perm2 = ' + perms2)
      let canEdit = permission.hasPermission(SPPermission.manageWeb);
      const perms3 = await sp.web.currentUserHasPermissions(PermissionKind.ApproveItems);
      console.log(perms3);
      console.log(perms3);
      let test3 = await sp.web.siteUserInfoList();
      console.log('test3 = ' + test3);
      const userEffectivePermissions = await web.lists.getById(this.props.loggedInUserName).effectiveBasePermissions.get();
      hasPermissionAdd = sp.web.lists.getByTitle(listId).hasPermissions(userEffectivePermissions, PermissionKind.AddListItems);
      hasPermissionDelete = sp.web.lists.getByTitle(listId).hasPermissions(userEffectivePermissions, PermissionKind.DeleteListItems);
      hasPermissionEdit = sp.web.lists.getByTitle(listId).hasPermissions(userEffectivePermissions, PermissionKind.EditListItems);
      hasPermissionView = sp.web.lists.getByTitle(listId).hasPermissions(userEffectivePermissions, PermissionKind.ViewListItems);
      userPermissions = { hasPermissionAdd: hasPermissionAdd, hasPermissionEdit: hasPermissionEdit, hasPermissionDelete: hasPermissionDelete, hasPermissionView: hasPermissionView };
    } catch (error) {
      return Promise.reject(error);
    }
    return userPermissions;
  }

  fetchMsGraphProvider = async () => {
    this.setState({
      msGraphProvider: (await useMsGraphProvider(this.props.msGraphClientFactory))
    });
  }
  // public getUserId(loggedInUserEmail: string): Promise<number> {
  //   return pnp.sp.site.rootWeb.ensureUser(loggedInUserEmail).then(result => {
  //     loggedInUserId = result.data.Id   
  //     return result.data.Id;
  //   });  
  //   }

  private testContext(){
    var t = this.props.webPartContext.sdks.microsoftTeams.context
  }

  private setIsSettingsPanelOpen()
  {
    this.setState({
      isSettingsPanelOpen: !this.state.isSettingsPanelOpen
    });
  }

  private loadDepartmentOptions():void{
    
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/lists/getbytitle('Dept')/items?$select=*,GroupName/Title,DepartmentGroup/Title,Manager/Title&$expand=GroupName,DepartmentGroup,Manager&$orderby=Title asc`,
      SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((res: SPHttpClientResponse): Promise<any> => {
        //console.log("res value = " + res.json());
        // alert("res.Json() of UserList = " + res.json());
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
        if (res.value == 0) {
          this.setState({
            loading: false
          });
          return;
        }
        this.getLoggedInUserIdSPGroups(res.value);
        
        departmentFAQ_deptList = res.value.map((r,index)=>{
          return {
            deptName:r.Title,
            deptGroup:r.DepartmentGroup.Title,
            deptManager:r.ManagerId,
            dispatcherName:r.GroupName.Title
          };
        });
  
  
   departmentOptions =  res.value.map((r,index) => {
    return {
      key:index,
      text:r.Title,
    };
  });
    // debugger;
    if(departmentOptions.length>0){
    this.setState({
      loading:false,
    });
    this.checkManagerId();
    this.GetIssueArchiveSettings();
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

   getLoggedInUserIdSPGroups(departmentDetailsArray){
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/currentuser/?$expand=groups`,
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
        this.getLoggedInUserSPDispatcherGroups(res,departmentDetailsArray);
        this.getLoggedInUserSPSupportGroups(res,departmentDetailsArray);
      
        departmentFAQ_deptList = res.value.map((r,index)=>{
          return {
            deptName:r.Title,
            deptGroup:r.DepartmentGroup.Title,
            deptManager:r.ManagerId,
            dispatcherName:r.GroupName.Title
          };
        });
  
  
   departmentOptions =  res.value.map((r,index) => {
    return {
      key:index,
      text:r.Title,
    };
  });
    // debugger;
    if(departmentOptions.length>0){
      // alert("I have arrived to people.length = " + people.length);
    this.setState({
      loading:false,
      //Users : people,
    })
    }
  }, (error: any): void => {
    // An error has occurred while loading the data. Notify the user
    // that loading data is finished and return the error message.
    this.setState({
      loading: false,
      errorMessage: error
    });
  })
  .catch((error: any): void => {
    // An exception has occurred while loading the data. Notify the user
    // that loading data is finished and return the exception.
    this.setState({
      loading: false,
      errorMessage: error
    });
  });  
   }


   getLoggedInUserSPDispatcherGroups(res,departmentDetailsArray){
    this.setState({
      loading:true
    });
    var obj = res.Groups, currentLoggedInUserDispatcherGroups = 0;
    var test1:number=0;
  
    for (var loggedInTemp = 0; loggedInTemp < obj.length; loggedInTemp++) {
      obj[loggedInTemp].Added = false;
      for (var dispatcherTemp = 0; dispatcherTemp < departmentDetailsArray.length; dispatcherTemp++) {
          if (obj[loggedInTemp].Title == departmentDetailsArray[dispatcherTemp].GroupName.Title && obj[loggedInTemp].Added == false) {  
              obj[loggedInTemp].Added = true;
              SPDispatcherGroupList[currentLoggedInUserDispatcherGroups] = new Object();
              SPDispatcherGroupList[currentLoggedInUserDispatcherGroups].groupname = obj[loggedInTemp].Title;
              currentLoggedInUserDispatcherGroups++;
          }
      }
  }
  
  if(SPDispatcherGroupList.length==0)
  {
    console.log("User not in any dispatch group");
    this.setState({
      dispatcherShow:false
    })
  }
  
  else{
    this.setState({
      dispatcherShow:true
    })
  // this.loadAssignedTask(obj); 
  } 
}

getLoggedInUserSPSupportGroups(res,departmentDetailsArray){
  this.setState({
    loading:true
  });
  var obj = res.Groups, currentLoggedInUserDispatcherGroups = 0;
  var test1:number=0;

  for (var loggedInTemp = 0; loggedInTemp < obj.length; loggedInTemp++) {
    obj[loggedInTemp].Added = false;
    for (var dispatcherTemp = 0; dispatcherTemp < departmentDetailsArray.length; dispatcherTemp++) {
        if (obj[loggedInTemp].Title == departmentDetailsArray[dispatcherTemp].DepartmentGroup.Title && obj[loggedInTemp].Added == false) {  
            obj[loggedInTemp].Added = true;
            SPSupportGroupList[currentLoggedInUserDispatcherGroups] = new Object();
            SPSupportGroupList[currentLoggedInUserDispatcherGroups].DepartmentGroup = obj[loggedInTemp].Title;
            currentLoggedInUserDispatcherGroups++;
        }
    }
}

if(SPSupportGroupList.length==0)
{
  console.log("User not in any support group");
  this.setState({
    assignedShow:false
  })
}

else{
  this.setState({
    assignedShow:true
  })
// this.loadAssignedTask(obj); 
} 
}


    checkManagerId():void{
    for(let i=0;i<departmentFAQ_deptList.length;++i){
      if(this.props.currentUserId === departmentFAQ_deptList[i].deptManager){
        this.setState({
          managerCheckForManagerView:1
        },()=>console.log('this.state.managerCheckForManagerView =' + this.state.managerCheckForManagerView));
        break;
      }
    }
  }

  GetIssueArchiveSettings():void{
    departmentFAQ_ArchiveTimeSpan = 0;
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/lists/GetByTitle('ArchiveSett')/items`,
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
        if (res.value == 0) {
          // No results were found. Notify the user that loading data is finished
          this.setState({
            loading: false
          });
          return;
        }
        if(res.value !=null && res.value.length>0){
          departmentFAQ_ArchiveTimeSpan = res.value[0].NumberOfDays;
        }
        else{
          departmentFAQ_ArchiveTimeSpan = 0;
  
        }
  
    if(departmentFAQ_ArchiveTimeSpan>0){
    this.setState({
      archiveTimeSpan: departmentFAQ_ArchiveTimeSpan
    })
      this.myIssue();
      this.archieveIssues();
    }
    else{
      this.myIssue();
      this.archieveIssues();
    }
  }, (error: any): void => {
    // An error has occurred while loading the data. Notify the user
    // that loading data is finished and return the error message.
    this.setState({
      loading: false,
      errorMessage: error
    });
  })
  .catch((error: any): void => {
    // An exception has occurred while loading the data. Notify the user
    // that loading data is finished and return the exception.
    this.setState({
      loading: false,
      errorMessage: error
    });
  });
  
  }

  myIssue(){
    var todaydt = new Date();
    var day = todaydt.getDate();
    var month = todaydt.getMonth();
    var year = todaydt.getFullYear();
  
    var curdate = day + "/" + month + "/" + year;
    var curDate:Date = new Date(year, month, day);
  
    //alert("In Load my request ("+departmentFAQ_ArchiveTimeSpan +") "+curDate);
    curDate.setDate(curDate.getDate() - departmentFAQ_ArchiveTimeSpan);
    console.log('curDate= ' + curDate);
    var dtFilter:Date  = new Date();
     dtFilter = curDate;
     console.log(dtFilter);
    var fday = dtFilter.getDate();
    var fmonth = dtFilter.getMonth() + 1;
    var fyear = dtFilter.getFullYear();
    var dateFilter = fyear + "-" + fmonth + "-" + fday + "T00:00:00.000Z";
  
  
    if(departmentFAQ_ArchiveTimeSpan>0){
      var quaryText = `/_api/web/lists/GetByTitle('EmpReq')/items?$select=*,AttachmentFiles&$expand=AttachmentFiles&$filter=((Author eq ${this.props.currentUserId} ) and ((Status ne 'Completed') or ((Status eq 'Completed') and (Created ge datetime'${dateFilter}'))))&$orderby=ID desc`
    }
    else{
      var quaryText = `/_api/web/lists/GetByTitle('EmpReq')/items?$select=*,AttachmentFiles&$expand=AttachmentFiles&$filter=Author eq ${this.props.currentUserId} &$orderby=ID desc`
    }
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}${quaryText}`,
      SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((res: SPHttpClientResponse): Promise<any> => {
        //console.log("res value = " + res.json());
        // alert("res.Json() of UserList = " + res.json());
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
        if (res.value == 0) {
          this.setState({
            loading: false
          });
          return;
        }
  
         issueData = res.value.map(r =>{
           let createdDateFormat = new Date(r.Created).toLocaleDateString();
           myIssueCount= myIssueCount + 1;
           this.setState({
            initialRaisedCount: this.state.initialRaisedCount + 1
           })
           console.log("createdDateFormat= " + createdDateFormat);
           console.log("initialRaisedCount= " + this.state.initialRaisedCount);
  
          return {
            created:createdDateFormat,
            description:r.Description,
            category:r.Category,
            department:r.Department,
            assignedTo:r.AssignedTo,
            comment:r.Comment,
            status:r.Status,
            attachments:r.AttachmentFiles.length?r.AttachmentFiles[0].ServerRelativeUrl:'',
            test:r.ReAssignTo
          }
        });
        console.log("myIssueCount= " + myIssueCount);
  
    if(issueData.length>0){
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

  archieveIssues(){
    var todaydt = new Date();
    var day = todaydt.getDate();
    var month = todaydt.getMonth();
    var year = todaydt.getFullYear();
  
    var curdate = day + "/" + month + "/" + year;
    var curDate:Date = new Date(year, month, day);
  
    //alert("In Load my request ("+departmentFAQ_ArchiveTimeSpan +") "+curDate);
    curDate.setDate(curDate.getDate() - departmentFAQ_ArchiveTimeSpan);
    console.log('curDate= ' + curDate);
    var dtFilter:Date  = new Date();
     dtFilter = curDate;
     console.log(dtFilter);
    var fday = dtFilter.getDate();
    var fmonth = dtFilter.getMonth() + 1;
    var fyear = dtFilter.getFullYear();
    // var dateFilter = fyear + "-" + fmonth + "-" + fday + "T00:00:00.000Z";
    var dateFilter = fyear + "-" + fmonth + "-" + fday + "T00:00:00.000Z";

    // var newdateFilter = fmonth + "-" + fday + "-" + fyear + "T00:00:00.000Z";
    // var newDateFilter1 = new Date(dateFilter);
  
  
    if(departmentFAQ_ArchiveTimeSpan>0){
      var archiveQuaryText = `/_api/web/lists/GetByTitle('EmpReq')/items?$select=*,AttachmentFiles&$expand=AttachmentFiles&$filter=Author eq ${this.props.currentUserId} and Status eq 'Completed' and Created lt datetime'${dateFilter}'&$orderby=ID desc&$top=10`
      
    
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}${archiveQuaryText}`,
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
              archiveData = null;
          return;
        }
        if (res.value == 0) {
          this.setState({
            loading: false
          });
          return;
        }
  
        archiveData = res.value.map(r =>{
           let createdDateFormat = new Date(r.Created).toLocaleDateString();
           myIssueCount= myIssueCount + 1;
           this.setState({
            initialRaisedCount: this.state.initialRaisedCount + 1
           })
           console.log("createdDateFormat= " + createdDateFormat);
           console.log("initialRaisedCount= " + this.state.initialRaisedCount);
  
          return {
            created:createdDateFormat,
            description:r.Description,
            category:r.Category,
            department:r.Department,
            assignedTo:r.AssignedTo,
            comment:r.Comment,
            status:r.Status,
            attachments:r.Attachments,
            test:r.ReAssignTo
          }
        });
        console.log("myIssueCount= " + myIssueCount);
  
    if(archiveData.length>0){
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
  else{
    return
  }
  }
  
  handleChange(e:any) {
    console.log("Fruit Selected!!");
    this.setState({ selectedDept: e.target.defaultValue },()=>alert(
      "Selected Option = " + this.state.selectedDept
    ));
  }


   onChangeDeptHandle = async (selectedDept)=> {
    //const check : string = "";  
    await this.setState({
       selectedDept :  selectedDept.text,
       dataFilledCheck: 1,
      selectedDeptCategory: this.state.selectedDeptCategory,
    });

    this.deptCategorySelect();
    this.loadSelectedDispatcherGroupPeople(selectedDept.text);
 }

 private deptCategorySelect():void{
  const headers: HeadersInit = new Headers();
  // suppress metadata to minimize the amount of data loaded from SharePoint
  headers.append("accept", "application/json;odata.metadata=none");
  this.props.spHttpClient
    .get(`${this.props.webUrl}/_api/web/lists/GetByTitle('DeptCateg')/items?$select=*,Department/Title&$expand=Department`,
    SPHttpClient.configurations.v1, {
      headers: headers
    })
    .then((res: SPHttpClientResponse): Promise<any> => {
      //console.log("res value = " + res.json());
      // alert("res.Json() of UserList = " + res.json());
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
    const getOptionsBySelectedDept = [];
    for(var i=0;i<res.value.length;++i){
      if(res.value[i].Department.Title === this.state.selectedDept){
        getOptionsBySelectedDept.push(res.value[i])
      }
    }

departmentCategoryOptions =  getOptionsBySelectedDept.map((r,index) => {
  return {
    key:index,
    text:r.Title,
  };
});

  if(departmentCategoryOptions.length>0){
  this.setState({
    loading:false,
  })
  }
}, (error: any): void => {
  // An error has occurred while loading the data. Notify the user
  // that loading data is finished and return the error message.
  this.setState({
    loading: false,
    errorMessage: error
  });
})
.catch((error: any): void => {
  // An exception has occurred while loading the data. Notify the user
  // that loading data is finished and return the exception.
  this.setState({
    loading: false,
    errorMessage: error
  });
});
}

private loadSelectedDispatcherGroupPeople(selectedDept):void{
  const headers: HeadersInit = new Headers();
  // suppress metadata to minimize the amount of data loaded from SharePoint
  headers.append("accept", "application/json;odata.metadata=none");
  this.props.spHttpClient
    .get(`${this.props.webUrl}/_api/web/lists/getbytitle('EmpReq')/items?$select=*,Author/Title,AttachmentFiles&$expand=Author,AttachmentFiles &$filter=Department eq '${selectedDept}' and Status eq 'Pending' &$orderby=ID desc`,
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
      let dispatcherGroupName = '';
      if(res.value.length>0){
        dispatcherGroupName = res.value[0].AssignedTo;
          this.getUserByDept(dispatcherGroupName);
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

 getUserByDept=(dispatcherGroupName)=>{
  this.loadDepartmentOptionsByGroupName(dispatcherGroupName)
  .then(
    data=>{
        console.log(data);
        this.setState({
          raisedDispatcherGroupMembersEmailIds:data
        },()=>console.log('this.state.raisedDispatcherGroupMembersEmailIds[0] = ' + this.state.raisedDispatcherGroupMembersEmailIds[0]))
    }
  )
 }

 private loadDepartmentOptionsByGroupName(groupName):Promise<[]>{
  const headers: HeadersInit = new Headers();
  headers.append("accept", "application/json;odata.metadata=none");
  return this.props.spHttpClient
    .get(`${this.props.webUrl}/_api/web/sitegroups/GetByName('${groupName}')/Users?`,
    SPHttpClient.configurations.v1, {
      headers: headers
    })
    .then((res: SPHttpClientResponse): Promise<any> => {
      return res.json();
    })
    .then((res: any) => {
      var groupUser:[]=res.value.map((r,index)=>{
        return{
          eMail:r.Email,
          name:r.Title
        }
      })
    return Promise.resolve(groupUser);
}) 

//  return pickerGroupNames;
 }




 async onChangeDeptCategoryHandle (selectedDeptCategory:any) {
  //const check : string = "";  
   this.setState({
    selectedDeptCategory :await selectedDeptCategory.text,
    dataFilledCheck:1
  });
}

async onChangeRequestDescriptionHandle(requestDescription:any){
  this.setState({
       requestDescription:await requestDescription.currentTarget.value,
       dataFilledCheck:1
      },()=>console.log('this.state.requestDescription =' + this.state.requestDescription))
}





  
 addEmployeeRequest(issueDescription, selectedDept, selectedDeptCategory,departmentFAQ_ArchiveTimeSpan,fileAddition){
   this.setState({
    // count: 0,
    totalRaisedIssuesCount:this.state.totalRaisedIssuesCount + 1,
    initialRaisedCount:0
   });
  //  Logger.writeJSON(LogLevel.Info);
   var selectedDeptGroup, selectedDeptManager, selectedDispatcherName;
   var selectedTitle:string = selectedDeptCategory + ' Request';
  var currentUserName = this.props.loggedInUserName;
  var currentUserEmail = this.props.loggedInUserEmail;
  var selectedFileAddOn = fileAddition;

  for(let i=0;i<departmentFAQ_deptList.length;++i){
    if(departmentFAQ_deptList[i].deptName === selectedDept){
      selectedDeptGroup = departmentFAQ_deptList[i].deptGroup;
      selectedDispatcherName = departmentFAQ_deptList[i].dispatcherName;
      selectedDeptManager = departmentFAQ_deptList[i].deptManager;
    }
  }

      //for email body
       textbody = `<h3>The request details are as below:</h3><br><p>Raised by: " ${this.props.loggedInUserName} " <br>Category: " ${selectedDeptCategory} " <br>Description: " ${issueDescription} "<br><br>Thank you</p>`;

      console.log('textbody = ' + textbody);
       EmailSubject =` ${this.props.loggedInUserName} raised ${selectedDeptCategory} request`;

      console.log('EmailSubject = ' + EmailSubject);


  if(issueDescription !== "" && selectedDept !== "" && selectedDeptCategory !== ""){
  const headers: HeadersInit = new Headers();
  headers.append("accept", "application/json;odata.metadata=none");
  headers.append("Content-Type", "application/json;odata.metadata=none");

    const spOpts: string = JSON.stringify({
     'Title': selectedTitle,
     'Description': issueDescription,
     'Category': selectedDeptCategory,
     'Department':selectedDept,
     'Status':'Pending',
     'AssignedTo': selectedDispatcherName,
     'ArchivedTimeSpan': departmentFAQ_ArchiveTimeSpan,
     'DepartmentManagerId': selectedDeptManager,
     'DepartmentGroup':selectedDeptGroup
    //  'Attachments': selectedFileAddOn[0]
  });

  this.props.spHttpClient.post(`${this.props.webUrl}/_api/web/lists/GetByTitle('EmpReq')/items`, SPHttpClient.configurations.v1, 
  {
    body:spOpts
  })
      .then((response: SPHttpClientResponse) => {
        // Access properties of the response object. 
        console.log(`Status code: ${response.status}`);
        console.log(`Status text: ${response.statusText}`);

        //response.json() returns a promise so you get access to the json in the resolve callback.
        response.json().then((responseJSON: JSON) => {
          console.log(responseJSON);
          // this.appListner.setAppLogger();
          // this.SendAnEmilUsingMSGraph(this.props.loggedInUserEmail,textbody,EmailSubject);
          // this.addAttachementInList(responseJSON);
          this.addMultipleAttachmentLoop(responseJSON);
          this.myIssue();
          // this.notify();
          this.setState({
            count:0,
            // notificationTest:1
          });
          this.notify();
          this._messaging(this.state.raisedDispatcherGroupMembersEmailIds);
          // this.deepLinkingTest();

          // this._sendMessage('vrushali@gns11.onmicrosoft.com');

          // toast.success("New Request has been raised!", {
          //   toastId: 'success1',
          //   })
          // this.appListner.setAppLogger();
          // Logger.write("This information triggerd from react component");
          // Logger.write("This warning triggerd from react component", LogLevel.Warning);
          // Logger.write("This error triggerd from react component", LogLevel.Error);
          if(this.state.count === 0){
            // Logger.writeJSON("Raised a new request",LogLevel.Info);
          //  Logger.writeJSON({ FirstName: "Sourabh", LastName: "Kulkarni" }, LogLevel.Info);
          // this.appListner.setAppLogger();
          // Logger.writeJSON("Init() method triggered.",LogLevel.Info);
          }
        });
      });
   }
   
 }

 deepLinkingTest = () =>{
      //  var entityTest = this.props.webPartContext.sdks.microsoftTeams.context.entityId;
      //  console.log('object');
        // microsoftTeams.getContext(teamsContext => {  
        // itemId = teamsContext.subEntityId;  
        // });
        // console.log('object');
         // Build a deep link to the current user tab and customer
        //  const url = encodeURI(
        //   'https://teams.microsoft.com/l/chat/0/0?users=dipal@GNS11.onmicrosoft.com,vrushali@gns11.onmicrosoft.com&topicName=Prep%20For%20Meeting%20Tomorrow&message=Hi%20folks%2C%20kicking%20off%20a%20chat%20about%20our%20meeting%20tomorrow' );
        // const url = encodeURI(`https://teams.microsoft.com/l/entity/9c81173a-1b57-4a3c-9b5e-0a97015460f6?&label=DepartmentalRequest&context={'subEntityId': '${itemId}'}`);
        // const url = encodeURI(`https://teams.microsoft.com/l/entity/9c81173a-1b57-4a3c-9b5e-0a97015460f6/_djb2_msteams_prefix_485389241?context=%7B%22subEntityId%22%3Anull%2C%22channelId%22%3A%2219%3Ap23BbnibW2w3pyEzpqihi2uEODETM8fHRRwpkZGuTro1%40thread.tacv2%22%7D`)

        //   let message =  `
        //   <div style="border-style:solid; border-width:1px; padding:10px;">
        //   <div>Departmental Request Application</div>
        //   <hr />
        //   <div style="background: #eaeaff; font-weight: bold ">
        //       <a href="${url}">Link to Ticket</a>
        //   </div>
        //   </div><br />
        //   `
        //   ;

        //   const chatMessage = {
        //     body: {
        //         contentType: "html",
        //         content: message
        //     }
        // };

          // this._sendMessage1('sourabhk@gns11.onmicrosoft.com','chatMessage')
          // this.createChatThread()

          // conversationService
          //   .createChatThread(message, "html")
          //   .then(() => {
          //       console.log('object');
          //   });
 }

 _sendMessage1 = async(ToEmailId: string, newMessage:any) =>
  { 
    
    // let eMailTest = 'vrushali@gns11.onmicrosoft.com';
    let firstHalfMessage = <b>`From Departmental Request Application:`</b>;
    let testMessage = `${firstHalfMessage} Raised a new request`
    // let message =`Notification from Departmental Request Application: ${this.props.loggedInUserName} has raised a new Request.`;
    let mess = "https://teams.microsoft.com/l/entity/2a527703-1f6f-4559-a332-d8a7d288cd88/_djb2_msteams_prefix_485389241?context=%7B%22subEntityId%22%3Anull%2C%22channelId%22%3A%2219%3Ap23BbnibW2w3pyEzpqihi2uEODETM8fHRRwpkZGuTro1%40thread.tacv2%22%7D&groupId=d0236642-8330-43e6-b24b-9a11fb288fa3&tenantId=ab5bfb07-f953-4649-816d-b4d9f280e3e3";
    let currentUserId = await this.state.msGraphProvider.getCurrentUserId(); 
    let userIdToSendMessage = await this.state.msGraphProvider.getUserId(ToEmailId);
    let chatOfUser = await this.state.msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);

    const url = encodeURI(`https://teams.microsoft.com/l/entity/9c81173a-1b57-4a3c-9b5e-0a97015460f6/${this.props.webPartContext.sdks.microsoftTeams.context.entityId}?context={"subEntityId": null,"channelId":${chatOfUser}}`)

    let message =  `
    <div style="border-style:solid; border-width:1px; padding:10px;">
    <div>Departmental Request Application</div>
    <hr />
    <div style="background: #eaeaff; font-weight: bold ">
        <a href="${url}">Ticket</a>
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

    await this.state.msGraphProvider.sendMessage(chatOfUser, chatMessage)
    .then(
      (result: any[]): void => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });    
} 


// public createChatThread(content: string, contentType: string) {

//   const result = new Promise<void>((resolve, reject) => {

//       const postContent =
//       {
//               body: {
//                   content: content,
//                   contentType: contentType
//               }
//       };

//       this.context.msGraphClientFactory
//       .getClient()
//       .then((graphClient: MSGraphClient): void => {
//           graphClient.api(
//               `https://graph.microsoft.com/beta/teams/${this.teamId}/channels/${this.channelId}/messages`)
//           .post(postContent, ((err, res) => {
//               resolve();
//           }));
//       });
      

// //   });
  
//   return result;
// }

// // https://teams.microsoft.com/l/entity/2a527703-1f6f-4559-a332-d8a7d288cd88/_djb2_msteams_prefix_485389241?context=%7B%22subEntityId%22%3Anull%2C%22channelId%22%3A%2219%3Ap23BbnibW2w3pyEzpqihi2uEODETM8fHRRwpkZGuTro1%40thread.tacv2%22%7D&groupId=d0236642-8330-43e6-b24b-9a11fb288fa3&tenantId=ab5bfb07-f953-4649-816d-b4d9f280e3e3

// }
 _messaging=(dispatcherGroupEmailIds)=>{
   for(let i=0;i<dispatcherGroupEmailIds.length;++i){
    this._sendMessage(dispatcherGroupEmailIds[i].eMail, dispatcherGroupEmailIds[i].name );
   }
 }

  raiseRequestClick=()=>{
    this.setState({
      count: 1,
    bgColorRaiseRequest:"#ef8700",
    bgColorFollowers:"white",
    bgColorFollowing:"white",
    colorRaiseRequest:"white",
    colorFollowers:"black",
    colorFollowing:"black",
    });
    this.deepLinkingTest();
  }

  managerViewClick=()=>{
    if(this.state.managerCheckForManagerView === 1){
    this.setState({
      managerViewUnlock: 1,
    bgColorRaiseRequest:"#ef8700",
    bgColorFollowers:"white",
    bgColorFollowing:"white",
    colorRaiseRequest:"white",
    colorFollowers:"black",
    colorFollowing:"black",
    })
    }
  }

  previousClick=()=>{
    this.setState({
      count:this.state.count - 1,
      dataFilledCheck:0
    })
  }

  onKeyDownPress=(e)=>{
    alert("Key press is working= " + e.key);
  }

  nextClick=()=>{
    if(this.state.dataFilledCheck === 1){
    this.setState({
      count:this.state.count + 1,
      dataFilledCheck:0
    });
  }
  }

  nextClickWithNotCompulsary=()=>{
    this.setState({
      count:this.state.count + 1,
    })
  }

  myIssueClick= ()=>{
       this.setState({
      myIssueUnlock:  1,
    });
  }

  dispatcherViewClick=()=>{
    this.setState({
      dispatcherViewUnlock: 1,
    })
  }

  assignedToViewClick=()=>{
    this.setState({
      assignedToViewUnlock:1
    })
  }
  

  private SendAnEmilUsingMSGraph(to,textBody,emailSubject): void {  
  
    //Check if TextField value is empty or not    
  
      //Create Body fpr Email  
      let emailPostBody: any = {  
        "message": {  
          "subject": emailSubject,  
          "body": {  
            "contentType": "HTML",  
            "content": textBody  
          },  
          "toRecipients": [  
            {  
              "emailAddress": {  
                "address": 'sourabhk@globalnestsolutions.com'  
              }  
            }  
          ],  
        }  
      };  
  
      //Send Email uisng MS Graph  
      this.props.msGraphClientFactory  
        .getClient()  
        .then((client: MSGraphClient): void => {  
          client  
            .api('/me/sendMail')  
            .post(emailPostBody, (error, response: any, rawResponse?: any) => {  
              //Set Error Message Bar for any error  
              if (error) {  
                // this.setState({  
                //   statusMessage: { isShowMessage: true, message: error.message, messageType: 1 }  
                // });  
              }  
               //Set Success Message Bar after Sending Email  
              else {  
                // this.setState({  
                //   statusMessage: { isShowMessage: true, message: "Email Sent using MS Graph", messageType: 4 }  
                // });  
              }  
            });  
        });  
      
    
  }  
  
  private setButtonsEventHandlers(): void {   
    let fileUpload = document.getElementById("fileUploadInput") 
    if(fileUpload) {
      fileUpload.addEventListener('change', () => { 
        // this.uploadFiles(fileUpload); 
      });
    }
    }

    // private async uploadFiles(fileUpload) {
    //   let file = fileUpload.files[0];
    //   //let attachmentsArray = this.state.attachmentsToUpload;        
    //   let item = sp.web.lists.getByTitle("MyList").items.getById(15);
    //   item.attachmentFiles.add(file.name,file).then(v => {
    //       console.log(v);
    //   });
    //   //let attachmentUpload = await _listItem.attachmentFiles.add(file.name,file)
    // }
  
    onFileAddHandle(fileAdd){
      // console.log('fileAdd.target.files = ' + fileAdd.target.files);
      let allFiles = [];
      for(let i=0;i<fileAdd.length;++i){
          allFiles.push(fileAdd[i]);
      }
      let file = allFiles[0];
      console.log('file.name = ' + file.name);
      this.setState({
        fileAddition: allFiles
      })
    }

    idTestCode(){
      const headers: HeadersInit = new Headers();
      // suppress metadata to minimize the amount of data loaded from SharePoint
      headers.append("accept", "application/json;odata.metadata=none");
      this.props.spHttpClient
        .get(`${this.props.webUrl}/_api/web/lists/GetByTitle('EmpReq')/Id`,
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
          else{
            console.log('res = ' + res);
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

    addMultipleAttachmentLoop(result){
      if(this.state.fileAddition != null){
      let promiseUploadAllRequesterAttachments = [];
      let file = this.state.fileAddition;
        for(let i=0;i<file.length;++i){
          promiseUploadAllRequesterAttachments.push(this.addAttachementInList(result,file[i]));
        }
      }
    }

    addAttachementInList(result,eachFile){
      const headers: HeadersInit = new Headers();
      // suppress metadata to minimize the amount of data loaded from SharePoint
      headers.append("accept", "application/json;odata.metadata=none");
      this.props.spHttpClient
        .get(`${this.props.webUrl}/_api/web/lists/GetByTitle('EmpReq')/Id`,
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
          else{
           var Guid = res.value;
            console.log('res = ' + res);
            let ID = result.ID;
            console.log('');
            // let file = (document.querySelector("#FileAttachment") as HTMLInputElement).files[0];   
            // let file = this.state.fileAddition;     
                if (eachFile) { 
                    let fileName = `REQ_${eachFile.name}`;
                    let spOpts : ISPHttpClientOptions  = {
                      headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                      },
                      body: eachFile       
                    };
                    // var url = `${this.props.webUrl}/_api/web/lists('${Guid}')/items('${ID}')/AttachmentFiles/add('${file.name}')`;
                    var url = this.props.webUrl + `/_api/web/lists(guid'` + Guid + `')/items` + `('` + ID + `')` + `/AttachmentFiles/add(FileName='` + fileName +`')`;
                    // var url = `${this.props.webUrl}/_api/${oData}/AttachmentFiles/add('${file.name}')`;
                    this.props.spHttpClient.post(url, SPHttpClient.configurations.v1, spOpts).then((response: SPHttpClientResponse) => {
                      console.log(`Status code: ${response.status}`);
                      console.log(`Status text: ${response.statusText}`);
                      if(Number(`${response.status}`) >300)
                      {
                        alert('Error Uploading file, Try again or contact IT');
                        // this._closeDialog();
                        return;
                      }
                      response.json().then((responseJSON: JSON) => {
                        console.log(responseJSON);                 
                      });
                    });    
                    
                  // }//for loop ending
                }//if statement ends here
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

    notify(){
      // const notif = () => toast("Wow so easy!");
      // notif();
      this.setState({
        notificationTest:1
      })
    }

    _sendMessage = async(ToEmailId: string, name:string) =>
  { 
    if(this.props.webPartContext.sdks.microsoftTeams) 
    {
    let currentUserId = await this.state.msGraphProvider.getCurrentUserId(); 
    let userIdToSendMessage = await this.state.msGraphProvider.getUserId(ToEmailId);
    let chatOfUser = await this.state.msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);

    const url = encodeURI(`https://teams.microsoft.com/l/entity/9c81173a-1b57-4a3c-9b5e-0a97015460f6/${this.props.webPartContext.sdks.microsoftTeams.context.entityId}?context={"subEntityId": null,"channelId":${chatOfUser}}&path=dispatcher/tickets`)

    let message =  `
    <div style="border-style:solid; border-width:1px; padding:10px;">
    <div>Departmental Request Application</div>
    <hr />
    <div style="background: #eaeaff; font-weight: bold ">
        <a href="${url}">New Ticket</a>
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

    await this.state.msGraphProvider.sendMessage(chatOfUser, chatMessage)
    .then(
      (result: any[]): void => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });   
    }    
    
    else{

    // let message =`Notification from Departmental Request Application: ${this.props.loggedInUserName} has raised a new Request.`;
    let currentUserId = await this.state.msGraphProvider.getCurrentUserId(); 
    let userIdToSendMessage = await this.state.msGraphProvider.getUserId(ToEmailId);
    let chatOfUser = await this.state.msGraphProvider.createUsersChat(currentUserId, userIdToSendMessage);

    let url = `${this.props.webUrl}`
    let message =  `
    <div style="border-style:solid; border-width:1px; padding:10px;">
    <div>Departmental Request Application</div>
    <hr />
    <div style="background: #eaeaff; font-weight: bold ">
        <a href="${url}">New Ticket</a>
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
    

    await this.state.msGraphProvider.sendMessage(chatOfUser, chatMessage)
    .then(
      (result: any[]): void => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });    
  }
} 

  public render(): React.ReactElement<IDepartmentalRequestProps> {
    return (
      <div className={ styles.departmentalRequest }>
        {
          (this.state.count === 0) && (this.state.myIssueUnlock === 0)&& (this.state.dispatcherViewUnlock === 0) && (this.state.assignedToViewUnlock === 0) && (this.state.managerViewUnlock === 0) &&
          <div className="ms-Grid" dir="ltr">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col" ms-lg8 ms-md8 ms-sm8>
                <h1>Welcome to Departmental Request Facility!!</h1>
              </div>
              {
                (this.props.webPartContext.sdks.microsoftTeams) &&
              <div className="ms-Grid-col" ms-lg2 ms-md2 ms-sm2>
                <div style={{margin:'0', float:'right'}}>
                    <Icon onClick={()=> this.setIsSettingsPanelOpen()} className={styles.teamsSettings} iconName="Settings"></Icon>                  
                </div>
              </div>
              }
            </div>
            <div>
              {
                (this.state.isSettingsPanelOpen) && 
                <PanelSettings webPartContext={this.props.webPartContext} onClosePanel = {()=> this.setIsSettingsPanelOpen()} />
              }
            </div>
            <div className="ms-Grid-row" style={{marginTop:'50px'}}>
              <div className={(this.state.dispatcherShow === true)?((this.state.assignedShow === true)? styles.upperAllThree: styles.upperTwo):(this.state.assignedShow === true?styles.upperTwo:styles.upperOnlyOne)}>
                <CompoundButton styles={{label:{textAlign:'center'}}} style={{width:'100%',marginBottom:'15px',maxWidth:'100%', borderRadius:'10px', padding:'65px', height:'150px',fontSize:'20px',backgroundColor:'rgb(111 98 137)',color:'white'}} onClick={this.myIssueClick} >Requested Issues</CompoundButton>
              </div>
              { (this.state.assignedShow === true) &&
              <div className={(this.state.dispatcherShow === true)?styles.upperAllThree:styles.upperTwo}>
                <CompoundButton styles={{label:{textAlign:'center'}}} style={{width:'100%',marginBottom:'15px',maxWidth:'100%', borderRadius:'10px', padding:'65px', height:'150px',fontSize:'20px',backgroundColor:'rgb(242 117 127)',color:'white'}} onClick={this.assignedToViewClick}>Assigned Issues</CompoundButton>
              </div>
              }
              { (this.state.dispatcherShow === true) &&
              <div className={(this.state.assignedShow === true)?styles.upperAllThree:styles.upperTwo}>
                <CompoundButton styles={{label:{textAlign:'center'}}} style={{width:'100%',marginBottom:'15px',maxWidth:'100%', borderRadius:'10px', padding:'65px', height:'150px',fontSize:'20px',backgroundColor:'#ffa600',color:'white'}} onClick={this.dispatcherViewClick}>Dispatcher View</CompoundButton>
              </div>
              }
            </div>
            <div className="ms-Grid-row" style={{marginTop:'40px'}}>

              {
                
              // <div className="ms-Grid-col ms-lg6 ms-md6 ms-sm12">
               <div className={this.state.managerCheckForManagerView === 1? styles.gridCallOut:styles.gridCompleteCallOut}
               
               >
              {/* <CompoundButton className="raisebtn" styles={{label:{textAlign:'center'}}} style={{backgroundColor:'#4b53bc', color:this.state.colorRaiseRequest,border:'1px solid #ddd', width:'100%',maxWidth:'100%', borderRadius:'10px', marginBottom:'20px', padding:'65px', fontSize:'24px'}} onClick={this.raiseRequestClick}>Raise a Request</CompoundButton> */}
              <div style={{backgroundColor:'#2f4b7c',marginRight:'', padding:'10px',borderRadius:'5px',color:'white'}}>
              <h2 style={{textAlign:'center'}}>Raise a Request</h2>
              <Icon iconName="Ticket" className={styles.lowerImagesIconClass} style={{fontSize:'100px', textAlign:'center'}}
                onClick={this.raiseRequestClick}
              />
              </div>
              </div>
              }

              {
                (this.state.managerCheckForManagerView === 1) &&
              <div className="ms-Grid-col ms-xxxl6 ms-xxl6 ms-xl6 ms-lg6 ms-md6 ms-sm12">

              {/* <CompoundButton styles={{label:{textAlign:'center'}}} style={{backgroundColor:'#808080', color:this.state.colorRaiseRequest,border:'1px solid #ddd', width:'100%',maxWidth:'100%', borderRadius:'10px', marginBottom:'20px', padding:'65px', fontSize:'24px'}} onClick={this.managerViewClick}>Manager View</CompoundButton> */}
              <div style={{backgroundColor:'#ff7c43',marginRight:'', padding:'10px',borderRadius:'5px',color:'white'}}>
              <h2 style={{textAlign:'center',color:'white'}}>Manager</h2>
              <Icon iconName='ReminderPerson' className={styles.lowerImagesIconClass} style={{fontSize:'100px', textAlign:'center'}}
                onClick={this.managerViewClick}
              />   
              </div>
              </div>
             }
            </div>
            <ToastContainer/>
            {(this.state.notificationTest === 1) && 
              // console.log('object')     
              Logger.writeJSON("Raised a new request",LogLevel.Info)
              
            }             
          </div>
        }
         
         {/* Display raise request data filling operation */}
          {
            (this.state.count === 1) &&
            <div className="ms-Grid" dir="ltr">
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12" onKeyDown={(e)=>this.onKeyDownPress(e)} tabIndex={40}>
                  <Icon iconName="Home" style={{fontSize:'25px', cursor:'pointer'}} onClick={this.previousClick} ></Icon>
                </div>
              </div>
            {/* <div style={{borderBottom:'1px solid #f1f1f1', marginBottom:'20px'}}>
            <h2>Select the Department</h2>
            </div>            */}
                <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                 <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                  {/* <DefaultButton>Select Department</DefaultButton> */}
                  <Stack tokens={stackTokens}>
                         <Dropdown
                           placeholder="Select Department"
                           label="Select the Department"
                           options={departmentOptions}
                           onChange={(e,selectedDept) => this.onChangeDeptHandle(selectedDept)}
                           //styles={dropdownStyles}
                           styles={{ dropdown: { width:'100%',height:'34px' } }}
                           className={styles.dropdownStyle}
                         />
                    </Stack>
                 </div>
                </div>
              
              {/* <div style={{borderBottom:'1px solid #f1f1f1', marginBottom:'20px'}}>
            <h2>Select the Department category</h2>
            </div> */}
              <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                <div className="ms-Grid-col ms-lg8 ms-sm8">
                  <Stack tokens={stackTokens}>
                     <Dropdown
                           placeholder="Select Department Category"
                           label="Select the Department Category"
                           options={departmentCategoryOptions}
                           defaultSelectedKey={" "}
                           onChange={(e,selectedDeptCategory)=>this.onChangeDeptCategoryHandle(selectedDeptCategory)}
                           //styles={dropdownStyles}
                           styles={{ dropdown: { width: '100%' } }}
                         />
                     </Stack>
                </div>
              </div>
              <div className="ms-Grid-row">
               {/* <div style={{borderBottom:'1px solid #f1f1f1', marginBottom:'20px'}}>
                <h2>Type your issue</h2>
               </div> */}
             </div>
             <div className="ms-Grid-row">
             <div className="ms-Grid-col ms-lg8 ms-sm8">
                <TextField label="Type your issue" multiline rows={3}
                           onChange={(requestDescription)=>this.onChangeRequestDescriptionHandle(requestDescription)}
                        />
              </div>
             </div>
             <div className="ms-Grid-row">
             </div>
             <div className="ms-Grid-row">
             <div className="ms-Grid-col ms-lg8 ms-sm8">
                <h4 style={{fontSize:'14px', fontWeight:'normal',marginBottom:'0'}} >Add file, if any</h4>
                 <input type="file" multiple style={{width:'100%',border:'1px solid #ddd',paddingTop:'10px', paddingBottom:'10px' }}
                 onChange={(e)=> this.onFileAddHandle(e.target.files) }
                 />
              </div>
              {/* <div>
                <h4 style={{fontSize:'14px', fontWeight:'normal',marginBottom:'0'}} >Add file, if any</h4>
                <FilePond allowMultiple={true} server="/api" onupdatefiles={(e)=> this.onFileAddHandle(e)} />
              </div> */}
             </div>
             <div className="ms-Grid-row">
             <div className="ms-Grid-col ms-lg2 ms-sm2">
                <DefaultButton style={{backgroundColor:this.state.bgColorRaiseRequest, color:this.state.colorRaiseRequest,border:'1px solid #ddd', top:'8px', marginBottom:'20px'}} onClick={()=>this.addEmployeeRequest(this.state.requestDescription, this.state.selectedDept,this.state.selectedDeptCategory,departmentFAQ_ArchiveTimeSpan,this.state.fileAddition)}>Submit</DefaultButton>
                <ToastContainer/>
              </div>
             </div>
            </div> 
              } 
          {
            (this.state.myIssueUnlock === 1) &&
              <MyRequestedSelect webPartContext={this.props.webPartContext} msGraphClientFactory={this.props.msGraphClientFactory} emailType={this.props.emailType} description={this.props.description} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl} currentUserId={this.props.currentUserId}/>
          }
          {
            (this.state.dispatcherViewUnlock === 1) &&
            <DispatcherSelect webPartContext={this.props.webPartContext} msGraphClientFactory={this.props.msGraphClientFactory} currentUserId={this.props.currentUserId} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl} emailType={this.props.emailType} description={this.props.description} />
          }
          {
            (this.state.assignedToViewUnlock === 1) &&
            <AssignedToViewSelect webPartContext={this.props.webPartContext} msGraphClientFactory={this.props.msGraphClientFactory} currentUserId={this.props.currentUserId} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl} emailType={this.props.emailType} description={this.props.description}/>
          }
          {
            (this.state.managerViewUnlock === 1) && (this.state.managerCheckForManagerView === 1) &&
            <ManagerViewSelect webPartContext={this.props.webPartContext} msGraphClientFactory={this.props.msGraphClientFactory} currentUserId={this.props.currentUserId} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl} emailType={this.props.emailType} description={this.props.description}/>
          }
      </div>
    );
  }
}
  