import * as React from 'react';
import { useEffect, useContext, useState } from 'react';
import { DefaultButton, PrimaryButton, CompoundButton } from '@fluentui/react/lib/Button';

import { Icon } from '@fluentui/react/lib/Icon';
import {BrowserRouter as Router,Switch,Route,HashRouter,Link, useParams, useLocation} from "react-router-dom";
import Main, { UserContext } from '../../Main/Birthday';


const AnniversaryUsers = () => {     
    let loc = useLocation()
    const {Inprocess,dept,Closed} = useParams();
    const [deptPlate,SetdeptPlate] = useState(null);
    const [TotalRaisedData, SetTotalRaisedData] = useState(0); 
    const [InProcessData, SetInProcessData] = useState(0); 
    const [ClosedData, SetClosedData] = useState(0); 

    const mainContext = useContext(UserContext);
    useEffect(() => {           
         init();              
    },[]);

    const init = () => {
      {(mainContext.sdks.microsoftTeams)
        
      }    
    }

    return (
     <div>In Render</div>
    )
}
export default AnniversaryUsers
