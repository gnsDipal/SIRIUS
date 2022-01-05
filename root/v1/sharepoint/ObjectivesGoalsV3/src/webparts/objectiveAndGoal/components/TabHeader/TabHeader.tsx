import * as React from "react";
import styles from './TabHeader.module.scss';
import { ITabHeaderProps } from './ITabHeaderProps';
//import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
 
const TabHeader = (props) =>{
    console.log("TabHeader",props)
    return(
        <div className={ styles.tabHeader }>
            <h1>TabHeader (Organization, Department , Personal)</h1>
          <div className={styles.SetDisplay}>
                
            </div>                                                                    
        </div> 
    )
};

export default TabHeader