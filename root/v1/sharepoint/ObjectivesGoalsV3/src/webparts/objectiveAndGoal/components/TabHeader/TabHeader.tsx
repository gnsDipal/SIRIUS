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
    {console.log("props =>",props + "props.sectors =>",props.sectors )} 
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
           
            {/* Added TabHeader name Dynamic */} 
            { (isSectorAvailable) ?
              // <h1> sectors Data Available and Its length : {props.sectors.length} </h1>              
              props.sectors.map((t)=>{
                return(
                    <div className={styles.TabHeaderSetDisplay}>                         
                    <div className={styles.TabHeaderGoalsTabs} >                  
                            <DefaultButton className={styles.TabHeaderGoalsTabBtn} ><h3> {t.Title} </h3></DefaultButton>                                         
                    </div>
                    </div>
                 )
               })
            :
              <div className={styles.TabHeaderSetDisplay}>                                       
                <div className={styles.TabHeaderGoalsTabs} >
                    <DefaultButton className={styles.TabHeaderGoalsTabBtn} ><h3> Tab -1 </h3></DefaultButton>                       
                </div>
                <div className={styles.TabHeaderGoalsTabs} >
                    <DefaultButton className={styles.TabHeaderGoalsTabBtn} ><h3> Tab -2 </h3></DefaultButton>                       
                </div>
                <div className={styles.TabHeaderGoalsTabs} >
                    <DefaultButton className={styles.TabHeaderGoalsTabBtn} ><h3> Tab -3 </h3></DefaultButton>                       
                </div>
             </div>

            }
           
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
