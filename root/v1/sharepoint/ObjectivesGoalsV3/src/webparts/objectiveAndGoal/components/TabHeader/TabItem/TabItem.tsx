import * as React from "react";
import styles from './TabItem.module.scss';
import { ITabItemProps } from './ITabItemProps';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";

debugger;
const TabItem = (props) =>{
   const[ bgColorOrganization, setBgColorOrganization ] = React.useState<string>("#04ef00");
   const[ colorOrganization,setColorOrganization ] = React.useState<string>("white");  
   const AddGoalButtonClicked = async(selectedAddGoalButton) => {
         alert(selectedAddGoalButton + " Add Goal Button Clicked");
      };
   const EditButtonClicked = async() => {
         alert("Edit Button Clicked");
      };
   return (
      <div className={ styles.tabItem }>                          
      {/* Interval Data Display  */}
      {props.sectors.map((sector)=>{
         if (sector.Title == props.selectedSector )
         return( 
            <div>
               <h1>{sector.Title} Tab selected </h1>
               { (props.selectedSector !== "Department") ?        
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
                                        <button style={{margin:'20px'}} onClick={EditButtonClicked}> Edit </button>                                 
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
                                          <button style={{margin:'20px'}} onClick={EditButtonClicked}> Edit </button>                                 
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
                                             <button style={{margin:'20px'}} onClick={EditButtonClicked}> Edit </button>                                 
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
                                          <button style={{margin:'20px'}} onClick={EditButtonClicked}> Edit </button>                                 
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
                                             <button style={{margin:'20px'}} onClick={EditButtonClicked}> Edit </button>                                 
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
                                             <button style={{margin:'20px'}} onClick={EditButtonClicked}> Edit </button>                                 
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

               </div>
             }
            </div>
          )
         //  props.sectors.map closed
          
      })}  

      
   </div>      
   );
 };

  export default TabItem