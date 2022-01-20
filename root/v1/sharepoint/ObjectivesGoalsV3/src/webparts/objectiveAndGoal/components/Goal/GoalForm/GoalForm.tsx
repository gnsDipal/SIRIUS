import * as React from "react";
import styles from './GoalForm.module.scss';
import { useContext, useState } from "react";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';

debugger;
const GoalForm = (props) =>{
    // const handleSectorTab = async(e, id) => {    
    //    props.handleSectorChange(id);
    // };
    console.log(props + "Id of Edit Button =>", props.handleEditButtonId);
    const stackTokens = { childrenGap: 50  };
    const stackStyles: Partial<IStackStyles> = { root: { width: 650 } };
    const columnProps: Partial<IStackProps> = {
     tokens: { childrenGap: 10 },
     styles: { root: { width: 300, textAlign: "Left"  } },
     };

    const [isAddGoalFormDisplay, setIsAddGoalFormDisplay] = useState(true);


    const SaveEditGoalForm = async() => {
     alert( " Save Edit Goal Form Button Clicked");
     };
    const EditFormCancelButtonClicked = async() => {
          alert("Edit Form Cancel Button Clicked" );
          setIsAddGoalFormDisplay(false); 
       };

     // const getEditFormIdData = async() => {
     //      let EditFormIdData =[];
     //      let sectorsArrayIndex = props.selectedSectorId-1;
     //      { props.sectors.map((sector, index)=>{
     //         if (sector.Id == props.selectedSectorId ){
     //               //Check the Id in the Monthly Interval Data
     //                {sector.Data.Monthly.map( (MonthlyTarget, index)=> {
     //                     if (MonthlyTarget.Id ===props.handleEditButtonId)                    
     //                     { EditFormIdData.push({
     //                          Id: MonthlyTarget.Id,
     //                          Title: MonthlyTarget.Title,
     //                          IsActive:MonthlyTarget.IsActive,
     //                          Goal:MonthlyTarget.Goal,
     //                          Interval:MonthlyTarget.Interval,
     //                          StatusPercentage:MonthlyTarget.StatusPercentage
     //                          })
     //                     }
     //                })}
     //                //Check the Id in the Monthly Interval Data
     //                {sector.Data.QuarterlyObjectives.map( (QuarterlyObjectives, index)=> {
     //                     if (QuarterlyObjectives.Id ===props.handleEditButtonId)
     //                     { EditFormIdData.push({
     //                          Id: QuarterlyObjectives.Id,
     //                          Title: QuarterlyObjectives.Title,
     //                          IsActive:QuarterlyObjectives.IsActive,
     //                          Goal:QuarterlyObjectives.Goal,
     //                          Interval:QuarterlyObjectives.Interval,
     //                          StatusPercentage:QuarterlyObjectives.StatusPercentage
     //                          })
     //                     }
     //                })}
     //                //Check the Id in the Monthly Interval Data
     //                {sector.Data.Yearly.map( (Yearly, index)=> {
     //                     if (Yearly.Id ===props.handleEditButtonId)
     //                     { EditFormIdData.push({
     //                          Id: Yearly.Id,
     //                          Title: Yearly.Title,
     //                          IsActive:Yearly.IsActive,
     //                          Goal:Yearly.Goal,
     //                          Interval:Yearly.Interval,
     //                          StatusPercentage:Yearly.StatusPercentage
     //                          })
     //                     }
     //                })}
     //           } 
     //           return EditFormIdData;
     //      })}
     //   };
    
    return (
          <div className={ styles.goalForm }>
          { isAddGoalFormDisplay &&
            <div className={ styles.FormDisplay }> 
               {/* Form Header information */}
               <div className="ms-Grid" dir="ltr">
                    <h1> Edit Goal Form Open</h1>
               </div>
               {/* Title Field information */}
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                    <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                         <Stack {...columnProps}>                                                                       
                         <TextField label="Title" id="TitleName" disabled
                         placeholder="EditGoalTitle"
                         />                        
                         </Stack>
                    </Stack>
                    </div>
               </div>
                {/* Goal Field information */}
                <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                    <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                         <Stack {...columnProps}>                                                                       
                         <TextField label="Goal" id="GoalsInfo" multiline rows={3} disabled
                         placeholder="Goal Information for Edit Button"
                         />                        
                         </Stack>
                    </Stack>
                    </div>
               </div>
               {/* Interval Field information */}            
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                    <div className="ms-Grid-col ms-lg8 ms-sm8">                                                            
                                                                      
                         <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                         <Stack {...columnProps}>
                              <TextField label="Interval" id="Interval" 
                                   placeholder="Interval name of seleced Id for Edit Button" disabled
                              />
                         </Stack>
                         </Stack>
                                        
                    </div>
               </div>
                {/* StatusPercentage Field information */}
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                    <div className="ms-Grid-col ms-lg8 ms-md8 ms-sm8">
                         <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                              <Stack {...columnProps}>                                                                                                                                                         
                                  <TextField label="StatusPercentage" id="StatusPercentage"
                                        placeholder="Change the status Percentage" 
                                   />                                                      
                              </Stack>
                         </Stack>
                    </div>
               </div>
               {/* Save and Edit Button information */  } 
               <div className="ms-Grid-row" style={{marginBottom:'20px'}}>
                    <div className="ms-Grid-col ms-lg8 ms-sm8">                   
                    <PrimaryButton onClick={() => {SaveEditGoalForm()}} ><h3>Save</h3></PrimaryButton>
                    <DefaultButton onClick={() => {EditFormCancelButtonClicked()}}><h3>Cancel</h3></DefaultButton>        
                    </div>
               </div> 
             </div>
          } 
         </div>
         
    );
  };
 
   export default GoalForm