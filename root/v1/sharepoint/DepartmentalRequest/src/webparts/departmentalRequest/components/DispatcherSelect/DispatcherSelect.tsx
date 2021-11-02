import * as React from 'react';
import styles from '../DispatcherView/DispatcherView.module.scss';
import { IDispatcherSelectProps } from './IDispatcherSelectProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';
import {IDispatcherSelectState} from './IDispatcherSelectState';
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import {  IStackTokens } from '@fluentui/react';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';
import {IDepartmentList} from '../DispatcherView//IDispatcherList'
//import Select from 'react-select';
import 'office-ui-fabric-react/dist/css/fabric.css';
//import { ChevronIcon } from '@fluentui/react-icons-mdl2';
import { IconButton } from '@fluentui/react/lib/Button';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { Icon } from '@fluentui/react/lib/Icon';
import pnp from 'sp-pnp-js';
import {IMyIssueList} from '../MyRequestedIssues/IMyRequestedIssuesProps'
import DepartmentalRequest from '../DepartmentalRequest/DepartmentalRequest';
import DispatcherView from '../DispatcherView/DispatcherView'
import {
  Spinner,
  SpinnerSize
} from 'office-ui-fabric-react/lib/Spinner';

import {
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneSlider,
  PropertyPaneToggle,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import MyRequestedIssues from '../MyRequestedIssues/MyRequestedIssues';
import PeoplePickerTestExample from '../TestFolder/PeoplePickerTestExample';

const stackTokens = { childrenGap: 50  };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 10 },
  styles: { root: { width: 125, textAlign: "Center"  } },
};

//Dropdown options
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 200 },
};

var departmentOptions: IDropdownOption[] = [];
var departmentCategoryOptions: IDropdownOption[] = [];
var	departmentFAQ_ArchiveTimeSpan:number = 0;
var departmentFAQ_deptList: IDepartmentList[] = Array();
var loggedInUserEmail, loggedInUserId,issueData:IMyIssueList[];
var myIssueCount:number = 0;
var SPGroupList = new Array();
var AssignedToFilter="";
var htmlcontent;
var departmentList:IDepartmentList[] = [], LENTH:number=0;
var onlyDepartmentInfo:string[] = Array();
var eachDeptOpenIssueCounts:number[] = [];
var deptData = [];

export interface DeptDispatcherData {
    deptName:string;
    dispatcherName:string;
    thisCount:number;
}

 let deptDispatchData : DeptDispatcherData[] = [];
// debugger;
export default class DispatcherSelect extends React.Component<IDispatcherSelectProps, IDispatcherSelectState> {

  constructor(props:any){
    super(props);
    this.state = {
      count : 0,
      dataFilledCheck:0,
      myIssueUnlock:0,
      nextCount:0,
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
      onlyDepartmentInfoState:[],
      deptDetails:[],
      passDeptName:'',
      unlockEachPlaceCard:0,
      homeButtonUnlock:0
    }
  
    
  }

  componentDidMount(){
    // this.loadDepartmentOptions();
    this.getDepartmentsDetails();
    loggedInUserEmail = this.props.loggedInUserEmail;
    
  }

  private getDepartmentsDetails():void{
    this.setState({
      loading:true
    })
   const headers: HeadersInit = new Headers();
   // suppress metadata to minimize the amount of data loaded from SharePoint
   headers.append("accept", "application/json;odata.metadata=none");
   this.props.spHttpClient
     .get(`${this.props.webUrl}/_api/web/lists/getbytitle('Dept')/items?$select=*,GroupName/Title,DepartmentGroup/Title,Manager/Title&$expand=GroupName,DepartmentGroup,Manager&$orderby=Title asc`,
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

  private loadDepartmentOptions():void{
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/lists/getbytitle('Dept')/items?$select=*,GroupName/Title,DepartmentGroup/Title,Manager/Title&$expand=GroupName,DepartmentGroup,Manager&$orderby=Title asc`,
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
        this.setState({

        })
        departmentList = res.value.map((r,index)=>{
          return {
            deptName:r.Title,
            deptGroup:r.DepartmentGroup.Title,
            deptManager:r.ManagerId,
            dispatcherName:r.GroupName.Title
          };
        });
        LENTH = departmentList.length;
        for(let i=0;i<LENTH;++i){
          onlyDepartmentInfo[i] = ' ';
        }
        for(let i=0;i<departmentList.length;++i){
          onlyDepartmentInfo[i] = departmentList[i].deptName;
        }

        if(onlyDepartmentInfo.length>0){
            this.setState({
              onlyDepartmentInfoState:onlyDepartmentInfo
            })

    this.loadAllEmployeeRequestListInfo();
    
  }
  }, (error: any): void => {
    this.setState({
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

   private loadAllEmployeeRequestListInfo():void{
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/lists/getbytitle('EmpReq')/items?$select=*,Author/Title,ReAssignTo/Title,AttachmentFiles&$expand=Author,ReAssignTo,AttachmentFiles`,
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
          this.setState({
            loading: false
          });
          return;
        }
        let createdDateFormat = new Date('').toLocaleDateString();
      //  ticketCount:res.value.length,
        this.setState({
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
              reAssignedTo:r.ReAssignTo,
              dataId:r.ID,
              comment:r.Comment
            }
          }) 
        });  
    if(this.state.deptDetails.length>0){
      this.calculateData();   
    }
  }, (error: any): void => {
    this.setState({
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

 calculateData(){
   let LEN:number = departmentList.length;
   for(let k=0;k<LEN;++k){
     eachDeptOpenIssueCounts[k] = 0;
   }
  //  for(let k=0;k<LEN;++k){
  //   this.setState({
  //     pieChartResult:[]
  //   })
  // }
  //  var pieChartResult:Array<number> = [0]
   for(let i=0;i<departmentList.length;++i){  
     for(let j=0;j<this.state.deptDetails.length;++j){
       if(this.state.deptDetails[j].department===departmentList[i].deptName){
          eachDeptOpenIssueCounts[i] = eachDeptOpenIssueCounts[i] + 1;
          // pieChartResult[i] = pieChartResult[i] + 1;
       }
     }
   }
   if(eachDeptOpenIssueCounts.length > 0){
    console.log('departmentList[0].deptName = ' + departmentList[0].deptName);
    console.log('eachDeptOpenIssueCounts[0] = ' + eachDeptOpenIssueCounts[0]);


   }
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
      this.getLoggedInUserIdSPGroupsSuccess(res,departmentDetailsArray);
    
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

 getLoggedInUserIdSPGroupsSuccess(res,departmentDetailsArray){
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
            SPGroupList[currentLoggedInUserDispatcherGroups] = new Object();
            SPGroupList[currentLoggedInUserDispatcherGroups].groupname = obj[loggedInTemp].Title;
            currentLoggedInUserDispatcherGroups++;
        }
    }
}

if(SPGroupList.length==0)
{
  console.log("User not in any dispatch group");
}

else
{
  var count = 0;
      for(var i=0;i<SPGroupList.length;i++)
      {
      if(count==0)
      {
        AssignedToFilter = "(AssignedTo eq '"+SPGroupList[i].groupname+"' ";
        count++;
      }
      else
      {
        AssignedToFilter = AssignedToFilter + " or "+ "AssignedTo eq '"+SPGroupList[i].groupname+"'";
      }
      }

}

this.loadAssignedTask(obj);


 }

 loadAssignedTask(obj){
  var todaydt = new Date();
  var day = todaydt.getDate();
  var month = todaydt.getMonth();
  var year = todaydt.getFullYear();

  var curDate = new Date(year, month, day);
  var dtFilter = curDate.setDate(curDate.getDate() - departmentFAQ_ArchiveTimeSpan);
  //var dtFilter = new Date(curDate);
  //console.log(dtFilter);
  var fday = curDate.getDate();
  var fmonth = curDate.getMonth() + 1;
  var fyear = curDate.getFullYear();
  var dateFilter = fyear + "-" + fmonth + "-" + fday + "T00:00:00.000Z";

//   deptDispatchData
var i=0, deptDataCount=0;
for(i=0;i<SPGroupList.length;++i){
  var depCount:number = SPGroupList.length;
  var nDD:DeptDispatcherData[]=[];
  var test = {
    deptName:'',
    dispatcherName:'',
    thisCount: 0
  }
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/lists/getbytitle('EmpReq')/items?$select=*,Author/Title&$expand=Author &$filter=Status eq 'Pending' and AssignedTo eq '${SPGroupList[i].groupname}' &$orderby=ID desc`,
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
        if(res.value.length>0){
        var count:number = 0;
        deptDispatchData = res.value.map((r,index)=>{
            count = count + 1;
            return{
            deptName:r.Department,
            dispatcherName:r.AssignedTo,
            thisCount: count
          }
        });

        deptData.push({deptName:deptDispatchData[0].deptName,thisCount:count })
        deptDataCount = deptDataCount + 1;

        // console.log('deptData[0].thisCount=' + deptData[i].thisCount);
        if(deptData.length){
          this.setState({
            dataFilledCheck: 1,
            loading:false
          })
      }
    }
    if(res.value.length === 0){
      this.setState({
        dataFilledCheck:0
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
}
 
onPlaceCardClick(deptName){
  this.setState({
    unlockEachPlaceCard:1,
    passDeptName:deptName
  });
  deptData = [];
}

homeButtonClick(){
  this.setState({
    homeButtonUnlock:1
  });
  deptData = [];

}
  
  public render(): React.ReactElement<IDispatcherSelectProps> {
    return (
      <div className={ styles.dispatcherView }>
         <div>
          {
            this.state.loading &&
            <Spinner size={SpinnerSize.large} label='Loading'/>
          }
        </div>
      {/* {
          (this.state.dataFilledCheck === 0) && (this.state.unlockEachPlaceCard === 0) && (this.state.homeButtonUnlock === 0) &&
          <div className="ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12">
                <Icon iconName='Home' style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>this.homeButtonClick()} ></Icon>
              </div>
            </div>
            <div>
              <h3>No Data</h3>
            </div>
          </div>
      } */}
      { (this.state.unlockEachPlaceCard === 0) && (this.state.homeButtonUnlock === 0) &&
       <div className="ms-Grid">
         <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-lg12 ms-md12 ms-sm12">
             <Icon iconName='Home' style={{fontSize:'25px', cursor:'pointer'}} onClick={()=>this.homeButtonClick()} ></Icon>
          </div>
         </div>
         <div className="ms-Grid-row ms-lg12 ms-sm12">               
         <h4>Dispatcher view page</h4>
        {   
          deptData.map((res,index)=>{
            return(
              <div className="ms-Grid-col ms-lg4 ms-sm4">
          <div className={`${styles.smallBox} ${styles.setMainBox}`} >
          <div className={styles.SetMainTitle}>
              <h4>{res.deptName}</h4>
            </div>
            <ul className={styles.nav}>
              <li>
                <a onClick={()=>{this.onPlaceCardClick(res.deptName)}}>Open Requests
                  <span className={`${styles['bg-red']} ${styles['pull-right']} ${styles.badge}`}>{res.thisCount}</span>
                </a>
              </li>
            </ul>
         </div>
         </div>
          )
         })
        }
        </div>
      </div>
        }
            
        {
           (this.state.unlockEachPlaceCard === 1) &&
            // <PeoplePickerTestExample deptBelongingNames={[]} passGroupName={this.state.passDeptName} msGraphClientFactory={this.props.msGraphClientFactory} emailType={this.props.emailType} description={this.props.description} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl} currentUserId={this.props.currentUserId}/>
            <DispatcherView webPartContext={this.props.webPartContext} passGroupName={this.state.passDeptName} msGraphClientFactory={this.props.msGraphClientFactory} emailType={this.props.emailType} description={this.props.description} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl} currentUserId={this.props.currentUserId}/>
        }

        { (this.state.homeButtonUnlock === 1) &&
          <DepartmentalRequest webPartContext={this.props.webPartContext} msGraphClientFactory={this.props.msGraphClientFactory} emailType={this.props.emailType} description={this.props.description} loggedInUserEmail={this.props.loggedInUserEmail} loggedInUserName={this.props.loggedInUserName} spHttpClient={this.props.spHttpClient} webUrl={this.props.webUrl}  currentUserId={this.props.currentUserId}/>
        }

      </div>
    );
  }
}
  