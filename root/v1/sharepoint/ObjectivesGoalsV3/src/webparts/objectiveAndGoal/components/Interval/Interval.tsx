import * as React from "react";
import styles from './Interval.module.scss';
import IntervalItem from "./IntervalItem/IntervalItem";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";

const Interval = (props) =>{  

    const handleSectorTabHeaderChange = async(id) => {       
        props.handleMainSectorChange(id);
    };
    
    return( 
        <div className={styles.interval}>
        <h1>Interval Component</h1>
        {/* <IntervalItem handleSectorChange={handleSectorTabHeaderChange} {...props}/> */}
            <div className={styles.IntervalSetDisplay}>   
                <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Monthly Target</h3></DefaultButton></div>                                                         
                {/* <div className={styles.DataDisplay}> </div>                       */}
            </div> 
            <div className={styles.IntervalSetDisplay}>   
                <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Quarterly Objectives</h3></DefaultButton></div>                                                         
                                     
            </div>
            <div className={styles.IntervalSetDisplay}>   
                <div className={styles.IntervalButtonDiv}><DefaultButton className={styles.IntervalButtons} ><h3>Yearly Goals</h3></DefaultButton></div>                                                         
                                      
            </div>
        </div>
     );
}

export default Interval;