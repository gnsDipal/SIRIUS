import * as React from "react";
import styles from './IntervalItem.module.scss';

const IntervalItem = (props) =>{  

    // const handleSectorTab = async(e, id) => {    
    //     props.handleSectorChange(id);
    //  };

    return(
        <div className={ styles.intervalItem }>  
        <h1>Interval Item Component</h1>
        </div>
     );
}

export default IntervalItem;