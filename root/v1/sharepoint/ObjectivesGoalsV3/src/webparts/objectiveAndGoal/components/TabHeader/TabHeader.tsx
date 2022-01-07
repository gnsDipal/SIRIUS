import * as React from "react";
import { useContext, useState } from "react";
import styles from './TabHeader.module.scss';
import { ITabHeaderProps } from './ITabHeaderProps';
import { connect } from "react-redux";
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
            {/* </UserContext.Provider> */}
          <div className={styles.SetDisplay}>
              {isSectorAvailable && 
                 <label>{props.sectors.length}</label>
             }
            {/* {props.sectors.map((t)=>{
                <TabItem {...t} />
            })} */}
            </div>
        </div> 
    )
};

export default TabHeader;
