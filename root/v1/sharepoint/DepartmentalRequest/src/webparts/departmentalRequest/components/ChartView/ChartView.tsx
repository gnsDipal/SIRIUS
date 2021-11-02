import * as React from 'react';
import styles from '../AssignedToView/AssignedToView.module.scss';
  // import styles from './ManagerView.module.scss'
import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { IPersonaProps } from '@fluentui/react/lib/Persona';
import { IBasePickerSuggestionsProps, IPeoplePickerProps, NormalPeoplePicker, ValidationState } from '@fluentui/react/lib/Pickers';
//import { people, mru } from '@fluentui/example-data';
import DepartmentalRequest from '../DepartmentalRequest/DepartmentalRequest'
import { IChartState } from './IChartState';
import { IChartProps } from './IChartProps';
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
import {IChartList} from './IChartList'
import { ChartControl, ChartType } from '@pnp/spfx-controls-react/lib/ChartControl';
import { IManagerList } from '../ManagerView/IManagerList';
import { Label } from '@fluentui/react';

debugger;

var grpName:string = 'IT Support';
var pickerGroupNames:(IPersonaProps)[]=[];
var pieDeptList: IDepartmentList[] = Array();
var pieDepartmentList:string[] = Array();
var pieEmployeeList: IManagerList[];
var pieChartDataList:number[] = [];
var LENTH:number = 0;
var data1= {
  labels:[],
          
  datasets: [
    {
      label: ' ',
      data: []
    }
  ]
};
var options = {
  legend: {
    display: true,
    position: "left"
  },
  title: {
    display: true,
    text: "Ticket Request by departments"
  }
};

const stackStyles: Partial<IStackStyles> = { root: { width: 169 } };

  export default class ChartView extends React.Component<IChartProps, IChartState> {

 
 constructor(props){
   super(props)
   this.state = {
    mostRecentlyUsed:[],
    peopleList:[],
    ticketCount:0,
    newPeoplePickerUser:'',
    loading:false,
    errorMessage:'',
    deptDetails:[],
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
    pieChartData:[],
    departmentDeptList:[],
    data: {
      labels: [],
              
      datasets: [
        {
          label: ' ',
          data: []
        }
      ]
    },
    pieChartResult:[],
    pieDepLists:[]

   }
  
 }

  componentDidMount(){
    this.loadDepartmentOptions();
  }
 

  private loadDepartmentOptions():void{
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
      .get(`${this.props.webUrl}/_api/web/lists/getbytitle('Department')/items?$select=*,GroupName/Title,DepartmentGroup/Title,Manager/Title&$expand=GroupName,DepartmentGroup,Manager&$orderby=Title asc`,
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
        pieDeptList = res.value.map((r,index)=>{
          return {
            deptName:r.Title,
            deptGroup:r.DepartmentGroup.Title,
            deptManager:r.ManagerId,
            dispatcherName:r.GroupName.Title
          };
        });
        LENTH = pieDeptList.length;
        for(let i=0;i<LENTH;++i){
          pieDepartmentList[i] = ' ';
        }
        for(let i=0;i<pieDeptList.length;++i){
          pieDepartmentList[i] = pieDeptList[i].deptName;
        }

        if(pieDepartmentList.length>0){
            this.setState({
              pieDepLists:pieDepartmentList
            })
        }
    if(pieDeptList.length>0){
      LENTH = pieDeptList.length;
      for(let i=0;i<LENTH;++i){
        pieDepartmentList[i] = ' ';
      }
      for(let i=0;i<pieDeptList.length;++i){
        pieDepartmentList[i] = pieDeptList[i].deptName;
      }

      if(pieDepartmentList.length>0){
          this.setState({
            pieDepLists:pieDepartmentList
          },()=>console.log('this.state.pieDepLists[0] = ' + this.state.pieDepLists[0]))
      }
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
      .get(`${this.props.webUrl}/_api/web/lists/getbytitle('EmployeeRequest')/items?$select=*,Author/Title,ReAssignTo/Title,AttachmentFiles&$expand=Author,ReAssignTo,AttachmentFiles`,
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
              reAssignedTo:r.ReAssignTo,
              dataId:r.ID,
              comment:r.Comment
            }
          }) 
        });
        pieEmployeeList = res.value.map((r,index)=>{
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
        console.log("deptDetails[4].department = " + this.state.deptDetails[4].department);
  
    if(pieEmployeeList.length>0){
      this.calculateChartData();   
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

 calculateChartData(){
   let LEN:number = pieDeptList.length;
   for(let k=0;k<LEN;++k){
     pieChartDataList[k] = 0;
   }
  //  for(let k=0;k<LEN;++k){
  //   this.setState({
  //     pieChartResult:[]
  //   })
  // }
  //  var pieChartResult:Array<number> = [0]
   for(let i=0;i<pieDeptList.length;++i){  
     for(let j=0;j<pieEmployeeList.length;++j){
       if(pieEmployeeList[j].department===pieDeptList[i].deptName){
          pieChartDataList[i] = pieChartDataList[i] + 1;
          // pieChartResult[i] = pieChartResult[i] + 1;
       }
     }
   }
   if(pieChartDataList.length > 0){
    data1= {
      labels:pieDepartmentList,
              
      datasets: [
        {
          label: ' ',
          data: pieChartDataList
        }
      ]
    };
     this.setState({
       data: {
         labels : pieDepartmentList,

         datasets: [
           {
             label: 'Dataset',
             data: pieChartDataList
           }
         ]
       },
       pieChartResult: pieChartDataList,
       indexSelect:1
     });

   }
 }




  // set the data
//   data= {
//   labels:
//     [
//       'January', 'February', 'March', 'April', 'May', 'June', 'July'
//     ],
//   datasets: [
//     {
//       label: 'My First Dataset',
//       data:
//         [
//           10, 50, 20, 60, 30, 70, 40
//         ]
//     }
//   ]
// };

// data1= {
//   labels:this.state.pieDepLists,
          
//   datasets: [
//     {
//       label: ' ',
//       data: this.state.pieChartResult
//     }
//   ]
// };





  public render(): React.ReactElement<IChartProps> {
  return (
    <div className={styles.assignedToView}>
      {(this.state.homeButton === 0) && 
      <div className="ms-Grid">
        {(this.state.indexSelect === 1) && (this.props.chartType === 0) &&
         <ChartControl
           type={ChartType.Pie}
           data={this.state.data}
           options={options}
         />
        }
        {/* {(this.state.indexSelect === 1) && (this.props.chartType === 1) &&
         <ChartControl
           type={ChartType.Bar}
           data={this.state.data}
           options={options}
         />
        }
        {(this.state.indexSelect === 1) && (this.props.chartType === 2) &&
         <ChartControl
           type={ChartType.Radar}
           data={this.state.data}
           options={options}
         />
        }
        {(this.state.indexSelect === 1) && (this.props.chartType === 3) &&
         <ChartControl
           type={ChartType.Doughnut}
           data={this.state.data}
           options={options}
         />
        }
        {(this.state.indexSelect === 1) && (this.props.chartType === 4) &&
         <ChartControl
           type={ChartType.HorizontalBar}
           data={this.state.data}
           options={options}
         />
        }
        {(this.state.indexSelect === 1) && (this.props.chartType === 5) &&
         <ChartControl
           type={ChartType.Line}
           data={this.state.data}
           options={options}
         />
        }
        {(this.state.indexSelect === 1) && (this.props.chartType === 6) &&
         <ChartControl
           type={ChartType.PolarArea}
           data={this.state.data}
           options={options}
         />
        } */}
 
    </div>
  }
    </div>
  );
}
}

