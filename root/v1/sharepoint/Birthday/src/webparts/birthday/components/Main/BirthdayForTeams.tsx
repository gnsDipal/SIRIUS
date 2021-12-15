import * as React from 'react';
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
import * as strings from 'BirthdayWebPartStrings';

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
    const mainContext = React.useContext(UserContext);
    const[ BUsers, setBUsers ] = React.useState<IBirthday[]>([]);
    const[ AUsers, setAUsers ] = React.useState<IAnniversary[]>([]);  
    const[ count, setCount ] = React.useState<number>(0);  
    const[ bgColorBirthday, setBgColorBirthday ] = React.useState<string>("rgb(0,120,212)");
    const[ bgColorAnniversary, setBgColorAnniversary ] = React.useState<string>("white");
    const[ colorBirthday,setColorBirthday ] = React.useState<string>("white");
    const[ colorAnniversary, setColorAnniversary ] = React.useState<string>("black");
    const[ StartDate, setStartDate ] = React.useState<string>(null);
    const[ EndDate, setEndDate ] = React.useState<string>(null);
    const[ isSettingsPanelOpen, setIsSettingsPanelOpen ] = React.useState<boolean>(false);
    const[ datasource, setDatasource ] = React.useState<string>("");    
    const[ selectedCategory, setSelectedCategory ] = React.useState<string>("All");
    const[ IsTeamsIcon, setIsTeamsIcon ] = React.useState<boolean>(false);
    const[ ExternalAPI, setExternalAPI ] = React.useState<string>("");
    React.useEffect(() => {
        init();             
    },[]);

    const init = async() => {
        spBirthAnniServiceData = new SPBirthdayAnniversaryServiceData(mainContext.webPartContext);
        loadSettingsForTeams();
    }

    //Get the setting details if app is hosted in Teams
    const loadSettingsForTeams = async() => {
        spBirthAnniServiceData.getTeamsSettingData()
        .then((res:any)=> {
            if(res.value.length > 0){
              let start: number = res.value[0].Settings.indexOf(":");        
              let end: number = res.value[0].Settings.indexOf("}");
              let teamsDataSource = res.value[0].Settings.substring(start + 2, end - 1);
              setDatasource(teamsDataSource);
              setIsTeamsIcon(res.value[0].IsTeamsIcon);
              setExternalAPI(res.value[0].ExternalAPI);
            }
            else
              setDatasource("Azure");
              CheckBirthAnniDataSourceForTeams(datasource);  
          }, (error: any): void => {      
            console.log(error);
          }) 
    }   

    const CheckBirthAnniDataSourceForTeams = async(dataSourceName: string) => {
      {(dataSourceName === 'Azure' && (count === 1 || count === 0)) &&
        LoadBirthdayDetails();
      }
      {(dataSourceName === 'Azure' &&  count === 2) &&
          LoadAnniversaryDetails();
      }
      {dataSourceName === 'Internal' && 
        LoadInternalDetails();
      }
      {dataSourceName === 'API' && 
        GetThirdPartyBirthdayAPI();
      }
    }

    //Load birthday details of all the users from Azure
    const LoadBirthdayDetails = async() => {
      await CountStartAndEndDates();
      spBirthAnniServiceData.getBirthdayFromAzure(StartDate,EndDate)
      .then((res) => {
          if(res.length > 0){
              if(selectedCategory === "Department")
                  GetDeptwiseDataForBirthday(res);
              else{
                  res = SortBirthday(res);
                  setBUsers(res);
              }
          }
      },(error: any): void => {      
          console.log(error);
      });
  }

      //count the start date and end date for current month
      const CountStartAndEndDates = () => {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;         
        let year = newDate.getFullYear();      
        let days: number = CountDays(month, year);        
        let startDate: string; 
        let endDate : string;

        if(month < 10){
          startDate  = "2000-0" + month + "-01";
          endDate = "2000-0" + month + "-" + days;
        }
        else{
          startDate  = "2000-" + month + "-01";
          endDate  = "2000-" + month + "-" + days;
        }    
        setStartDate(startDate);
        setEndDate(endDate);       
    }

    //get number of days for current month
    const CountDays = (month:number, year:number) => {
        return new Date(year, month, 0).getDate();
    }

    //get the birthday data for the users who belong to logged in users department
    const GetDeptwiseDataForBirthday = async(people: IBirthday[]) => {
        let deptPeople: IBirthday[] = [];
        let azureDepartment: string;
        let userEmail = mainContext.webPartContext.pageContext.user.email;
        for(let i=0; i<people.length; ++i){
            if(people[i].email === userEmail){
                azureDepartment = people[i].department;
                //return;
            }
        }
        for(let j=0; j<people.length; ++j){
            if(people[j].department === azureDepartment)            
                deptPeople.push(people[j]);            
        }
        deptPeople = SortBirthday(deptPeople);
        setBUsers(deptPeople);        
    }

    //sort the birthday data according to birthdate
    const SortBirthday = (deptPeople: IBirthday[]) => {
        return deptPeople.sort((a, b) => {
            if(a.birthDate > b.birthDate)
              return 1;
            if(a.birthDate < b.birthDate)
              return -1;            
            return 0;
        });
    }

    //Load anniversary details of all the users from Azure
    const LoadAnniversaryDetails = async() => {
      spBirthAnniServiceData.getAnniversaryFromAzure()
      .then((res) => {
          if(res.length > 0){
              let currentMonthPeople = GetAnniversaryForSorting(res);
              if(selectedCategory === "Department")
                  GetDeptwiseDataForAnniversary(currentMonthPeople);
              else{
                  let currentMonthPeopleFinal = SortAnniversary(currentMonthPeople);
                  setAUsers(currentMonthPeopleFinal);
              }
          }
      },(error: any): void => {      
            console.log(error);
      });
  }
  
  //get anniversary users for current month only
  const GetAnniversaryForSorting = (people: IAnniversary[]) => {
      let currentMonth: number = new Date().getMonth() + 1;
      let hmonth: number; 
      let hday: number; 
      let hireDate: string;
      let currentMonthPeople: IAnniversary[] = [];
      for(let i: number = 0; i<people.length; ++i)
      {    
          hday = new Date(people[i].hireDate).getDate();       
          hmonth = new Date(people[i].hireDate).getMonth() + 1;
          if(hmonth == currentMonth)
          {
              hireDate = hmonth < 10 ? hday < 10 ? '2000-0' + hmonth + '-0' + hday : '2000-0' + hmonth + '-' + hday : hday < 10 ? '2000-' + hmonth + '-0' + hday : '2000-' + hmonth + '-' + hday;
              people[i].hireDate = hireDate;               
              currentMonthPeople.push(people[i]);
          }            
      }
      return currentMonthPeople;
  }

  //get the anniversary data for the users who belong to logged in users department
  const GetDeptwiseDataForAnniversary = async(people: IAnniversary[]) => {
      let deptPeople: IAnniversary[] = [];
      let azureDepartment: string;
      let userEmail = mainContext.webPartContext.pageContext.user.email;
      for(let i=0; i<people.length; ++i){
          if(people[i].email === userEmail){
              azureDepartment = people[i].department;
              //return;
          }
      }
      for(let j=0; j<people.length; ++j){
          if(people[j].department === azureDepartment)            
              deptPeople.push(people[j]);            
      }
      deptPeople = SortAnniversary(deptPeople);
      setAUsers(deptPeople);        
  }

  //sort the anniversary data according to hiredate
  const SortAnniversary = (deptPeople: IAnniversary[]) => {
      return deptPeople.sort((a, b) => {
          if(a.hireDate > b.hireDate)
            return 1;
          if(a.hireDate < b.hireDate)
            return -1;            
          return 0;
      });
  }

  //get the birthday/anniversary details from the internal SharePoint list
  const LoadInternalDetails = async() => {
      spBirthAnniServiceData.getInternalDetails()
      .then((res:any) => {
          if(count === 0 || count === 1){
              let people:IBirthday[] = res.value;                
              if(people.length > 0){
                  people = getPhotoURL(people);
                  let currentMonthPeople = GetBirthdayForSorting(people);
                  if(selectedCategory === "Department")                    
                      GetDeptwiseDataForBirthday(currentMonthPeople);                    
                  else{
                      let currentMonthPeopleFinal = SortBirthday(currentMonthPeople);
                      setBUsers(currentMonthPeopleFinal);
                  }
              }
          }
          if(count === 2){
              let people:IAnniversary[] = res.value; 
              if(people.length > 0){
              people = getPhotoURL(people);
              let currentMonthPeople = GetAnniversaryForSorting(people);
              if(selectedCategory === "Department")
                  GetDeptwiseDataForAnniversary(currentMonthPeople);
              else{
                  let currentMonthPeopleFinal = SortAnniversary(currentMonthPeople);
                  setAUsers(currentMonthPeopleFinal);
              }
          }
        }
      },(error: any): void => {      
            console.log(error);
      })
  }

  //get the photo url for the user having birthday/anniversary in current month
  const getPhotoURL = (people) => {
      let siteURL: string = mainContext.webPartContext.pageContext.web.absoluteUrl;
      let userphotourl: string = siteURL.substring(0,siteURL.search("/sites"));
      for(let i: number = 0; i<people.length; ++i)
      {     
          let imageURL: string = `${userphotourl}${"/_layouts/15/userphoto.aspx?size=S&accountname=" + people[i].email}`;
          people[i].photoUrl = imageURL;
      }
      return people;
  }

  //get birthday users for current month only
  const GetBirthdayForSorting = (people: IBirthday[]) => {
      let currentMonth: number = new Date().getMonth() + 1;
      let hmonth: number; 
      let hday: number; 
      let hireDate: string;
      let currentMonthPeople: IBirthday[] = [];
      for(let i: number = 0; i<people.length; ++i)
      {    
          hday = new Date(people[i].birthDate).getDate();       
          hmonth = new Date(people[i].birthDate).getMonth() + 1;
          if(hmonth == currentMonth)
          {
              hireDate = hmonth < 10 ? hday < 10 ? '2000-0' + hmonth + '-0' + hday : '2000-0' + hmonth + '-' + hday : hday < 10 ? '2000-' + hmonth + '-0' + hday : '2000-' + hmonth + '-' + hday;
              people[i].birthDate = hireDate;               
              currentMonthPeople.push(people[i]);
          }            
      }
      return currentMonthPeople;
  }

  //get the birthday/anniversary details using third party API
  const GetThirdPartyBirthdayAPI = async() => {
      let query: string = mainContext.externalAPI;
      spBirthAnniServiceData.getDataUsingThirdPartyAPI(query)
      .then((res:any)=>{
          if(count === 0 || count === 1) {
              let people:IBirthday[] = res;                 
              if(people.length > 0){
                  let currentMonthPeople = GetBirthdayForSorting(people);
                  if(selectedCategory === "Department")
                      GetDeptwiseDataForBirthday(currentMonthPeople);
                  else{
                      let currentMonthPeopleFinal = SortBirthday(currentMonthPeople);
                      setBUsers(currentMonthPeopleFinal);
                  }
              }
          }
          if(count === 2){
              let people:IAnniversary[] = res;            
              if(people.length > 0){
                  let currentMonthPeople = GetAnniversaryForSorting(people);
                  if(selectedCategory === "Department")
                      GetDeptwiseDataForAnniversary(currentMonthPeople);
                  else{
                      let currentMonthPeopleFinal = SortAnniversary(currentMonthPeople);
                      setAUsers(currentMonthPeopleFinal);
                  }
              }
          }
      }, (error: any): void => { 
        console.log(error); 
      })
  }

  //User clicks on Birthday tab
  const BirthdayClicked = async(dataSourceName) => {
    setBgColorBirthday("rgb(0,120,212)");
    setBgColorAnniversary("white");
    setColorBirthday("white");
    setColorAnniversary("black")
    CheckBirthAnniDataSourceForTeams(dataSourceName);
}

//User clicks on Anniversary tab
const AnniversaryClicked = async(dataSourceName) => {
setBgColorBirthday("white");
setBgColorAnniversary("rgb(0,120,212)");
setColorBirthday("black");
setColorAnniversary("white");
CheckBirthAnniDataSourceForTeams(dataSourceName);  
}

const onChangeDeptCategoryHandle = async(selectedCategory:any) => {
    setSelectedCategory(selectedCategory.text);    
    CheckBirthAnniDataSourceForTeams(datasource);
} 

const handleSettingsPanel = async() => {
  setIsSettingsPanelOpen(!isSettingsPanelOpen);
}

    return(
      <div className={styles.birthday} >
      <div className={ styles.container }>
        <div className={styles.description}>                        
          <h1 style={{margin:'0', float:'left'}}><MyBirthdayIcon/>{strings.webpartHeading}</h1> 
          <div onClick={handleSettingsPanel} className={styles.teamsSettings}>
              <TooltipHost content={strings.configureContent}><TeamsSettingsIcon /></TooltipHost>
          </div >          
          
          {/* {isSettingsPanelOpen &&
            <SettingsPanel webPartContext={this.props.webPartContext} onClosePanel={handleSettingsPanel} />
          } */}
        </div>          
        <br></br>
        <div className={styles.SetDisplay}>                                                             
            <div><Link to="/birthdayusers"><DefaultButton className={styles.birthTabBtn} style={{backgroundColor:bgColorBirthday, color:colorBirthday}} onClick={BirthdayClicked}><h3>{strings.birthdayBtnText}</h3></DefaultButton></Link></div>                                                               
            <div><Link to="/anniversaryusers"><DefaultButton className={styles.birthTabBtn} style={{backgroundColor:bgColorAnniversary, color:colorAnniversary}} onClick={AnniversaryClicked}><h3>{strings.anniversaryBtnText}</h3></DefaultButton></Link></div>                    
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
        <div>
            <Switch>
                <Route exact path="/birthdayusers" component={()=><BirthdayUsers webPartContext={mainContext.webPartContext} externalAPI={ExternalAPI} IsTeamsIcon={IsTeamsIcon} dataSource={datasource} BUsers={BUsers} />}></Route>
                <Route exact path="/anniversaryusers" component={()=><AnniversaryUsers webPartContext={mainContext.webPartContext} externalAPI={ExternalAPI} IsTeamsIcon={IsTeamsIcon} dataSource={datasource} AUsers={AUsers} />}></Route>
                <Route exact path="">
                    <div>
                        <BirthdayUsers webPartContext={mainContext.webPartContext} externalAPI={ExternalAPI} IsTeamsIcon={IsTeamsIcon} dataSource={datasource} BUsers={BUsers} />
                    </div>
                </Route>
            </Switch>
        </div>        
      </div>        
    </div>
    )
}

export default BirthdayForTeams