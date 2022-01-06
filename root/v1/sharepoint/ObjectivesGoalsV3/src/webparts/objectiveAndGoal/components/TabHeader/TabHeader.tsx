import * as React from "react";
import { useContext } from "react";
import styles from './TabHeader.module.scss';
import { ITabHeaderProps } from './ITabHeaderProps';
import { connect } from "react-redux";
import { SetAppData } from "../../store/action/Action";
import { UserContext } from "../Main";
 debugger;

const TabHeader = (props) =>{
    console.log("TabHeader",props);
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
// const mapStateToProps = (state) =>{
//     return{
//         appDataStruct: state.appData
//     }
// }

// const mapDispatcherToProps = (dispatcher) => {
//     return{
//         setAppData: () => dispatcher(SetAppData())
//     }
// }
export default TabHeader;
