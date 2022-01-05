import * as React from "react";
import styles from './TabHeader.module.scss';
import { ITabHeaderProps } from './ITabHeaderProps';
//import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
 
const TabHeader = (props) =>{
    console.log("TabHeader",props)
    return(
        <div className={ styles.tabHeader }>
          <div className={styles.SetDisplay}>
                <h1>TabHeader (Organization, Department , Personal)</h1>
            </div>                                                                    
        </div> 
    )
};

export default TabHeader