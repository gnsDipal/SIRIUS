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
    const [sectorSelected, setSectorSelected] = useState("");
    const[ bgColorSelectedTab, setBgColorSelectedTab ] = React.useState<string>("#04ef00");
    const[ colorSelectedTab,setColorSelectedTab ] = React.useState<string>("white");
    const[ bgColorOrganization, setBgColorOrganization ] = React.useState<string>("white");
    const[ bgColorDepartment, setBgColorDepartment ] = React.useState<string>("white");
    const[ bgColorPersonal, setBgColorPersonal ] = React.useState<string>("white");
    const[ colorOrganization,setColorOrganization ] = React.useState<string>("black");
    const[ colorDepartment, setColorDepartment ] = React.useState<string>("black"); 
    const[ colorPersonal, setColorPersonal ] = React.useState<string>("black");

    const HeaderTabClicked = async(selectedTabName) => {
        setSectorSelected(selectedTabName);
        alert("Header Tab Clicked" + selectedTabName);      
        setBgColorOrganization("#04ef00");
        setBgColorDepartment("white");
        setBgColorPersonal("white");
        setColorOrganization("white");
        setColorDepartment("black");
        setColorPersonal("black");
       };
    
    React.useEffect(() => {
        if(props.isSectorFetchComplete){
            setIsSectorAvailable(true);
        }
    }, [props.isSectorFetchComplete])
    return(       
        <div className={ styles.tabHeader }>           
            {/* <UserContext.Provider value={...props}>  */}    
            {/* Testing Display Web Part */}
            { (isSectorAvailable) ?   
                <div className={styles.TabHeaderSetDisplay}>                         
                    <div className={styles.TabHeaderGoalsTabs} >                         
                       { props.sectors.map((t)=>{                
                    return(                                    
                           <DefaultButton className={styles.TabHeaderGoalsTabBtn} onClick={()=>HeaderTabClicked(t.Title)} style={{backgroundColor:bgColorOrganization, color:colorOrganization}}  ><h3> {t.Title} </h3></DefaultButton>                                                                                                                
                           )      
                      })}
                    </div>
                  </div> 
               :
               <div>No Header Found</div>
            }  
            
            {/* TabItem component call */}
            { (isSectorAvailable) && (sectorSelected) &&                                 
                <div>               
                    <TabItem selectedSector = {sectorSelected} {...props} />                                            
                 </div> 
           
            }           
        </div> 
    )
};

export default TabHeader;
