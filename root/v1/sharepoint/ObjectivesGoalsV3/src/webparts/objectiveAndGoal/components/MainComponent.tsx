// DEFAULT IMPORT
import * as React from 'react';
import styles from './MainComponent.module.scss';
import { useEffect, useState, useContext } from 'react';
import TabHeader from '../store/containers/TabHeader';
import Goal from '../store/containers/Goal';
import Interval from '../store/containers/Interval'
debugger;
const MainComponent = (props) => {
    const [isContextLoaded, setContextLoad] = useState(false);
    const [sectorSelectedId, setSectorSelectedId] = useState(0);
    const [callInit, setCallInit] = useState(0);

    useEffect(() => {
        const allInit=async()=>{ 
            if(callInit===0)
                await init();
            await handleUpdatingAppData(); 
        } 
        allInit();      
     },[sectorSelectedId]);
    const init=async()=>{
        props.setSPContext(props.webPartContext);
        setContextLoad(true);
        await props.fetchSectors(); 
        setCallInit(1);
    };
    const handleUpdatingAppData = async() =>{
        console.log("Main Component sectorSelectedId =>", sectorSelectedId)
        await props.callUpdateAppData(sectorSelectedId);
    }

    const handleMainSectorTabChange = async(id) => {
        alert("Main Tab Header Id =>"+ id);
        console.log("Main Tab Header Id =>", id);
        setSectorSelectedId(id);        
    };

    return (        
        <div className={styles.mainComponent}>           
            {isContextLoaded &&  
            <div>                                       
                <div>
                    <TabHeader handleMainSectorChange={handleMainSectorTabChange} /> 
                    <div> <Interval /></div>
                    <div> <Goal selectedSectorId = {sectorSelectedId} {...props}/> </div>   
                </div>             
            </div>                                                     
            }
        </div>
    )
}

export default MainComponent
