import * as React from "react";
import { useContext, useState } from "react";
import styles from './TabHeader.module.scss';
import { ITabHeaderProps } from './ITabHeaderProps';
import { connect } from "react-redux";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import TabItem from "./TabItem/TabItem";
// import { SetAppData } from "../../store/action/Action";
// debugger;
const TabHeader = (props) =>{   
    const [isSectorAvailable, setIsSectorAvailable] = useState(false); 
         
    React.useEffect(() => {
        if(props.isSectorFetchComplete){
            setIsSectorAvailable(true);            
        }
    }, [props.isSectorFetchComplete])

    const handleSectorTabHeaderChange = async(id) => {       
        props.handleMainSectorChange(id);
    };
    return(       
        <div className={ styles.tabHeader }>           
            {/* <UserContext.Provider value={...props}>  */}               
            { (isSectorAvailable) ?   
                // <div className={styles.TabHeaderSetDisplay}>                         
                //     <div className={styles.TabHeaderGoalsTabs} >                                                                           
                //     { props.sectors.map((t)=>{                
                //       return(   
                //           <TabItem handleSectorChange={handleSectorTabHeaderChange} {...t}/>
                //            )      
                //       })}
                //     </div>
                // </div>
                <div className={styles.TabHeaderSetDisplay} >                                                                           
                 {props.sectors.map((t)=>{                
                  return(   
                      <TabItem handleSectorChange={handleSectorTabHeaderChange} {...t}/>
                       )      
                  })}
                </div>            
               :
               <div> <h1>No Header Tab Data Found</h1></div>
            }                        
        </div> 
    )
};

export default TabHeader;
