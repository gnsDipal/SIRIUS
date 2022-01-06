// DEFAULT IMPORT
import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import TabHeader from '../store/containers/TabHeader';

const Main = (props) => {

   useEffect(() => { 
        init();
   },[]);

   const init=()=>{
   
    };
   
    return (
        <div>
            <h1>In Main File</h1>
            <TabHeader />
        </div>
    )
}

export default Main
