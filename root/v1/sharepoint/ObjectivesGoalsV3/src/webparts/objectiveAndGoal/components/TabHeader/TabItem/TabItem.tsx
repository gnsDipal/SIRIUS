import * as React from "react";
import styles from './TabItem.module.scss';
import { ITabItemProps } from './ITabItemProps';
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";

debugger;
const TabItem = (props) =>{
   const handleSectorTab = async(e, id) => {    
      props.handleSectorChange(id);
   };
   
   return (
      <div className={ styles.tabItem }>                          
         <div className={styles.TabHeaderSetDisplay}>                         
            <div className={styles.TabHeaderGoalsTabs} >                    
             <DefaultButton className={styles.TabHeaderGoalsTabBtn} id={props.Id} title={props.Title} onClick={(e)=>handleSectorTab(e,props.Id )}> {props.Title} </DefaultButton>                                                                                                            
            </div>
        </div>
      </div>      
   );
 };

  export default TabItem