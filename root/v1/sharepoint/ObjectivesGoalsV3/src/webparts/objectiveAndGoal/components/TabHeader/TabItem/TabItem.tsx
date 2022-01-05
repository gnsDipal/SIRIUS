import * as React from "react";
import styles from './TabItem.module.scss';
import { ITabItemProps } from './ITabItemProps';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";

const TabItem = (props) =>{
console.log("TabItem",props)
const[ count, setCount ] = React.useState<number>(1); 
const[ bgColorOrganization, setBgColorOrganization ] = React.useState<string>("#04ef00");
const[ bgColorDepartment, setBgColorDepartment ] = React.useState<string>("white");
const[ bgColorPersonal, setBgColorPersonal ] = React.useState<string>("white");
const[ colorOrganization,setColorOrganization ] = React.useState<string>("white");
const[ colorDepartment, setColorDepartment ] = React.useState<string>("black"); 
const[ colorPersonal, setColorPersonal ] = React.useState<string>("black");

 //User clicks on Organization tab
 const OrganizationClicked = async() => {
    alert("Organization Tab Clicked");
    setBgColorOrganization("#04ef00");
    setBgColorDepartment("white");
    setBgColorPersonal("white");
    setColorOrganization("white");
    setColorDepartment("black");
    setColorPersonal("black");
    let newcount = 1;
    setCount(newcount);
 };
 const DepartmentClicked = async() => {
    alert("Department Tab Clicked");
    setBgColorOrganization("white");
    setBgColorDepartment("#04ef00");
    setBgColorPersonal("white");
    setColorOrganization("black");
    setColorDepartment("white");
    setColorPersonal("black");
    let newcount = 2;
    setCount(newcount);
 };
 const PersonalClicked = async() => {
    alert("Personal Tab Clicked");
    setBgColorOrganization("white");
    setBgColorDepartment("white");
    setBgColorPersonal("#04ef00");
    setColorOrganization("black");
    setColorDepartment("black");
    setColorPersonal("white");
    let newcount = 3;
    setCount(newcount);
 };
 const EditButtonClicked = async() => {
    alert("Edit Button Clicked");
 };
 const AddGoalButtonClicked = async() => {
    alert("Add Goal Button Clicked");
 };
 return(        
   <div className={ styles.tabItem }>  
     <h1>TabItem (Default Tab Item is Organization)</h1> 
     {/* Header Tab related Information */}
     <div className={styles.TabHeaderSetDisplay}>                         
         <div className={styles.TabHeaderGoalsTabs} >
            <DefaultButton className={styles.TabHeaderGoalsTabBtn} style={{backgroundColor:bgColorOrganization, color:colorOrganization}} onClick={OrganizationClicked} ><h3>Organization</h3></DefaultButton>                       
         </div>
         <div className={styles.TabHeaderGoalsTabs} >                       
            <DefaultButton className={styles.TabHeaderGoalsTabBtn} style={{backgroundColor:bgColorDepartment, color:colorDepartment}} onClick={DepartmentClicked} ><h3>Department</h3></DefaultButton>                           
         </div> 
         <div className={styles.TabHeaderGoalsTabs} >                    
            <DefaultButton className={styles.TabHeaderGoalsTabBtn} style={{backgroundColor:bgColorPersonal, color:colorPersonal}} onClick={PersonalClicked}><h3>Personal</h3></DefaultButton>                           
         </div> 
      </div>
      {/* Interval Data related Information */}
       <div className={styles.IntervalSetDisplay}>   
              <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Monthly Target</h3></DefaultButton></div>                                                         
              <div className={styles.DataDisplay}> 
                <ul><li key="1" >                                                                
                        <table><tr><td>{"Monthly Goal "}</td></tr>                            
                               <tr><td><progress id="file" value="10" max="100"> </progress>10%                                                                
                                  <button style={{margin:'20px'}} > Edit </button>                                 
                               </td></tr>
                        </table>                                               
                    </li>                                                   
                </ul>
              </div> 
        </div> 
        <div className={styles.IntervalSetDisplay}>   
              <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Quaterly Objectives</h3></DefaultButton></div>                                                         
              <div className={styles.DataDisplay}> 
                <ul><li key="2" >                                                                
                        <table><tr><td>{"Quaterly Objectives Goal "}</td></tr>                            
                               <tr><td><progress id="file" value="10" max="100"> </progress>30%                                                                
                                  <button style={{margin:'20px'}} > Edit </button>                                 
                               </td></tr>
                        </table>                                               
                    </li>                                                   
                </ul>
              </div> 
        </div>    
        <div className={styles.IntervalSetDisplay}>   
              <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Yearly Target</h3></DefaultButton></div>                                                         
              <div className={styles.DataDisplay}> 
                 <ul><li key="3" >                                                                
                        <table><tr><td>{"Yearly Goal "}</td></tr>                            
                               <tr><td><progress id="file" value="10" max="100"> </progress>70%                                                                
                                  <button style={{margin:'20px' }} onClick={EditButtonClicked}> Edit </button>                                 
                               </td></tr>
                        </table>                                               
                    </li>                                                   
                 </ul>
              </div> 
        </div>
       {/* Add Goal Button */}
       <DefaultButton className={ styles.AddGoalButton} onClick={AddGoalButtonClicked}><h3>Add Organization Goal</h3></DefaultButton>              
    </div>
    
    )
};

  export default TabItem