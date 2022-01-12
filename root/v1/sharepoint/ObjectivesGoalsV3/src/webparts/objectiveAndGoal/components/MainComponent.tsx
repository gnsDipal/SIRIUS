// DEFAULT IMPORT
import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import TabHeader from '../store/containers/TabHeader';

const MainComponent = (props) => {
const [isContextLoaded, setContextLoad] = useState(false);
   useEffect(() => { 
        init();
   },[]);

    const init=async()=>{
        props.setSPContext(props.webPartContext);
        setContextLoad(true);
        await props.fetchSectors();
        await props.fetchIntervals();
        await props.fetchOrganization();
        await props.fetchDepartment();
        await props.fetchPersonal();
        
    };

    return (
        
        <div>
            <h1>In Main File</h1>
            {isContextLoaded ? <TabHeader /> : ''}
        </div>
    )
}

export default MainComponent
