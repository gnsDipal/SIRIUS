import * as React from "react";
import styles from './TabItem.module.scss';
import { ITabItemProps } from './ITabItemProps';

  const TabItem = (props) =>{
    console.log("TabItem",props)
    return(        
        <div className={ styles.tabItem }>            
          <div className={styles.SetDisplay}>
            <h1>TabItem (Default Tab Item is Organization)</h1>
            <button>Organization</button>
            <button>Department</button>
            <button>Personal</button>
           </div>
        </div>
    )
};

  export default TabItem