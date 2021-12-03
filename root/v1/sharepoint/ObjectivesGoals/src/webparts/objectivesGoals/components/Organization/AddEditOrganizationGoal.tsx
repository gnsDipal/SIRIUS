import * as React from 'react';
import styles from './AddEditOrganizationGoal.module.scss';
import { IAddEditOrganizationGoalProps, IAddEditOrganizationGoalState } from './IAddEditOrganizationGoal.Props';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from '@fluentui/react/lib/Icon';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import {  IStackTokens } from '@fluentui/react';
import { TextField } from '@fluentui/react/lib/TextField';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import Orgnization from './Organization';
import ObjectivesGoals from '../ObjectivesGoals';

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

let GoalsData: any = [];
let EditStatusIdData: any =[];

const IntervalOptions: IDropdownOption[] = [
  // { key: 'Interval', text: 'Interval', itemType: DropdownMenuItemType.Header },
  { key: 'Interval', text: 'Monthly Target' },
  { key: 'Interval', text: 'Quarterly Objectives' },
  { key: 'Interval', text: 'Yearly Goals' } 
];

const ExpandableOptions : IDropdownOption[] = [
  { key: 'ExpandableOptions', text: 'ExpandableOptions', itemType: DropdownMenuItemType.Header },
  { key: 'ExpandableOptions1', text: 'Organization'},
  { key: 'ExpandableOptions2', text: 'Department' },
  { key: 'ExpandableOptions3', text: 'Personal' }
];

//const stackTokens: IStackTokens = { childrenGap: 20 };

debugger;
export default class AddEditOrganizationGoal extends React.Component<IAddEditOrganizationGoalProps, IAddEditOrganizationGoalState, {}> {

  constructor(props: IAddEditOrganizationGoalProps, state:IAddEditOrganizationGoalState) {
    super(props); 
    this.state = {
      goalsData: [{
        Id:"",
        Title:"",
        Goal:"",
        Interval:"",           
      }],
      editStatusIdData: [{
        Id:"",
        Title:"",
        Goal:"",
        Interval:"",
        StatusPercentage:0,    
      }],         
      AddEditGoalsFormDisplay:true,
      IntervalDataDisplay:false,
      selectedTitle:"",
      selectedGoal:"",
      selectedInterval:"",
      selectedStatusPercentage:0,
      GoalStatusId:0,
      selectedEditTitle:"",
      selectedEditGoal:"",
      selectedEditInterval:"",
      selectedEditStatusPercentage:"",
      OrganizationTabDisplay:true,
      
    };
    this.onChangeIntervalHandle = this.onChangeIntervalHandle.bind(this);          
  }

  // AddEditformShowHide = () => {

  //   this.setState(state => ({ AddEditGoalsFormDisplay: !state.AddEditGoalsFormDisplay }));

  // };

  componentDidMount()
  {
    //this._SaveOrganizationGoal();
    //this._CancelButtonClicked();
    this.displayEditStatusIdData();
  } 

  _SaveButtonClicked = () =>{
    //alert( "Save Button Clicked");
     this.setState({
      AddEditGoalsFormDisplay:false, 
      IntervalDataDisplay:true,  
     });
    }

    // onChangeGoalTitleHandle = async (selectedTitle)=> {
    //   await this.setState({
    //     selectedTitle :  selectedTitle.text,
    //   });
    // }

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

 displayEditStatusIdData =  async () =>
   {    
      const headers: HeadersInit = new Headers();
      headers.append("accept", "application/json;odata.metadata=none");

        await this.props.spHttpClient
        .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalOrganization')/items?$select=ID,Title,Goal,Interval,StatusPercentage&$filter=Id eq '${this.props.RequireGoalStatusId}'`, 
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
              //this.state.goalsData.push({
              Id:jsonresult.value[i].Id,
              Title:jsonresult.value[i].Title,
              Goal:jsonresult.value[i].Goal,
              Interval:jsonresult.value[i].Interval,
              StatusPercentage:jsonresult.value[i].StatusPercentage,            
            });
          }         
          this.setState({
            editStatusIdData: EditStatusIdData,
            selectedEditTitle: EditStatusIdData[0].Title,
            selectedEditGoal:EditStatusIdData[0].Goal,
            selectedEditInterval:EditStatusIdData[0].Interval,
            selectedEditStatusPercentage:EditStatusIdData[0].StatusPercentage,
          },()=>console.log("EditStatusId Data  =>" + this.state.editStatusIdData)
          )
        })      
      }  

_SaveAddOrganizationGoal(){
    alert( "Organization Goal Data Saved");
    this.setState({
      AddEditGoalsFormDisplay:false, 
      IntervalDataDisplay:true,  
    });

    const spOpts: string = JSON.stringify({     
      'Title': this.state.selectedTitle,
      'Goal': this.state.selectedGoal,
      'Interval':this.state.selectedInterval,
      'StatusPercentage':this.state.selectedStatusPercentage,   
    });
  
    this.props.spHttpClient.post(`${this.props.webUrl}/_api/web/lists/getbytitle('GoalOrganization')/items`,     
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

  _SaveEditOrganizationGoal(){
    alert( "Organization Goal Data Updated");
    this.setState({
      AddEditGoalsFormDisplay:false,  
      IntervalDataDisplay:true, 
    });

    const headers: HeadersInit = new Headers();
    headers.append("accept", "application/json;odata.metadata=none");
    this.props.spHttpClient
    .get(`${this.props.siteurl}/_api/web/lists/getbytitle('GoalOrganization')/items('${this.props.RequireGoalStatusId}')?$select=ID,Title,Goal,Interval,StatusPercentage&$filter=Id eq '${this.props.RequireGoalStatusId}'`, 
          SPHttpClient.configurations.v1, {
          headers: headers
         })
       .then((result: SPHttpClientResponse) => {          
         return result.json();
          })
            .then((jsonresult) => {
              // EditStatusIdData = [];         
              // for(let i=0; i<jsonresult.value.length; ++i)
              // {
              //   EditStatusIdData.push({
              //     //this.state.goalsData.push({
              //     Id:jsonresult.value[i].Id,
              //     Title:jsonresult.value[i].Title,
              //     Goal:jsonresult.value[i].Goal,
              //     Interval:jsonresult.value[i].Interval,
              //     StatusPercentage:jsonresult.value[i].StatusPercentage,            
              //   });
              // }         
              // this.setState({
              //   editStatusIdData: EditStatusIdData,
              //   selectedEditTitle: EditStatusIdData[0].Title,
              //   selectedEditGoal:EditStatusIdData[0].Goal,
              //   selectedEditInterval:EditStatusIdData[0].Interval,
              //   selectedEditStatusPercentage:EditStatusIdData[0].StatusPercentage,
              // },()=>console.log("EditStatusId Data  =>" + this.state.editStatusIdData)
              // )
            })       
     alert('Updated StatusPercentage ==> '+ this.state.selectedEditStatusPercentage,);

    const spOpts: string = JSON.stringify({     
      'Title': this.state.selectedEditTitle,
      'Goal': this.state.selectedEditGoal,
      'Interval':this.state.selectedEditInterval,
      'StatusPercentage':this.state.selectedEditStatusPercentage,   
    });
  
    this.props.spHttpClient.post(`${this.props.webUrl}/_api/web/lists/getbytitle('GoalOrganization')/items(${this.props.RequireGoalStatusId})`,     
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
  
_NewFormCancelButtonClicked = (event) =>{

  // this.props.isOrgnizationGoalFormDisplay(true);
  //       event.preventDefault();
  this.setState({
    AddEditGoalsFormDisplay:false,
    OrganizationTabDisplay:true,
    IntervalDataDisplay:true,   
  }) 

 }

 _EditFormCancelButtonClicked = () =>{
  this.setState({
    AddEditGoalsFormDisplay:false, 
    OrganizationTabDisplay:true,
    IntervalDataDisplay:true,  
  }) 
 }

public render(): React.ReactElement<IAddEditOrganizationGoalProps> {
        return (
          <div className={ styles.addEditOrganizationGoal }>
            {/* <div className={ styles.container }>              */}
          { (this.state.AddEditGoalsFormDisplay === true) && 
            <div className={ styles.FormDisplay }> 
            <div className="ms-Grid" dir="ltr">
              {/* Form Header information */}
              {((this.props.openAddEditForm === 1) ? <h3>Add Organization Goal Form</h3>
                : (this.props.openAddEditForm === 2) ? <h3>Edit Organization Goal Form</h3> 
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
                          <PrimaryButton onClick={() => this._SaveAddOrganizationGoal()} ><h3>Save</h3></PrimaryButton>  
                      :(this.props.openAddEditForm === 2) ? 
                          <PrimaryButton onClick={() => this._SaveEditOrganizationGoal()} ><h3>Save</h3></PrimaryButton> 
                      :"")} 
                   {/* Cancel Button information (Cancel New Data Form and Cancel Edit Data Form)*/}
                  {((this.props.openAddEditForm === 1) ?                          
                        <DefaultButton onClick={() =>this._NewFormCancelButtonClicked(event)}><h3>Cancel</h3></DefaultButton>  
                    :(this.props.openAddEditForm === 2) ? 
                    <DefaultButton onClick={() =>this._EditFormCancelButtonClicked()}><h3>Cancel</h3></DefaultButton> 
                    :"")}                                                                                                    
                  </div>
               </div>                
           </div>  
          </div>
          }          
         {/* //Form Add/Edit Form Display condition close */}

         { (this.state.AddEditGoalsFormDisplay === false ) &&
           <Orgnization description={this.props.description}
            context={this.props.context}
            siteurl={this.props.siteurl}
            spHttpClient={this.props.spHttpClient}
            webUrl={this.props.webUrl}
            loggedInUserName= {this.props.loggedInUserName}
            loggedInUserEmail= {this.props.loggedInUserEmail}
            currentUserId={this.props.currentUserId}
            isAddOrganizationGoalButtonDisplay={this.props.isAddOrganizationGoalButtonDisplay}
            RequireGoalStatusId={this.state.GoalStatusId}      
            //openOrganizationForm={this.state.openAddEditForm}
            OrganizationTabDisplay={this.state.OrganizationTabDisplay}
            openAddEditForm={this.props.openAddEditForm} 
            isIntervalDataDisplay={this.state.IntervalDataDisplay} >
            </Orgnization>          
         }        
        {/* </div> */}
      </div>
   );
  }
}