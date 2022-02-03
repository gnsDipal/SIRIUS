import * as React from "react";
import styles from './GoalForm.module.scss';
import { useContext, useState } from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';

debugger;
const AddGoalForm = (props) =>{
    // const handleSectorTab = async(e, id) => {    
    //    props.handleSectorChange(id);
    // };   
    const stackTokens = { childrenGap: 50  };
    const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
    const columnProps: Partial<IStackProps> = {
     tokens: { childrenGap: 10 },
     styles: { root: { width: 300, textAlign: "Left"  } },
     };

    const IntervalOptions: IDropdownOption[] = [
        // { key: 'Interval', text: 'Interval', itemType: DropdownMenuItemType.Header },
        { key: 'Interval', text: 'Monthly Target' },
        { key: 'Interval', text: 'Quarterly Objectives' },
        { key: 'Interval', text: 'Yearly Goals' } 
      ];

    const [isAddGoalFormDisplay, setIsAddGoalFormDisplay] = useState(true);
    const [isSelectedTitle, setIsSelectedTitle] = useState("");
    const [isSelectedGoal, setIsSelectedGoal] = useState("");
    const [isSelectedInterval, setIsSelectedInterval] = useState("");
    const [isSelectedStatusPercentage, setIsSelectedStatusPercentage] = useState(0);

    const onChangeGoalTitleHandle = async(selectedTitle:any) => {
        setIsSelectedTitle(await selectedTitle.currentTarget.value);
        console.log("selectedTitle in Add Goal Form ==> ",isSelectedTitle);
        };

    const onChangeGoalHandle = async(selectedGoal:any) => {
        setIsSelectedGoal(await selectedGoal.currentTarget.value);
        console.log("selectedGoal in Add Goal Form ==> ",isSelectedGoal);
        };
    
    const onChangeIntervalHandle = async(selectedInterval:any) => {
        setIsSelectedInterval(await selectedInterval.text);
        console.log("selectedInterval in Add Goal Form ==> ",isSelectedInterval);
        };

    const onChangeStatusPercentageHandle = async(selectedStatusPercentage:any) => {
        setIsSelectedStatusPercentage(await selectedStatusPercentage.currentTarget.value);
        console.log("selectedStatusPercentage in Add Goal Form ==> ",isSelectedStatusPercentage);
        };
        
    
    const SaveAddGoalForm = async() => {
     alert( " Save Add Goal Form Button Clicked");
     setIsAddGoalFormDisplay(false);
     };
    const AddGoalFormCancelButtonClicked = async() => {
          alert("Add Goal Form Cancel Button Clicked" );
          setIsAddGoalFormDisplay(false); 
       };
    
    return (
          <div className={ styles.goalForm }>
          { isAddGoalFormDisplay &&
            <div className={ styles.FormDisplay }> 
               {/* Form Header information */}
               <div className="ms-Grid" dir="ltr">
                    <h1> Add Goal Form Open</h1>
               </div>
               {/* Title Field information */}
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                    <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                         <Stack {...columnProps}>                                                                       
                         <TextField label="Title" id="TitleName" 
                          onChange={(selectedTitle)=>{onChangeGoalTitleHandle(selectedTitle)}}/>
                         </Stack>
                    </Stack>
                    </div>
               </div>
                {/* Goal Field information */}
                <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                    <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                         <Stack {...columnProps}>                                                                       
                         <TextField label="Goal" id="GoalsInfo" multiline rows={3}
                         onChange={(selectedGoal)=>{onChangeGoalHandle(selectedGoal)}}/>
                         </Stack>
                    </Stack>
                    </div>
               </div>
               {/* Interval Field information */}            
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                    <div className="ms-Grid-col ms-lg8 ms-sm8">                                                                                                                                  
                        <Stack tokens={stackTokens}>                          
                           <Dropdown
                            placeholder="Select an Interval"
                            label="Interval"
                            options={IntervalOptions}                         
                            onChange={(e,selectedInterval) => {onChangeIntervalHandle(selectedInterval)}}
                            //styles={dropdownStyles}
                            styles={{ dropdown: { width: 300 } }}
                           />
                        </Stack>                                       
                    </div>
               </div>
                {/* StatusPercentage Field information */}
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                    <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                         <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                              <Stack {...columnProps}>                                                                                                                                                         
                              <TextField label="StatusPercentage" id="StatusPercentage"
                                placeholder="Add Percentage for status" 
                                onChange={(selectedStatusPercentage)=>{onChangeStatusPercentageHandle(selectedStatusPercentage)}}/>                                                    
                              </Stack>
                         </Stack>
                    </div>
               </div>
               {/* Save and Edit Button information */  } 
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                    <div className="ms-Grid-col ms-lg8 ms-sm8">                   
                    <PrimaryButton onClick={() => {SaveAddGoalForm()}} ><h3>Save</h3></PrimaryButton>
                    <DefaultButton onClick={() => {AddGoalFormCancelButtonClicked()}}><h3>Cancel</h3></DefaultButton>        
                    </div>
               </div> 
             </div>
          } 
         </div>
         
    );
  };
 
   export default AddGoalForm