import * as React from "react";
import { useContext, useState } from "react";
import styles from './TabHeader.module.scss';
import { ITabHeaderProps } from './ITabHeaderProps';
import { connect } from "react-redux";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import TabItem from "./TabItem/TabItem";
// import { SetAppData } from "../../store/action/Action";
debugger;
const TabHeader = (props) =>{
    const [isSectorAvailable, setIsSectorAvailable] = useState(false);
    React.useEffect(() => {
        if(props.isSectorFetchComplete){
            setIsSectorAvailable(true);
        }
    }, [props.isSectorFetchComplete])
    return(
        <div className={ styles.tabHeader }>
            {/* <UserContext.Provider value={...props}> */}
            <h1>TabHeader (Organization, Department , Personal)</h1>
            <div className={styles.TabHeaderSetDisplay}>                         
                <div className={styles.TabHeaderGoalsTabs} >
                    <DefaultButton className={styles.TabHeaderGoalsTabBtn} ><h3> Organization </h3></DefaultButton>                       
                </div>
                <div className={styles.TabHeaderGoalsTabs} >
                    <DefaultButton className={styles.TabHeaderGoalsTabBtn} ><h3> Department </h3></DefaultButton>                       
                </div>
                <div className={styles.TabHeaderGoalsTabs} >
                    <DefaultButton className={styles.TabHeaderGoalsTabBtn} ><h3> Personal </h3></DefaultButton>                       
                </div>
            </div>
            {/* </UserContext.Provider> */}
          <div className={styles.TabHeaderSetDisplay}>
              {isSectorAvailable && 
                props.sectors.map((t)=>{
                    <TabItem {...t} />
                })  
             }
            {/* {props.sectors.map((t)=>{
                <TabItem {...t} />
            })} */}
            </div>
        </div> 
    )
};

export default TabHeader;
