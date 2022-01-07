import * as React from "react";
import styles from './TabItem.module.scss';
import { ITabItemProps } from './ITabItemProps';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";

const TabItem = (props) =>{
   const[ bgColorOrganization, setBgColorOrganization ] = React.useState<string>("#04ef00");
   const[ colorOrganization,setColorOrganization ] = React.useState<string>("white");
   const HeaderTabClicked = async() => {
         alert("Header Tab Clicked");
      };
   return (
      // <DefaultButton title={props.Title} id={props.Id} /> 
      <div className={ styles.tabItem }>  
      <h1>TabItem (Default Tab Item is Organization)</h1> 
       {/* Header Tab related Information */}
         <div className={styles.TabHeaderSetDisplay}>                         
            <div className={styles.TabHeaderGoalsTabs} >
               <DefaultButton className={styles.TabHeaderGoalsTabBtn} style={{backgroundColor:bgColorOrganization, color:colorOrganization}} onClick={HeaderTabClicked} ><h3> {props.Title} </h3></DefaultButton>                       
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
      </div>      
   );
 };

  export default TabItem