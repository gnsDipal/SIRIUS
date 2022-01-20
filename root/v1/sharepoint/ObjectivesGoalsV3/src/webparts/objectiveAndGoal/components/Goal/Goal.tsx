import * as React from "react";
import styles from './Goal.module.scss';
import { useContext, useState } from "react";
import GoalItem from "./GoalItem/GoalItem";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";

debugger;
const Goal = (props) =>{  
    console.log("Goal component contain props ==> ", props + "Goal Component selectedSectorId => ",props.selectedSectorId);
    const [isSelected, setIsSelected] = useState(false); 

    // React.useEffect(() => {
    //              props.sectors.map((t)=>{                
    //              return(   
    //                     if( props.selectedSectorId == t.id){
    //                      setIsSelected(true);            
    //                     }
    //                  )      
    //              })     
    // }, [props.selectedSectorId])

    React.useEffect(() => {
        if(props.selectedSectorId){
            setIsSelected(true);            
        }
    }, [props.selectedSectorId])

    const handleSectorTabHeaderChange = async(id) => {       
        props.handleMainSectorChange(id);
    };

    return( 
        <div className={styles.goal}>                 
        <GoalItem handleSectorChange={handleSectorTabHeaderChange} {...props}/>
        </div>
     );
}

export default Goal;