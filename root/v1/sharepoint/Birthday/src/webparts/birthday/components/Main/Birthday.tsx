import * as React from 'react';
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { DefaultButton, Dropdown, IDropdownOption, Icon, TooltipHost, Stack } from '@fluentui/react';
import { UserContext } from '../Main/Main';
import { IBirthday} from '../../../../Models/IBirthday';
import { IAnniversary } from '../../../../Models/IAnniversary';
import BirthdayUsers from '../Home/Birthday/BirthdayUsers';
import AnniversaryUsers from '../Home/Anniversary/AnniversaryUsers';
import styles from '../Birthday.module.scss';
import * as strings from 'BirthdayWebPartStrings';
import SPBirthdayAnniversaryServiceData from '../../../../services/SPBirthdayAnniversaryServiceData';

initializeIcons();
debugger;
const Birthday = ()=> {
    let spBirthAnniServiceData:SPBirthdayAnniversaryServiceData = null;
    const mainContext = React.useContext(UserContext);
    const[ BUsers, setBUsers ] = React.useState<IBirthday[]>([]);
    const[ AUsers, setAUsers ] = React.useState<IAnniversary[]>([]);  
    const[ count, setCount ] = React.useState<number>(1);  
    const[ bgColorBirthday, setBgColorBirthday ] = React.useState<string>("rgb(0,120,212)");
    const[ bgColorAnniversary, setBgColorAnniversary ] = React.useState<string>("white");
    const[ colorBirthday,setColorBirthday ] = React.useState<string>("white");
    const[ colorAnniversary, setColorAnniversary ] = React.useState<string>("black"); 
    const[ selectedCategory, setSelectedCategory ] = React.useState<IDropdownOption>({key: 'all', text: 'All'});

    const MyBirthdayIcon = () => <Icon iconName="BirthdayCake" className = {styles.birthdayIcon} />;
    const Help = () => <Icon iconName="Help" />    
    const stackTokens = { childrenGap: 50  };
    const CategoryOptions: IDropdownOption[] = [  
        { key: 'all', text: 'All' },
        { key: 'dept', text: 'Department' } 
    ]; 
    spBirthAnniServiceData = new SPBirthdayAnniversaryServiceData(mainContext.webPartContext);  

    React.useEffect(() => {
        init();
    },[ mainContext, selectedCategory]);

    const init = async() => {        
        await CheckBirthAnniversaryDataSource(count);      
    }; 

    //get the department of logged in user from internal sharepoint list
    const getInternalUserDepartment = async():Promise<string> => {
        let userEmail = mainContext.webPartContext.pageContext.user.email;
        let UserDepartment: string = "";
        await spBirthAnniServiceData.getIntUserDepartment(userEmail)
        .then((res: any) => {
            UserDepartment = res[0].department;
        });
        return Promise.resolve(UserDepartment);
    };

    //check the value of dropdown from property pane and call the method accordingly to fetch the user birthday/anniversary data.
    const CheckBirthAnniversaryDataSource = async(counter) => {      
        {(mainContext.dropdown === 'Azure' && counter === 1) &&
            await LoadBirthdayDetails();
        }
        {(mainContext.dropdown === 'Azure' &&  counter === 2) &&
            await LoadAnniversaryDetails();
        }
        {(mainContext.dropdown === 'Internal' &&  counter === 1) &&
            await LoadInternalBirthdayDetails();
        }
        {(mainContext.dropdown === 'Internal'  &&  counter === 2) && 
            await LoadInternalAnniversaryDetails();
        }
        {mainContext.dropdown === 'API' && 
            await GetThirdPartyBirthdayAPI(counter);
        }
    };

    //Load birthday details of all the users from Azure
    const LoadBirthdayDetails = async() => {
        await CountStartAndEndDates();        
    };

    //count the start date and end date for current month
    const CountStartAndEndDates = async() => {
        let newDate = new Date();
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
        await spBirthAnniServiceData.getBirthdayFromAzure(startDate,endDate)
        .then(async(res:any) => {
            if(res.length > 0){
                if(selectedCategory.text === "Department")
                   await GetDeptwiseDataForAzureBirthday(res);
                else{
                    res = SortBirthday(res);
                    setBUsers(res);
                }
            }
        },(error: any): void => {      
            console.log(error);
        });      
    };

    //get number of days for current month
    const CountDays = (month:number, year:number) => {
        return new Date(year, month, 0).getDate();
    };

    const GetDeptwiseDataForAzureBirthday = async(people: IBirthday[]) => {
        let azureUserEmail = mainContext.webPartContext.pageContext.user.email;
        await spBirthAnniServiceData.getAzureUserDepartment(azureUserEmail)
        .then((res: string) => {
            let AzureUserDepartment = res;
            let deptPeople: IBirthday[] = [];
            for(let j= 0; j<people.length; ++j){
                if(people[j].department === AzureUserDepartment)
                    deptPeople.push(people[j]);
            }
            let finalUsers = SortBirthday(deptPeople);
            setBUsers(finalUsers); 
        })
    };

    //get the external birthday data for the users who belong to logged in users department
    const GetDeptwiseDataForBirthday = async(people: IBirthday[]) => {
        let deptPeople: IBirthday[] = [];
        let azureDepartment: string;
        let userEmail = mainContext.webPartContext.pageContext.user.email;
        for(let i=0; i<people.length; ++i){
            if(people[i].email === userEmail){
                azureDepartment = people[i].department;
            }
        }
        for(let j=0; j<people.length; ++j){
            if(people[j].department === azureDepartment)            
                deptPeople.push(people[j]);            
        }
        let currentMonthPeople = GetBirthdayForSorting(deptPeople);
        let finalPeople = await SortBirthday(currentMonthPeople);
        setBUsers(finalPeople);        
    };

    //sort the birthday data according to birthdate
    const SortBirthday = (deptPeople: IBirthday[]) => {
        return deptPeople.sort((a, b) => {
            if(a.birthDate > b.birthDate)
              return 1;
            if(a.birthDate < b.birthDate)
              return -1;            
            return 0;
        });
    };

    //Load anniversary details of all the users from Azure
    const LoadAnniversaryDetails = async() => {        
        await spBirthAnniServiceData.getAnniversaryFromAzure()
        .then(async(res:any) => {
            if(res.length > 0){                
                if(selectedCategory.text === "Department")
                    await GetDeptwiseDataForAnniversary(res)
                    .then((result:IAnniversary[])=>{
                        let currentMonthPeople = GetAnniversaryForSorting(result);
                        let currentMonthPeopleFinal = SortAnniversary(currentMonthPeople);
                        setAUsers(currentMonthPeopleFinal);
                    })
                else{
                    let currentMonthPeople = GetAnniversaryForSorting(res);
                    let currentMonthPeopleFinal = SortAnniversary(currentMonthPeople);
                    setAUsers(currentMonthPeopleFinal);
                }
            }
        },(error: any): void => {      
            console.log(error);
        });        
    };
    
    //get anniversary users for current month only
    const GetAnniversaryForSorting = (people: IAnniversary[]) => {
        let currentMonth: number = new Date().getMonth() + 1;
        let hmonth: number; 
        let hday: number; 
        let hireDate: string;
        let currentMonthPeople: IAnniversary[] = [];
        for(let i: number = 0; i<people.length; ++i){    
            hday = new Date(people[i].hireDate).getDate();       
            hmonth = new Date(people[i].hireDate).getMonth() + 1;
            if(hmonth == currentMonth){
                hireDate = hmonth < 10 ? hday < 10 ? '2000-0' + hmonth + '-0' + hday : '2000-0' + hmonth + '-' + hday : hday < 10 ? '2000-' + hmonth + '-0' + hday : '2000-' + hmonth + '-' + hday;
                people[i].hireDate = hireDate;               
                currentMonthPeople.push(people[i]);
            }            
        }
        return currentMonthPeople;
    };

    //get the azure and external anniversary data for the users who belong to logged in users department
    const GetDeptwiseDataForAnniversary = async(people: IAnniversary[]):Promise<IAnniversary[]> => {
        let deptPeople: IAnniversary[] = [];
        let userDepartment: string;
        let userEmail = mainContext.webPartContext.pageContext.user.email;
        for(let i=0; i<people.length; ++i){
            if(people[i].email === userEmail)
                userDepartment = people[i].department;
        }
        for(let j=0; j<people.length; ++j){
            if(people[j].department === userDepartment)            
                deptPeople.push(people[j]);            
        }
        return Promise.resolve(deptPeople);
    };

    //sort the anniversary data according to hiredate
    const SortAnniversary = (deptPeople: IAnniversary[]) => {
        return deptPeople.sort((a, b) => {
            if(a.hireDate > b.hireDate)
              return 1;
            if(a.hireDate < b.hireDate)
              return -1;            
            return 0;
        });
    };

    //get the birthday for current month from the internal SharePoint list
    const LoadInternalBirthdayDetails = async() => {
        let currentMonth: number = new Date().getMonth() + 1;        
        await spBirthAnniServiceData.getInternalBirthdayDetails(currentMonth)
        .then((res:any) => {
            let people:IBirthday[] = res;            
            if(people.length > 0){
                people = getPhotoURL(people);
                if(selectedCategory.text === "Department")
                    GetDeptwiseDataForIntBirthday(people);
                else{
                    let currentMonthPeople = SortBirthday(people);                    
                    setBUsers(currentMonthPeople);
                }
            }                        
        },(error: any): void => {      
            console.log(error);
        })        
    };

    //Get the anniversary for current month from the internal sharepoint list
    const LoadInternalAnniversaryDetails = async() => {
        let currentMonth: number = new Date().getMonth() + 1;
        await spBirthAnniServiceData.getInternalAnniversaryDetails(currentMonth)
        .then((res:any) => {
            let people:IAnniversary[] = res;
            if(people.length > 0){
                people = getPhotoURL(people);
                if(selectedCategory.text === "Department")
                    GetDeptwiseDataForIntAnniversary(people);
                else{
                    let currentMonthPeople = SortAnniversary(people);                    
                    setAUsers(currentMonthPeople);
                }
            }
        },(error: any): void => {      
            console.log(error);
        })
    };

    //Get the departmentwise data for birthday
    const GetDeptwiseDataForIntBirthday = async(people: IBirthday[]) => {        
        let deptPeople: IBirthday[] = [];
        await getInternalUserDepartment()
        .then((IntUserDepartment: string) =>{
            for(let j= 0; j<people.length; ++j){
                if(people[j].department === IntUserDepartment)
                    deptPeople.push(people[j]);
            }
            let finalUsers = SortBirthday(deptPeople);
            setBUsers(finalUsers);
        });               
    };

    //Get the departmentwise data for anniversary
    const GetDeptwiseDataForIntAnniversary = async(people: IAnniversary[]) => {        
        let deptPeople: IAnniversary[] = [];
        await getInternalUserDepartment()
        .then((IntUserDepartment: string) =>{
            for(let j= 0; j<people.length; ++j){
                if(people[j].department === IntUserDepartment)
                    deptPeople.push(people[j]);
            }
            let finalUsers = SortAnniversary(deptPeople);
            setAUsers(finalUsers);
        });              
    };   

    //get the photo url for the user having birthday/anniversary in current month
    const getPhotoURL = (people) => {
        let userphotourl: string = spBirthAnniServiceData.getUserPhotoURL();        
        for(let i: number = 0; i<people.length; ++i){     
            let imageURL: string = `${userphotourl}${"/_layouts/15/userphoto.aspx?size=S&accountname=" + people[i].email}`;
            people[i].photoUrl = imageURL;
        }
        return people;
    };

    //get birthday users for current month only
    const GetBirthdayForSorting = (people: IBirthday[]) => {
        let currentMonth: number = new Date().getMonth() + 1;
        let hmonth: number; 
        let hday: number; 
        let hireDate: string;
        let currentMonthPeople: IBirthday[] = [];
        for(let i: number = 0; i<people.length; ++i){    
            hday = new Date(people[i].birthDate).getDate();       
            hmonth = new Date(people[i].birthDate).getMonth() + 1;
            if(hmonth == currentMonth){
                hireDate = hmonth < 10 ? hday < 10 ? '2000-0' + hmonth + '-0' + hday : '2000-0' + hmonth + '-' + hday : hday < 10 ? '2000-' + hmonth + '-0' + hday : '2000-' + hmonth + '-' + hday;
                people[i].birthDate = hireDate;               
                currentMonthPeople.push(people[i]);
            }            
        }
        return currentMonthPeople;
    };

    //get the birthday/anniversary details using third party API
    const GetThirdPartyBirthdayAPI = async(counter) => {
        await spBirthAnniServiceData.getDataUsingThirdPartyAPI(mainContext.externalAPI)
        .then(async(res:any)=>{
            if(counter === 1) {
                let people:IBirthday[] = res;                 
                if(people.length > 0){                    
                    if(selectedCategory.text === "Department")
                        GetDeptwiseDataForBirthday(people);
                    else{
                        let currentMonthPeople = GetBirthdayForSorting(people);
                        let currentMonthPeopleFinal = SortBirthday(currentMonthPeople);
                        setBUsers(currentMonthPeopleFinal);
                    }
                }
            }
            if(counter === 2){
                let people:IAnniversary[] = res;            
                if(people.length > 0){                    
                    if(selectedCategory.text === "Department"){
                        await GetDeptwiseDataForAnniversary(people)
                        .then((result:IAnniversary[])=>{
                            let currentMonthPeople = GetAnniversaryForSorting(result);
                            let currentMonthPeopleFinal = SortAnniversary(currentMonthPeople);
                            setAUsers(currentMonthPeopleFinal);
                        });
                    }
                    else{
                        let currentMonthPeople = GetAnniversaryForSorting(people);
                        let currentMonthPeopleFinal = SortAnniversary(currentMonthPeople);
                        setAUsers(currentMonthPeopleFinal);
                    }
                }
            }
        }, (error: any): void => { 
            console.log(error); 
        })
    };

    //User clicks on Birthday tab
    const BirthdayClicked = async() => {
        setBgColorBirthday("rgb(0,120,212)");
        setBgColorAnniversary("white");
        setColorBirthday("white");
        setColorAnniversary("black");
        let newcount = 1;
        setCount(newcount);
        await CheckBirthAnniversaryDataSource(newcount);
    };

    //User clicks on Anniversary tab
    const AnniversaryClicked = async() => {
        setBgColorBirthday("white");
        setBgColorAnniversary("rgb(0,120,212)");
        setColorBirthday("black");
        setColorAnniversary("white");
        let newcount = 2;        
        setCount(newcount);
        await CheckBirthAnniversaryDataSource(newcount);  
    };

    const onChangeCategoryHandle = async(Category:IDropdownOption) => {
        setSelectedCategory({key:Category.key, text:Category.text});        
    };  

    return(
        <div className={styles.birthday} >
            <div className={ styles.container }>
                <div className={styles.description}>                        
                    <h1 style={{margin:'0', float:'left'}}><MyBirthdayIcon/>{strings.webpartHeading}</h1> 
                    {/* <div onClick={() => window.open('https://www.google.com', '_blank')} className={styles.helpSettings}>
                        <TooltipHost content={strings.helpContent}><Help /></TooltipHost>
                    </div > */}
                </div>          
                <br></br>
                <div className={styles.SetDisplay}>                                                             
                    <div><DefaultButton className={styles.birthTabBtn} style={{backgroundColor:bgColorBirthday, color:colorBirthday}} onClick={BirthdayClicked}><h3>{strings.birthdayBtnText}</h3></DefaultButton></div>                                                               
                    <div><DefaultButton className={styles.birthTabBtn} style={{backgroundColor:bgColorAnniversary, color:colorAnniversary}} onClick={AnniversaryClicked}><h3>{strings.anniversaryBtnText}</h3></DefaultButton></div>                    
                </div>
                <br></br>
                <div>
                    <Stack tokens={stackTokens}>
                        <Dropdown
                        options={CategoryOptions}                      
                        styles={{ dropdown: { width: '20%' } }}
                        defaultValue={selectedCategory.text}
                        defaultSelectedKey={selectedCategory.key}
                        onChange={(e,selectedCategory)=>onChangeCategoryHandle(selectedCategory)}
                        />
                    </Stack>
                </div>          
                <div>
                    {
                        (count === 1) ? <BirthdayUsers webPartContext={mainContext.webPartContext} externalAPI={mainContext.externalAPI} IsTeamsIcon={mainContext.IsTeamsIcon} dataSource={mainContext.dropdown} BUsers={BUsers} /> : 
                        (count === 2) ? <AnniversaryUsers webPartContext={mainContext.webPartContext} externalAPI={mainContext.externalAPI} IsTeamsIcon={mainContext.IsTeamsIcon} dataSource={mainContext.dropdown} AUsers={AUsers} /> : <BirthdayUsers webPartContext={mainContext.webPartContext} externalAPI={mainContext.externalAPI} IsTeamsIcon={mainContext.IsTeamsIcon} dataSource={mainContext.dropdown} BUsers={BUsers} /> 
                    }             
                </div>                       
            </div>        
        </div>
    );
}
export default Birthday