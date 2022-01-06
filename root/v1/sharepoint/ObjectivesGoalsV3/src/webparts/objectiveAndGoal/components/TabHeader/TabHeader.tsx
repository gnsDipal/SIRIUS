import * as React from "react";
import { useContext } from "react";
import styles from './TabHeader.module.scss';
import { ITabHeaderProps } from './ITabHeaderProps';
import { connect } from "react-redux";
import { SetAppData } from "../../store/action/Action";
import { UserContext } from "../Main";
 debugger;
 const mainContext = useContext(UserContext);
const TabHeader = (props:any) =>{
    console.log("TabHeader",props);
    React.useEffect(() => {
        props.setAppData();
        console.log('object');
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
const mapStateToProps = (state) =>{
    return{
        appDataStruct: state.appData
    }
}

const mapDispatcherToProps = (dispatcher) => {
    return{
        setAppData: () => dispatcher(SetAppData(mainContext))
    }
}
export default connect(mapStateToProps,mapDispatcherToProps) (TabHeader)