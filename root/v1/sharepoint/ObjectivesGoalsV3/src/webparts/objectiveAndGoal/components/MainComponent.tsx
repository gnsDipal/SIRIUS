// DEFAULT IMPORT
import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import TabHeader from '../store/containers/TabHeader';

const MainComponent = (props) => {

   useEffect(() => { 
        init();
   },[props.SPContext]);

    const init=()=>{
        debugger;
        props.setSPContext(props.webPartContext);
        console.log("context : " + props.SPContext);
    };
   
    // let component = null;
    // if(JSON.stringify(props.SPContext) !== JSON.stringify({})) {
    //     component = <TabHeader />
    // } else {
    //     component = null;
    // }
    return (
        
        <div>
            <h1>In Main File</h1>
            {/* {component} */}
            <TabHeader />
        </div>
    )
}

export default MainComponent
