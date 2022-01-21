import * as React from "react";
import styles from './GoalItem.module.scss';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import { useContext, useState } from "react";
import GoalForm from "../GoalForm/GoalForm";

debugger;
const GoalItem = (props) =>{  
    console.log("GoalItem component contain props ==> ", props + "selectedSectorId => ",props.selectedSectorId);
    const [isGoalFormDisplay, setIsGoalFormDisplay] = useState(false);
    const [isSelEditId, setIsSelEditId] = useState(0);
    
    
    const EditButtonClicked = async(selectedEditId) => {
        alert("Edit Button Clicked. Id is =>" + selectedEditId);
        setIsSelEditId(selectedEditId);
        setIsGoalFormDisplay(true); 
     };
    const AddGoalButtonClicked = async(AddGoalButtonName ) => {
        alert(AddGoalButtonName + " Add Goal Button Clicked");
     };
        
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
                               <table><tr><td>{MonthlyTarget.Goal}</td></tr>                            
                                     <tr><td><progress id="file" value={MonthlyTarget.StatusPercentage} max="100"> </progress>{MonthlyTarget.StatusPercentage}%                                                                
                                        <button style={{margin:'20px'}} onClick={()=>EditButtonClicked(MonthlyTarget.Id)}> Edit </button>                                 
                                     </td></tr>
                               </table>                                               
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
                                 <table><tr><td>{QuarterlyObjectives.Goal}</td></tr>                            
                                       <tr><td><progress id="file" value={QuarterlyObjectives.StatusPercentage} max="100"> </progress>{QuarterlyObjectives.StatusPercentage}%                                                                
                                          <button style={{margin:'20px'}} onClick={()=>EditButtonClicked(QuarterlyObjectives.Id)}> Edit </button>                                 
                                       </td></tr>
                                 </table>                                               
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
                                    <table><tr><td>{YearlyGoals.Goal}</td></tr>                            
                                          <tr><td><progress id="file" value={YearlyGoals.StatusPercentage} max="100"> </progress>{YearlyGoals.StatusPercentage}%                                                                
                                             <button style={{margin:'20px'}} onClick={()=>EditButtonClicked(YearlyGoals.Id)}> Edit </button>                                 
                                          </td></tr>
                                    </table>                                               
                              </li>
                              )
                              })}                                                                         
                        </ul>
                     </div> 
                  </div> 
                  {/* Add Goal Button */}                 
                  <DefaultButton className={ styles.AddGoalButton} onClick={()=>AddGoalButtonClicked(sector.Title)}><h3>Add {sector.Title} Goal</h3></DefaultButton> 
                  { isGoalFormDisplay &&
                    <GoalForm handleEditButtonId={isSelEditId}{...props}/>
                 }
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
                                 <table><tr><td>{MonthlyTarget.Goal}</td></tr>                            
                                       <tr><td><progress id="file" value={MonthlyTarget.StatusPercentage} max="100"> </progress>{MonthlyTarget.StatusPercentage}%                                                                
                                          <button style={{margin:'20px'}} onClick={()=>EditButtonClicked(MonthlyTarget.Id)}> Edit </button>                                 
                                       </td></tr>
                                 </table>                                               
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
                                    <table><tr><td>{QuarterlyObjectives.Goal}</td></tr>                            
                                          <tr><td><progress id="file" value={QuarterlyObjectives.StatusPercentage} max="100"> </progress>{QuarterlyObjectives.StatusPercentage}%                                                                
                                             <button style={{margin:'20px'}} onClick={()=>EditButtonClicked(QuarterlyObjectives.Id)}> Edit </button>                                 
                                          </td></tr>
                                    </table>                                               
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
                                    <table><tr><td>{YearlyGoals.Goal}</td></tr>                            
                                          <tr><td><progress id="file" value={YearlyGoals.StatusPercentage} max="100"> </progress>{YearlyGoals.StatusPercentage}%                                                                
                                             <button style={{margin:'20px'}} onClick={()=>EditButtonClicked(YearlyGoals.Id)}> Edit </button>                                 
                                          </td></tr>
                                    </table>                                               
                              </li>
                              )                            
                              })}                                                                         
                           </ul>
                           )
                        })}    
                    </div> 
                  </div> 
                  {/* Add Goal Button */}
                  <DefaultButton className={ styles.AddGoalButton} onClick={()=>AddGoalButtonClicked(sector.Title)}><h3>Add {sector.Title} Goal</h3></DefaultButton>                                              
                  { isGoalFormDisplay &&
                    <GoalForm handleEditButtonId={isSelEditId}{...props}/>
                  }     
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