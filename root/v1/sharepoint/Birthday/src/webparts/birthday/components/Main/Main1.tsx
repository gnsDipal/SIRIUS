import * as React from 'react';
import {BrowserRouter as Router, Switch, Route,HashRouter,Link, useParams} from "react-router-dom";
import { WebPartContext } from '@microsoft/sp-webpart-base';
import styles from '../Birthday.module.scss';
import { IBirthdayProps } from '../IBirthdayProps';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { HttpClient, HttpClientResponse } from "@microsoft/sp-http";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { IBirthday} from '../../../../Models/IBirthday';
import { IAnniversary } from '../../../../Models/IAnniversary';
import { IBirthAnniResults, ICell } from '../../../../Models/IBirthAnniResults';
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Icon } from '@fluentui/react/lib/Icon';
import SettingsPanel from '../SettingsPanel';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { Stack } from '@fluentui/react/lib/Stack';
import { MSGraphClient, MSGraphClientFactory } from '@microsoft/sp-http';
import BirthdayUsers from '../Home/Birthday/BirthdayUsers';
import AnniversaryUsers from '../Home/Anniversary/AnniversaryUsers';
import { useEffect, useContext, useState } from 'react';
import SPBirthdayAnniversaryServiceData from '../../../../services/SPBirthdayAnniversaryServiceData';

export const UserContext = React.createContext(null);

const MyBirthdayIcon = () => <Icon iconName="BirthdayCake" className = {styles.birthdayIcon} />;
const TeamsSettingsIcon = () => <Icon iconName="Settings" />
const Help = () => <Icon iconName="Help" />

let spBirthAnniServiceData:SPBirthdayAnniversaryServiceData = undefined;
const stackTokens = { childrenGap: 50  };
const CategoryOptions: IDropdownOption[] = [  
  { key: 'all', text: 'All' },
  { key: 'dept', text: 'Department' } 
];

const Main = (props) => {
    const[ BUsers, setBUsers ] = useState<IBirthday[]>([]);
    const[ AUsers, setAUsers ] = useState<IAnniversary[]>([]);
    const[ count, setCount ] = useState<number>(0);
    const[ bgColorBirthday, setBgColorBirthday ] = useState<string>("rgb(0,120,212)");
    const[ bgColorAnniversary, setBgColorAnniversary ] = useState<string>("white");
    const[ colorBirthday,setColorBirthday ] = useState<string>("white");
    const[ colorAnniversary, setColorAnniversary ] = useState<string>("black");
    const[ loading,setLoading ] = useState<boolean>(false);
    const[ errorMessage, setErrorMessage ] = useState<string>(null);
    const[ StartDate, setStartDate ] = useState<string>(null);
    const[ EndDate, setEndDate ] = useState<string>(null);
    const[ isSettingsPanelOpen, setIsSettingsPanelOpen ] = useState<boolean>(false);
    const[ datasource, setDatasource ] = useState<string>("");
    const[ selectedCategory, setSelectedCategory ] = useState<string>("All");
    const[ IsTeamsIcon, setIsTeamsIcon ] = useState<boolean>(false);
    const[ ExternalAPI, setExternalAPI ] = useState<string>("");
    useEffect(() => {         
      init();              
    },[]);

    const init = async() => {
      spBirthAnniServiceData = new SPBirthdayAnniversaryServiceData(props.webPartContext);
      if(props.webPartContext.sdks.microsoftTeams)
      {
        //Get the setting details if app is hosted in Teams
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
      else
      {
        CheckBirthdayDataSource();
      }
    } 
    
    //User clicks on Birthday tab
    const BirthdayClicked = async(dataSourceName) => {
      setCount(1);
      setBgColorBirthday("rgb(0,120,212)");
      setBgColorAnniversary("white");
      setColorBirthday("white");
      setColorAnniversary("black")
      if(props.webPartContext.sdks.microsoftTeams)
        CheckBirthdayDataSourceForTeams(dataSourceName);
      else
        CheckBirthdayDataSource();
    }

    //User clicks on Anniversary tab
    const AnniversaryClicked = async(dataSourceName) => {
      setCount(2);
      setBgColorBirthday("white");
      setBgColorAnniversary("rgb(0,120,212)");
      setColorBirthday("black");
      setColorAnniversary("white")
      if(props.webPartContext.sdks.microsoftTeams)
        CheckBirthdayDataSourceForTeams(dataSourceName);
      else
        CheckBirthdayDataSource();  
    }

    //check the value of dropdown in teams from panel and call the method accordingly to fetch the user birthday data.
    const CheckBirthdayDataSourceForTeams = async(dataSourceName: string) => {
      {dataSourceName === 'Azure' && 
        LoadBirthdayDetails();
      }
      {dataSourceName === 'Internal' && 
        LoadInternalDetails();
      }
      {dataSourceName === 'API' && 
        GetThirdPartyBirthdayAPI();
      }
    }

    //check the value of dropdown from property pane and call the method accordingly to fetch the user birthday data.
    const CheckBirthdayDataSource = async() => {      
      {props.dropdown === 'Azure' && 
        LoadBirthdayDetails();
      }
      {props.dropdown === 'Internal' && 
        LoadInternalDetails();
      }
      {props.dropdown === 'API' && 
        GetThirdPartyBirthdayAPI();
      }
    } 
    
    const LoadBirthdayDetails = async() => {

    }

    const LoadInternalDetails = async() => {

    }

    const GetThirdPartyBirthdayAPI = async() => {

    }

    const onChangeDeptCategoryHandle = async(selectedCategory:any) => {

    }

    const setSettingsPanelOpen = async() => {
      setIsSettingsPanelOpen(!isSettingsPanelOpen);
    }

    return (      
        <div className={styles.birthday} >
          <div className={ styles.container }>
            <div className={styles.description}>                        
              <h1 style={{margin:'0', float:'left'}}><MyBirthdayIcon/>Birthday/Anniversary</h1>            
              
              {/* {this.props.webPartContext.sdks.microsoftTeams && 
                <div onClick={() => { this.setIsSettingsPanelOpen(); }} className={styles.teamsSettings}>
                  <TooltipHost content="Configure properties"><TeamsSettingsIcon /></TooltipHost>
                </div >
              }  */}
              <div onClick={() => window.open('https://www.google.com', '_blank')} className={styles.helpSettings}>
                  <TooltipHost content="User Help"><Help /></TooltipHost>
                </div >
              <div onClick={() => setSettingsPanelOpen()} className={styles.teamsSettings}>
                  <TooltipHost content="Configure properties"><TeamsSettingsIcon /></TooltipHost>
                </div >           
              {/* <div className={styles.adminSettings} onClick={() => { this.settings(); }}>
                <TooltipHost content="Admin settings"><AdminSettings /></TooltipHost>
              </div>             */}
              {isSettingsPanelOpen &&
                <SettingsPanel webPartContext={props.webPartContext} onClosePanel={() => setSettingsPanelOpen()} />
              }
            </div>          
            <br></br>
            <div className={styles.SetDisplay}>                                                             
              <div>
                <Link to="/birthday"><DefaultButton className={styles.birthTabBtn} style={{backgroundColor:bgColorBirthday, color:colorBirthday}} onClick={() => BirthdayClicked(datasource)}><h3>Birthday</h3></DefaultButton></Link>
              </div>   
                                                        
              <div>
                <Link to="/anniversary"><DefaultButton className={styles.birthTabBtn} style={{backgroundColor:bgColorAnniversary, color:colorAnniversary}} onClick={() => AnniversaryClicked(datasource)}><h3>Anniversary</h3></DefaultButton></Link>
              </div>                    
            </div>
            <br></br>
            <div>
              <Stack tokens={stackTokens}>
              <Dropdown
                options={CategoryOptions}
                defaultSelectedKey={"all"}
                onChange={(e,selectedCategory) => onChangeDeptCategoryHandle(selectedCategory)}
                styles={{ dropdown: { width: '20%' } }}
              />
              </Stack>
            </div>          
            {  props.webPartContext.sdks.microsoftTeams &&
              ((count === 1) ? <BirthdayUsers /> : 
              (count === 2) ? <AnniversaryUsers /> :  <BirthdayUsers /> )
            }
            {  (!props.webPartContext.sdks.microsoftTeams) &&
              ((count === 1) ? <BirthdayUsers /> : 
              (count === 2) ? <AnniversaryUsers /> :  <BirthdayUsers /> )
            }           
          </div>

          <div>
          <HashRouter>
            <UserContext.Provider value={...props}>
              <Switch>
                <Route exact path="/birthday" component={()=><BirthdayUsers />}/>
                <Route exact path="/anniversary" component={()=><AnniversaryUsers />}/>
                <Route exact path="">
                  <div>
                    <BirthdayUsers/>
                  </div>
                </Route>
              </Switch>
            </UserContext.Provider>
          </HashRouter>
        </div>        
        </div>
      
            
    )
}

export default Main