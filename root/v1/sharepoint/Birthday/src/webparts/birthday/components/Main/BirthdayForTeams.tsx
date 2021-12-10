import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { DefaultButton, Dropdown, IDropdownOption, Icon, TooltipHost, Stack } from '@fluentui/react';
import { UserContext } from '../Main/Main';
import { IBirthday} from '../../../../Models/IBirthday';
import { IAnniversary } from '../../../../Models/IAnniversary';
import BirthdayUsers from '../Home/Birthday/BirthdayUsers';
import AnniversaryUsers from '../Home/Anniversary/AnniversaryUsers';
import styles from '../Birthday.module.scss';
import SPBirthdayAnniversaryServiceData from '../../../../services/SPBirthdayAnniversaryServiceData';

initializeIcons();
const MyBirthdayIcon = () => <Icon iconName="BirthdayCake" className = {styles.birthdayIcon} />;
const TeamsSettingsIcon = () => <Icon iconName="Settings" />
const Help = () => <Icon iconName="Help" />

let spBirthAnniServiceData:SPBirthdayAnniversaryServiceData = undefined;
const stackTokens = { childrenGap: 50  };

const CategoryOptions: IDropdownOption[] = [  
    { key: 'all', text: 'All' },
    { key: 'dept', text: 'Department' } 
];

const BirthdayForTeams = ()=> {
    const mainContext = useContext(UserContext);
    const[ BUsers, setBUsers ] = useState<IBirthday[]>([]);
    const[ AUsers, setAUsers ] = useState<IAnniversary[]>([]);  
    const[ count, setCount ] = useState<number>(0);  
    const[ bgColorBirthday, setBgColorBirthday ] = useState<string>("rgb(0,120,212)");
    const[ bgColorAnniversary, setBgColorAnniversary ] = useState<string>("white");
    const[ colorBirthday,setColorBirthday ] = useState<string>("white");
    const[ colorAnniversary, setColorAnniversary ] = useState<string>("black");
    const[ loading,setLoading ] = useState<boolean>(false);
    const[ errorMessage, setErrorMessage ] = useState<string>(null);
    const[ isSettingsPanelOpen, setIsSettingsPanelOpen ] = useState<boolean>(false);
    const[ datasource, setDatasource ] = useState<string>("");    
    const[ selectedCategory, setSelectedCategory ] = useState<string>("All");
    const[ IsTeamsIcon, setIsTeamsIcon ] = useState<boolean>(false);
    const[ ExternalAPI, setExternalAPI ] = useState<string>("");
    useEffect(() => {         
      init();              
    },[]);

    const init = async() => {
        spBirthAnniServiceData = new SPBirthdayAnniversaryServiceData(mainContext.webPartContext);
        loadSettingsForTeams();
        checkIfTeamExist();
    }

    //Get the setting details if app is hosted in Teams
    const loadSettingsForTeams = async() => {
        spBirthAnniServiceData.getTeamsSettingData()
        .then((res:any)=> {
            if(res.value.length > 0)
            {
              let start: number = res.value[0].Settings.indexOf(":");        
              let end: number = res.value[0].Settings.indexOf("}");
              let teamsDataSource = res.value[0].Settings.substring(start + 2, end - 1);
              setDatasource(teamsDataSource);
              setIsTeamsIcon(res.value[0].IsTeamsIcon);
              setExternalAPI(res.value[0].ExternalAPI);
            }
            else
            {
              setDatasource("Azure");
            }
          }, (error: any): void => {      
            console.log(error);
          }) 
    }

    //create team tab for admin to do the initial level settings
    const checkIfTeamExist = async() => {
        spBirthAnniServiceData.getTocheckIfTeamExist();        
    }

    return(
        <div>test</div>
    )
}

export default BirthdayForTeams