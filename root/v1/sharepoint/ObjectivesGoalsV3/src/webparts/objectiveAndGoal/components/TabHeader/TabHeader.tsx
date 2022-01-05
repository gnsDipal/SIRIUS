import * as React from "react";
import styles from './TabHeader.module.scss';
import { ITabHeaderProps } from './ITabHeaderProps';
import { connect } from "react-redux";
import { SetAppData } from "../../store/action/Action";
//import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
 debugger;
const TabHeader = (props) =>{
    console.log("TabHeader",props);
    React.useEffect(() => {
        props.setAppData();
    }, [])
    return(
        <div className={ styles.tabHeader }>
            <h1>TabHeader (Organization, Department , Personal)</h1>
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
        setAppData: () => dispatcher(SetAppData())
    }
}
export default connect(mapStateToProps,mapDispatcherToProps) (TabHeader)