import * as React from "react";
import { useContext } from "react";
import styles from './TabHeader.module.scss';
import { ITabHeaderProps } from './ITabHeaderProps';
import { connect } from "react-redux";
// import { SetAppData } from "../../store/action/Action";

const TabHeader = (props) =>{
    React.useEffect(() => {
        props.fetchSectors();
    }, [])
    return(
        <div className={ styles.tabHeader }>
            {/* <UserContext.Provider value={...props}> */}
                <h1>TabHeader (Organization, Department , Personal)</h1>
            {/* </UserContext.Provider> */}
          <div className={styles.SetDisplay}>
                
            </div>
        </div> 
    )
};

export default TabHeader;
