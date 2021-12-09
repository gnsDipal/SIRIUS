import * as React from 'react';
import styles from './AddEditDepartmentGoal.module.scss';
import { IAddEditDepartmentGoalProps, IAddEditDepartmentGoalState } from './IAddEditDepartmentGoal.Props';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from '@fluentui/react/lib/Icon';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import {  IStackTokens } from '@fluentui/react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import Department from './Deparment';

const stackTokens = { childrenGap: 50  };
const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 10 },
  styles: { root: { width: 300, textAlign: "Left"  } },
};

//Dropdown options
// const dropdownStyles: Partial<IDropdownStyles> = {
//   dropdown: { width: 150 },
// };

let DepartmentData: any = [];
let CurrentUserDepartmentData: any =[];
let DepartmentOptionsData: any = [];
let EditStatusIdData: any =[];

const IntervalOptions: IDropdownOption[] = [
  // { key: 'Interval', text: 'Interval', itemType: DropdownMenuItemType.Header },
  { key: 'Interval', text: 'Monthly Target' },
  { key: 'Interval', text: 'Quarterly Objectives' },
  { key: 'Interval', text: 'Yearly Goals' } 
];

const DepartmentOptions : IDropdownOption[] = [
  // { key: 'DepartmentOptions', text: 'DepartmentOptions', itemType: DropdownMenuItemType.Header },
  // { key: 'DepartmentOptions1', text: 'IT'},
  // { key: 'DepartmentOptions2', text: 'HR' },
  // { key: 'DepartmentOptions3', text: 'Finance' }
];

const CurrentUserDepartmentOptions : IDropdownOption[] = [
  //{ key: 'DepartmentOptions', text: 'DepartmentOptions', itemType: DropdownMenuItemType.Header },
  // { key: 'DepartmentOptions1', text: 'IT'},
  // { key: 'DepartmentOptions2', text: 'HR' },
 ];

//const stackTokens: IStackTokens = { childrenGap: 20 };


debugger;
export default class AddEditDepartmentGoal extends React.Component<IAddEditDepartmentGoalProps, IAddEditDepartmentGoalState, {}> {

  constructor(props: IAddEditDepartmentGoalProps, state:IAddEditDepartmentGoalState) {
    super(props); 
    this.state = {
      departmentData: [{
        Id:"",
        Title:"",
        Department:"",
        Members:"",
        MembersId:0,       
      }],
      editStatusIdData: [{
        Id:"",
        Title:"",
        Goal:"",
        Interval:"",
        Department:"",
        DepartmentId:"",
        StatusPercentage:0,           
      }],  
      currentUserDepartmentData:[],  
      departmentOptionsData:[], 
      departmentOptions:"",   
      AddEditGoalsFormDisplay:true,
      IntervalDataDisplay:false,
      selectedTitle:"",
      selectedGoal:"",
      selectedInterval:"",
      selectedDepartmentOption:"",
      selectedDepartmentOptionId:0,
      //selectedDepartmentOptionId:[],
      selectedStatusPercentage:0,
      selectedEditTitle:"",
      selectedEditGoal:"",
      selectedEditInterval:"",
      selectedEditDepartmentOption:"",
      selectedEditDepartmentOptionId:0,
      selectedEditStatusPercentage:0,
      GoalStatusId:0,
    };
    this.onChangeIntervalHandle = this.onChangeIntervalHandle.bind(this); 
    this.onChangeDepartmentOptionsHandle = this.onChangeDepartmentOptionsHandle.bind(this);         
  }

  componentDidMount()
  {
    this._getDepartmentOptionsData();
    //this._SaveOrganizationGoal();
    //this._CancelButtonClicked();
    this.displayEditStatusIdData();
  } 

    async onChangeGoalTitleHandle(selectedTitle:any){
      this.setState({
        selectedTitle:await selectedTitle.currentTarget.value,
          })
        //console.log("selectedTitle ==> ", this.state.selectedTitle);
     }

     async onChangeGoalHandle(selectedGoal:any){
      this.setState({
        selectedGoal:await selectedGoal.currentTarget.value,
          })
        //console.log("selectedGoal ==> ", this.state.selectedGoal);
     }

    onChangeIntervalHandle = async (selectedInterval:any)=> {       
      await this.setState({
        selectedInterval :  selectedInterval.text,
      });
      //console.log("selectedInterval ==> ", this.state.selectedInterval);
    }

    onChangeDepartmentOptionsHandle = async (selectedDepartmentOption:any)=> {       
      await this.setState({
        selectedDepartmentOption :  selectedDepartmentOption.text,
        selectedDepartmentOptionId :  selectedDepartmentOption.key,
      });
      console.log("selectedDepartmentOptions  ==> ", this.state.selectedDepartmentOption);
      console.log("selectedDepartmentOptions Id ==> ",this.state.selectedDepartmentOptionId );
    }

    async onChangeGoalStatusPercentageHandle(selectedStatusPercentage:any){
      this.setState({
        selectedStatusPercentage:await selectedStatusPercentage.currentTarget.value,
          })
        //console.log("selectedTitle ==> ", this.state.selectedTitle);
     }

     async onChangeEditGoalStatusPercentageHandle(selectedEditStatusPercentage:any){
      this.setState({       
        selectedEditStatusPercentage:await selectedEditStatusPercentage.currentTarget.value,
          })
        //console.log("selectedTitle ==> ", this.state.selectedTitle);
     }

_getDepartmentOptionsData = async () =>
  {    
    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");
    await this.props.spHttpClient
    .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalDepartmentOptions')/items?$select=*,Title,Department,Members/Id,Members/Title,DeptAdmin/Id,DeptAdmin/Title&$expand=Members,DeptAdmin`,
    //.get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalDepartmentOptions')/items?$select=ID,Title,Department`, 
          SPHttpClient.configurations.v1, {
          headers: headers
        })
    .then((result: SPHttpClientResponse) => {          
          return result.json();
          })
      .then((jsonresult) => {
           DepartmentData = [];         
          for(let i=0; i<jsonresult.value.length; ++i)
          {
            DepartmentData.push({              
              Id:jsonresult.value[i].Id,
              Title:jsonresult.value[i].Title,
              Department:jsonresult.value[i].Department,             
              Members:jsonresult.value[i].Members.Title,
              MembersId:jsonresult.value[i].Members.Id,               
            });
          }

          DepartmentOptionsData = []; 
          for(let i=0; i<jsonresult.value.length; ++i)
          {
           DepartmentOptions.push({
             key:jsonresult.value[i].Id,
             text:jsonresult.value[i].Title,              
             });
          }
          
          for(let i=0; i<jsonresult.value.length; ++i)
          { 
            for(let j=0; j<jsonresult.value[i].DeptAdmin.length; ++j)
            {             
              if(jsonresult.value[i].DeptAdmin[j].Id === this.props.currentUserId)
              {              
                CurrentUserDepartmentOptions.push ({
                    key: jsonresult.value[i].Id,
                    text: jsonresult.value[i].Department,  
                  });
              }
            }
          }
          //console.log("DepartmentOptionsData Array=>" + DepartmentOptionsData);
          this.setState({
              departmentData : DepartmentData,
              //currentUserDepartmentData : CurrentUserDepartmentOptions,
              //departmentOptionsData: DepartmentOptions,
            },()=>console.log("DepartmentOptions Data  =>" + this.state.departmentOptionsData)
           )
       })      
   }

displayEditStatusIdData =  async () =>
      {    
         const headers: HeadersInit = new Headers();
         headers.append("accept", "application/json;odata.metadata=none");
   
           await this.props.spHttpClient
           .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalDepartment')/items?$select=ID,Title,Goal,Interval,StatusPercentage,DepartmentId,Department/Id,Department/Title&$expand=Department/Id,Department/Title&$filter=Id eq '${this.props.RequireGoalStatusId}'`, 
             SPHttpClient.configurations.v1, {
             headers: headers
           })
           .then((result: SPHttpClientResponse) => {          
             return result.json();
           })
           .then((jsonresult) => {
             EditStatusIdData = [];         
             for(let i=0; i<jsonresult.value.length; ++i)
             {
               EditStatusIdData.push({                 
                 Id:jsonresult.value[i].Id,
                 Title:jsonresult.value[i].Title,
                 Goal:jsonresult.value[i].Goal,
                 Interval:jsonresult.value[i].Interval,
                 Department:jsonresult.value[i].Department.Title,
                 DepartmentId:jsonresult.value[i].Department.Id,
                 StatusPercentage:jsonresult.value[i].StatusPercentage,            
               });
             }         
             this.setState({
               editStatusIdData: EditStatusIdData,
               selectedEditTitle: EditStatusIdData[0].Title,
               selectedEditGoal:EditStatusIdData[0].Goal,
               selectedEditInterval:EditStatusIdData[0].Interval,
               selectedEditDepartmentOption:EditStatusIdData[0].Department,
               selectedEditDepartmentOptionId:EditStatusIdData[0].DepartmentId,
               selectedEditStatusPercentage:EditStatusIdData[0].StatusPercentage,
             },()=>console.log("EditStatusId Data  =>" + this.state.editStatusIdData)
             )
           })      
         } 

  _SaveAddDepartmentGoal(){
  alert( "Department Goal Data Saved");
  this.setState({
    AddEditGoalsFormDisplay:false,
    IntervalDataDisplay:true,   
  });
  alert("selectedDepartmentOptionId ==>" + this.state.selectedDepartmentOptionId);
  const spOpts: string = JSON.stringify({    
     'Title': this.state.selectedTitle,
     'Goal': this.state.selectedGoal,
     'Interval':this.state.selectedInterval, 
     //'Department':this.state.selectedDepartmentOption,  
     'DepartmentId': this.state.selectedDepartmentOptionId, 
     'StatusPercentage':this.state.selectedStatusPercentage,  
  });

  
    this.props.spHttpClient.post(`${this.props.webUrl}/_api/web/lists/getbytitle('GoalDepartment')/items`,     
    SPHttpClient.configurations.v1,  
    {  
        headers: {  
            'Accept': 'application/json;odata=nometadata',  
            'Content-type': 'application/json;odata=nometadata',  
            'odata-version': ''             
            },  
        body: spOpts  
    }) 
    .then((response: SPHttpClientResponse): Promise<void> => {  
        return response.json();  
    })  
    .then((item: any): void => {  
        console.log('Item has been created.');
    }, (error: any): void => {  
        console.log('Error while creating the item: ' + error);
    }); 
  }

  _SaveEditDepartmentGoal(){
    alert( "Department Goal Data Updated");
    this.setState({
      AddEditGoalsFormDisplay:false, 
      IntervalDataDisplay:true,  
    });

    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");
   
    this.props.spHttpClient
           .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalDepartment')/items('${this.props.RequireGoalStatusId}')?$select=ID,Title,Goal,Interval,StatusPercentage,DepartmentId,Department/Id,Department/Title&$expand=Department/Id,Department/Title&$filter=Id eq '${this.props.RequireGoalStatusId}'`, 
             SPHttpClient.configurations.v1, {
             headers: headers
           })
           .then((result: SPHttpClientResponse) => {          
             return result.json();
           })
           .then((jsonresult) => {
            //  EditStatusIdData = [];         
            //  for(let i=0; i<jsonresult.value.length; ++i)
            //  {
            //    EditStatusIdData.push({                 
            //      Id:jsonresult.value[i].Id,
            //      Title:jsonresult.value[i].Title,
            //      Goal:jsonresult.value[i].Goal,
            //      Interval:jsonresult.value[i].Interval,
            //      Department:jsonresult.value[i].Department.Title,
            //      StatusPercentage:jsonresult.value[i].StatusPercentage,            
            //    });
            //  }         
            //  this.setState({
            //    editStatusIdData: EditStatusIdData,
            //    selectedEditTitle: EditStatusIdData[0].Title,
            //    selectedEditGoal:EditStatusIdData[0].Goal,
            //    selectedEditInterval:EditStatusIdData[0].Interval,
            //    selectedEditDepartmentOptionId:EditStatusIdData[0].Department,
            //    selectedEditStatusPercentage:EditStatusIdData[0].StatusPercentage,
            //  },()=>console.log("EditStatusId Data  =>" + this.state.editStatusIdData)
            //  )
           })    

    const spOpts: string = JSON.stringify({     
      'Title': this.state.selectedEditTitle,
      'Goal': this.state.selectedEditGoal,
      'Interval':this.state.selectedEditInterval,
      'DepartmentId': this.state.selectedEditDepartmentOptionId,
      'StatusPercentage':this.state.selectedEditStatusPercentage,   
    });
  
    this.props.spHttpClient.post(`${this.props.webUrl}/_api/web/lists/getbytitle('GoalDepartment')/items(${this.props.RequireGoalStatusId})`,     
    SPHttpClient.configurations.v1,  
    {  
        headers: {  
            'Accept': 'application/json;odata=nometadata',  
            'Content-type': 'application/json;odata=nometadata',  
            'odata-version': '',  
            'IF-MATCH': '*',  
            'X-HTTP-Method': 'MERGE',
              // "X-RequestDigest": $("#__REQUESTDIGEST").val()
            },  
        body: spOpts  
    }) 
    .then((response: SPHttpClientResponse): Promise<void> => {  
        return response.json();  
    })  
    .then((item: any): void => {  
        console.log('Item has been created.');
    }, (error: any): void => {  
        console.log('Error while creating the item: ' + error);
    }); 
  }

  _NewFormCancelButtonClicked = () =>{
    this.setState({
      AddEditGoalsFormDisplay:false,
      IntervalDataDisplay:true,   
    }) 
   }
  
   _EditFormCancelButtonClicked = () =>{
    this.setState({
      AddEditGoalsFormDisplay:false, 
      IntervalDataDisplay:true,  
    }) 
   }
 
public render(): React.ReactElement<IAddEditDepartmentGoalProps> {
        return (
          <div className={ styles.addEditDepartmentGoal }>
            {/* <div className={ styles.container }>  */}
          { (this.state.AddEditGoalsFormDisplay === true) && 
            <div className={ styles.FormDisplay }> 
            <div className="ms-Grid" dir="ltr">
              {/* Form Header information */}
              {((this.props.openAddEditForm === 1) ? <h3>Add Department Goal Form</h3>
                : (this.props.openAddEditForm === 2) ? <h3>Edit Department Goal Form</h3> 
                : "")}
              {/* Title Field information */}
              <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                 <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                  <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                    <Stack {...columnProps}>
                      {((this.props.openAddEditForm === 1) ?                          
                          <TextField label="Title" id="TitleName" 
                           onChange={(selectedTitle)=>this.onChangeGoalTitleHandle(selectedTitle)}/>
                        :(this.props.openAddEditForm === 2) ? 
                          <TextField label="Title" id="TitleName" disabled
                            placeholder={this.state.selectedEditTitle} 
                            onChange={(selectedTitle)=>this.onChangeGoalTitleHandle(selectedTitle)} />
                           :"")}
                    </Stack>
                  </Stack>
                  </div>
               </div>
               {/* Goal Field information*/}
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                 <div className="ms-Grid-col ms-lg8 ms-sm8">  
                  <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                    <Stack {...columnProps}>                     
                        {((this.props.openAddEditForm === 1) ?                          
                           <TextField label="Goal" id="GoalsInfo" multiline rows={3}
                            onChange={(selectedGoal)=>this.onChangeGoalHandle(selectedGoal)}/>
                          :(this.props.openAddEditForm === 2) ? 
                            <TextField label="Goal" id="GoalsInfo" multiline rows={3}
                              placeholder={this.state.selectedEditGoal} disabled
                              onChange={(selectedGoal)=>this.onChangeGoalHandle(selectedGoal)}/>
                          :"")}
                    </Stack>
                  </Stack>
                </div>
               </div> 
               {/* Interval Field information */}            
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                 <div className="ms-Grid-col ms-lg8 ms-sm8">                                             
                    {((this.props.openAddEditForm === 1) ? 
                      <Stack tokens={stackTokens}>                          
                        <Dropdown
                            placeholder="Select an Interval"
                            label="Interval"
                            options={IntervalOptions}                         
                            onChange={(e,selectedInterval) => this.onChangeIntervalHandle(selectedInterval)}
                            //styles={dropdownStyles}
                            styles={{ dropdown: { width: 300 } }}
                          />
                        </Stack>
                    :(this.props.openAddEditForm === 2) ? 
                      <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                        <Stack {...columnProps}>
                          <TextField label="Interval" id="Interval" 
                              placeholder={this.state.selectedEditInterval} disabled
                              onChange={(selectedInterval)=>this.onChangeIntervalHandle(selectedInterval)}/>
                        </Stack>
                      </Stack>
                    :"")}                     
                  </div>
               </div>
               {/* Department Field information */}            
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                 <div className="ms-Grid-col ms-lg8 ms-sm8">                                             
                    {((this.props.openAddEditForm === 1) ? 
                      <Stack tokens={stackTokens}>
                        <Dropdown
                          placeholder="Select Department"
                          label="Department"                         
                          options={CurrentUserDepartmentOptions} 
                          //options={DepartmentOptions}                              
                          onChange={(e,selectedDepartmentOption) => this.onChangeDepartmentOptionsHandle(selectedDepartmentOption)}
                          //styles={dropdownStyles}
                          styles={{ dropdown: { width: 300 } }}
                        />
                      </Stack>
                    :(this.props.openAddEditForm === 2) ? 
                      <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                        <Stack {...columnProps}>
                          <TextField label="Department" id="Department" 
                           placeholder={this.state.selectedEditDepartmentOption} disabled
                           onChange={(selectedDepartment)=>this.onChangeIntervalHandle(selectedDepartment)}/>
                        </Stack>
                      </Stack>
                    :"")}                     
                  </div>
               </div>         
               {/* StatusPercentage Field information */}
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                 <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                  <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                    <Stack {...columnProps}>                         
                      {((this.props.openAddEditForm === 1) ?                          
                        <TextField label="StatusPercentage" id="StatusPercentage"
                           placeholder="Add Percentage for status" 
                           onChange={(selectedStatusPercentage)=>this.onChangeGoalStatusPercentageHandle(selectedStatusPercentage)}/>
                      :(this.props.openAddEditForm === 2) ? 
                        <TextField label="StatusPercentage" id="StatusPercentage"
                         placeholder={this.state.selectedEditStatusPercentage} 
                         onChange={(selectedEditStatusPercentage)=>this.onChangeEditGoalStatusPercentageHandle(selectedEditStatusPercentage)}/>
                      :"")}                       
                    </Stack>
                  </Stack>
                 </div>
               </div>              
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                 <div className="ms-Grid-col ms-lg8 ms-sm8">
                   {/* Save Button information (Save New Data and Save Edit Data)*/}
                      {((this.props.openAddEditForm === 1) ?                          
                          <PrimaryButton onClick={() => this._SaveAddDepartmentGoal()} ><h3>Save</h3></PrimaryButton>  
                      :(this.props.openAddEditForm === 2) ? 
                          <PrimaryButton onClick={() => this._SaveEditDepartmentGoal()} ><h3>Save</h3></PrimaryButton> 
                      :"")} 
                   {/* Cancel Button information (Cancel New Data Form and Cancel Edit Data Form)*/}
                  {((this.props.openAddEditForm === 1) ?                          
                        <DefaultButton onClick={() =>this._NewFormCancelButtonClicked()}><h3>Cancel</h3></DefaultButton>  
                    :(this.props.openAddEditForm === 2) ? 
                    <DefaultButton onClick={() =>this._EditFormCancelButtonClicked()}><h3>Cancel</h3></DefaultButton> 
                    :"")}                                                                                                    
                  </div>
               </div>                
           </div>  
          </div>
          }   
        {/* //Form Add/Edit Form Display condition close */}

        { (this.state.AddEditGoalsFormDisplay === false) &&
            <Department description={this.props.description}
            context={this.props.context}
            siteurl={this.props.siteurl}
            spHttpClient={this.props.spHttpClient}
            webUrl={this.props.webUrl}
            loggedInUserName= {this.props.loggedInUserName}
            loggedInUserEmail= {this.props.loggedInUserEmail}
            currentUserId={this.props.currentUserId}
            isAddDepartmentGoalButtonDisplay={this.props.isAddDepartmentGoalButtonDisplay}
            RequireGoalStatusId={this.props.RequireGoalStatusId}
            openAddEditForm={this.props.openAddEditForm} 
            isIntervalDataDisplay={this.state.IntervalDataDisplay}           
            >
            </Department>
        }

        {/* </div> */}
      </div>
   );
  }
}