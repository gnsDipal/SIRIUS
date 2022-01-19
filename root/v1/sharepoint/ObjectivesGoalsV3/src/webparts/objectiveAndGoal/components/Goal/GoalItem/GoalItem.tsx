import * as React from "react";
import styles from './GoalItem.module.scss';

debugger;
const GoalItem = (props) =>{  
    console.log("GoalItem component contain props ==> ", props + "selectedSectorId => ",props.selectedSectorId);
    // const handleSectorTab = async(e, id) => {    
    //     props.handleSectorChange(id);
    //  };

    return( 
        <div className={ styles.goalItem }> 
            {/* {props.sectors.map((sector)=>{   
                if(sector.Id == props.selectedSectorId)             
                 return(   
                        <h1>{sector.Title} interval Data </h1>                               
                     )      
            })}     */}
        <h1>Goal Item component</h1>
            <div className={styles.IntervalSetDisplay}>                   
                    <div className={styles.DataDisplay}> 
                    </div>                      
            </div> 
            
        </div>
     );
}

export default GoalItem;