import * as React from "react";
import { useContext, useState } from "react";
import styles from './TabHeader.module.scss';
import TabItem from "./TabItem/TabItem";

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
            { (isSectorAvailable) ?   
                <div className={styles.TabHeaderSetDisplay} >                                                                           
                 {props.sectors.map((t)=>{                
                  return(   
                      <TabItem handleSectorChange={handleSectorTabHeaderChange} {...t}/>
                       )      
                  })}
                </div>            
               :
               <div> <h1>No Header Tab Data Found</h1></div> //TODO : make it a string constant
            }                        
        </div> 
    )
};

export default TabHeader;
