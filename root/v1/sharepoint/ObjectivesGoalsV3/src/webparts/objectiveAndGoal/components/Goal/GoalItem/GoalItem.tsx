import * as React from "react";
import styles from './GoalItem.module.scss';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { useContext, useState } from "react";
import AddGoalForm from "../GoalForm/AddGoalForm";

debugger;
const GoalItem = (props) =>{  
    //console.log("GoalItem component contain props ==> ", props + "selectedSectorId => ",props.selectedSectorId);
    const [isAddGoalFormDisplay, setIsAddGoalFormDisplay] = useState(false);
    const [isSelEditId, setIsSelEditId] = useState(0);
    const [updatedStatusPercentage, setUpdatedStatusPercentage] = useState(0);
    const [isProgressBarDisplay, setIsProgressBarDisplay] = useState(true);
    const [isStatusInputDisplay, setIsStatusInputDisplay] = useState(false);

    const onChangeStatusPercentageHandle = async(selectedStatusPercentage:any) => {   
      setUpdatedStatusPercentage(await selectedStatusPercentage.currentTarget.value);
      console.log("Updated StatusPercentage for Edit Id ==> ",updatedStatusPercentage);
      };
            
    const EditButtonClicked = async(sectorId, selectedEditId, statusValue) => {
        alert("Edit Button Clicked. SectorId is =>" + sectorId + ", selectedEditId =>" + selectedEditId + ", StatusValue =>" + statusValue );
        setIsSelEditId(selectedEditId);
        setIsProgressBarDisplay(false);
        setIsStatusInputDisplay(true);       
     };

    const UpdateButtonClicked = async(sectorId, selectedEditId, updatedStatusValue) => {
      alert("Update Status Percentage Button Clicked. SectorId is =>"+ sectorId + ", selectedEditId =>" + selectedEditId + ", Updated status Percentage =>" + updatedStatusValue);
      setIsSelEditId(selectedEditId);
      setIsProgressBarDisplay(true);
      setIsStatusInputDisplay(false);
     };

    const AddGoalButtonClicked = async(AddGoalButtonName ) => {
        alert(AddGoalButtonName + " Add Goal Button Clicked");
        setIsAddGoalFormDisplay(true);
     };
//TODO : Change the data display pattern and also change the styles from this file to scss files
    return( 
        <div className={ styles.goalItem }> 
         {/* Interval Data Display  */}
        {props.sectors.map((sector)=>{
         if (sector.Id == props.selectedSectorId )
         return( 
            <div>                            
               { (props.selectedSectorId !== 2) ?         
               <div>
                  {/* Monthly Data Display */}
                  <div className={styles.IntervalSetDisplay}>   
                     <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Monthly Target</h3></DefaultButton></div>                                                         
                     <div className={styles.DataDisplay}> 
                       <ul>
                       {sector.Data.Monthly.map( (MonthlyTarget, index)=> {                   
                         return(                   
                         <li key={MonthlyTarget.Id}  >
                                 <div style={{marginBottom:'15px'}}>
                                    <div style={{marginBottom:'5px'}}><label>{MonthlyTarget.Goal}</label></div>
                                    {isProgressBarDisplay &&
                                       <div> <progress id="file" value={MonthlyTarget.StatusPercentage} max="100"> </progress><span style={{marginLeft:'5px'}}>{MonthlyTarget.StatusPercentage}% </span>                                                                                                            
                                             { (sector.IsEditable) &&
                                             <button style={{margin:'0 20px'}} onClick={()=>EditButtonClicked(sector.Id, MonthlyTarget.Id, MonthlyTarget.StatusPercentage )}> Edit </button>                                                                                    
                                             }
                                       </div>
                                    }
                                    {isStatusInputDisplay  && (sector.IsEditable) &&
                                    <div> <input type="number" id={MonthlyTarget.Id} name={MonthlyTarget.Title} min="1" max="100" defaultValue={MonthlyTarget.StatusPercentage}
                                             onChange={(selectedStatusPercentage)=>{onChangeStatusPercentageHandle(selectedStatusPercentage)}}/> 
                                          <button style={{margin:'0 20px'}} onClick={()=>UpdateButtonClicked(sector.Id, MonthlyTarget.Id, updatedStatusPercentage)}> Update  </button>                                          
                                    </div>
                                    }
                                 </div>                              
                         </li>
                         )
                         })}                                                    
                        </ul>
                     </div> 
                  </div> 
                  {/* Quarterly Data Display */}
                  <div className={styles.IntervalSetDisplay}>   
                    <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Quarterly Objectives</h3></DefaultButton></div>                                                         
                    <div className={styles.DataDisplay}> 
                        <ul>
                           {sector.Data.Quartly.map( (QuarterlyObjectives, index)=> {                   
                           return(                   
                           <li key={QuarterlyObjectives.Id}  > 
                                 <div style={{marginBottom:'15px'}}>
                                    <div style={{marginBottom:'5px'}}><label>{QuarterlyObjectives.Goal}</label></div>
                                    {isProgressBarDisplay &&
                                       <div> <progress id="file" value={QuarterlyObjectives.StatusPercentage} max="100"> </progress><span style={{marginLeft:'5px'}}>{QuarterlyObjectives.StatusPercentage}% </span>                                                                                                              
                                              { (sector.IsEditable) && 
                                                <button style={{margin:'0 20px'}} onClick={()=>EditButtonClicked(sector.Id, QuarterlyObjectives.Id, QuarterlyObjectives.StatusPercentage )}> Edit </button>                                      
                                              }
                                       </div> 
                                    } 
                                    {isStatusInputDisplay && (sector.IsEditable) &&
                                    <div> <input type="number" id={QuarterlyObjectives.Id} name={QuarterlyObjectives.Title} min="1" max="100" defaultValue={QuarterlyObjectives.StatusPercentage}
                                             onChange={(selectedStatusPercentage)=>{onChangeStatusPercentageHandle(selectedStatusPercentage)}}/> 
                                          <button style={{margin:'0 20px'}} onClick={()=>UpdateButtonClicked(sector.Id, QuarterlyObjectives.Id, updatedStatusPercentage)}> Update  </button>
                                    </div>
                                    }                                 
                                 </div>                                                                                            
                           </li>
                           )
                           })}                                                                             
                        </ul>
                     </div> 
                  </div> 
                  {/* Yearly Data Display */}
                  <div className={styles.IntervalSetDisplay}>   
                     <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Yearly Goals</h3></DefaultButton></div>                                                         
                     <div className={styles.DataDisplay}> 
                        <ul>
                           {sector.Data.Yearly.map( (YearlyGoals, index)=> {                   
                              return(                   
                              <li key={YearlyGoals.Id}  >
                                    <div style={{marginBottom:'15px'}}>
                                       <div style={{marginBottom:'5px'}}><label>{YearlyGoals.Goal}</label></div>
                                       {isProgressBarDisplay &&
                                          <div> <progress id="file" value={YearlyGoals.StatusPercentage} max="100"> </progress><span style={{marginLeft:'5px'}}>{YearlyGoals.StatusPercentage}% </span>                                                                                                                   
                                                  { (sector.IsEditable) && 
                                                  <button style={{margin:'0 20px'}} onClick={()=>EditButtonClicked(sector.Id, YearlyGoals.Id, YearlyGoals.StatusPercentage )}> Edit </button>    
                                                  }                                    
                                       </div>
                                       }
                                       {isStatusInputDisplay && (sector.IsEditable) &&
                                          <div> <input type="number" id={YearlyGoals.Id} name={YearlyGoals.Title} min="1" max="100" defaultValue={YearlyGoals.StatusPercentage}
                                                   onChange={(selectedStatusPercentage)=>{onChangeStatusPercentageHandle(selectedStatusPercentage)}}/> 
                                                <button style={{margin:'0 20px'}} onClick={()=>UpdateButtonClicked(sector.Id, YearlyGoals.Id, updatedStatusPercentage)}> Update  </button>
                                          </div>
                                       }                                   
                                     </div>                                                                                      
                              </li>
                              )
                              })}                                                                         
                        </ul>
                     </div> 
                  </div> 
                  {/* Add Goal Button */}                 
                  {/* <DefaultButton className={ styles.AddGoalButton} onClick={()=>AddGoalButtonClicked(sector.Title)}><h3>Add {sector.Title} Goal</h3></DefaultButton>                 
                  { isAddGoalFormDisplay &&  <AddGoalForm {...props}/>
                  } */}
                </div>
            :
               <div>        
                  {/* Monthly Goal Data Display for Department*/}
                  <div className={styles.IntervalSetDisplay}>   
                    <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Monthly Target</h3></DefaultButton></div>                                                         
                    <div className={styles.DataDisplay}> 
                    {sector.Data.map( (Department, index)=> {
                     return(   
                        <ul>                         
                           <h3>{Department.DepartmentName}</h3> 
                           {Department.DepartmentData.Monthly.map( (MonthlyTarget, index)=> { 
                            return(             
                            <li key={MonthlyTarget.Id}  >
                                    <div style={{marginBottom:'15px'}}>
                                       <div style={{marginBottom:'5px'}}><label>{MonthlyTarget.Goal}</label></div>
                                       {isProgressBarDisplay &&
                                          <div> <progress id="file" value={MonthlyTarget.StatusPercentage} max="100"> </progress><span style={{marginLeft:'5px'}}>{MonthlyTarget.StatusPercentage}% </span>                                                               
                                              { (Department.IsEditable) && 
                                             <button style={{margin:'0 20px'}} onClick={()=>EditButtonClicked(sector.Id, MonthlyTarget.Id, MonthlyTarget.StatusPercentage )}> Edit </button>                                     
                                              }
                                          </div> 
                                       }
                                       {isStatusInputDisplay &&
                                          <div> <input type="number" id={MonthlyTarget.Id} name={MonthlyTarget.Title} min="1" max="100" defaultValue={MonthlyTarget.StatusPercentage}
                                                   onChange={(selectedStatusPercentage)=>{onChangeStatusPercentageHandle(selectedStatusPercentage)}}/> 
                                                <button style={{margin:'0 20px'}} onClick={()=>UpdateButtonClicked(sector.Id, MonthlyTarget.Id, updatedStatusPercentage)}> Update  </button>
                                          </div>
                                       }                                  
                                     </div>                                                                                                  
                            </li>
                            )                            
                           })}                                                                         
                        </ul>
                        )
                     })}  
                     </div> 
                  </div>
                  {/* Quarterly Data Display for Department*/}
                  <div className={styles.IntervalSetDisplay}>   
                     <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Quarterly Objectives</h3></DefaultButton></div>                                                         
                     <div className={styles.DataDisplay}> 
                        {sector.Data.map( (Department, index)=> {
                        return(   
                           <ul>                         
                              <h3>{Department.DepartmentName}</h3> 
                              {Department.DepartmentData.Quartly.map( (QuarterlyObjectives, index)=> { 
                              return(             
                              <li key={QuarterlyObjectives.Id}  >  
                                     <div style={{marginBottom:'15px'}}>
                                       <div style={{marginBottom:'5px'}}><label>{QuarterlyObjectives.Goal}</label></div>
                                       {isProgressBarDisplay &&
                                          <div> <progress id="file" value={QuarterlyObjectives.StatusPercentage} max="100"> </progress> <span style={{marginLeft:'5px'}}>{QuarterlyObjectives.StatusPercentage}% </span>                                                               
                                                 { (Department.IsEditable) && 
                                                <button style={{margin:'0 20px'}} onClick={()=>EditButtonClicked(sector.Id, QuarterlyObjectives.Id, QuarterlyObjectives.StatusPercentage )}> Edit </button>                                     
                                                 }
                                          </div>
                                       } 
                                       {isStatusInputDisplay &&
                                          <div> <input type="number" id={QuarterlyObjectives.Id} name={QuarterlyObjectives.Title} min="1" max="100" defaultValue={QuarterlyObjectives.StatusPercentage}
                                                   onChange={(selectedStatusPercentage)=>{onChangeStatusPercentageHandle(selectedStatusPercentage)}}/> 
                                                <button style={{margin:'0 20px'}} onClick={()=>UpdateButtonClicked(sector.Id, QuarterlyObjectives.Id, updatedStatusPercentage)}> Update  </button>
                                          </div>
                                       }                                     
                                     </div>                                                                                              
                              </li>
                              )                            
                              })}                                                                         
                           </ul>
                           )
                        })} 
                     </div> 
                  </div> 
                  {/* Yearly Goal Data Display for Department*/}
                  <div className={styles.IntervalSetDisplay}>   
                    <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Yearly Goals</h3></DefaultButton></div>                                                         
                    <div className={styles.DataDisplay}> 
                     {sector.Data.map( (Department, index)=> {
                        return(   
                           <ul>                         
                              <h3>{Department.DepartmentName}</h3> 
                              {Department.DepartmentData.Yearly.map( (YearlyGoals, index)=> { 
                              return(             
                              <li key={YearlyGoals.Id}  > 
                                     <div style={{marginBottom:'15px'}}>
                                       <div style={{marginBottom:'5px'}}><label>{YearlyGoals.Goal}</label></div>
                                       {isProgressBarDisplay &&
                                          <div> <progress id="file" value={YearlyGoals.StatusPercentage} max="100"> </progress><span style={{marginLeft:'5px'}}>{YearlyGoals.StatusPercentage}% </span>                                                                
                                                { (Department.IsEditable) &&
                                                 <button style={{margin:'0 20px'}} onClick={()=>EditButtonClicked(sector.Id, YearlyGoals.Id, YearlyGoals.StatusPercentage )}> Edit </button>                                     
                                                }
                                          </div>
                                       }
                                       {isStatusInputDisplay &&
                                          <div> <input type="number" id={YearlyGoals.Id} name={YearlyGoals.Title} min="1" max="100" defaultValue={YearlyGoals.StatusPercentage}
                                                   onChange={(selectedStatusPercentage)=>{onChangeStatusPercentageHandle(selectedStatusPercentage)}}/> 
                                                <button style={{margin:'0 20px'}} onClick={()=>UpdateButtonClicked(sector.Id, YearlyGoals.Id, updatedStatusPercentage)}> Update  </button>
                                          </div>
                                       }                                      
                                     </div>                                                                                                    
                              </li>
                              )                            
                              })}                                                                         
                           </ul>
                           )
                        })}    
                    </div> 
                  </div> 
                  {/* Add Goal Button */}
                  {/* <DefaultButton className={ styles.AddGoalButton} onClick={()=>AddGoalButtonClicked(sector.Title)}><h3>Add {sector.Title} Goal</h3></DefaultButton>                                                               
                  { isAddGoalFormDisplay &&  <AddGoalForm {...props}/>
                  }        */}
               </div>
             }
            </div>
          )
         //  props.sectors.map closed          
      })} 
      
   </div>
   );
}

export default GoalItem;