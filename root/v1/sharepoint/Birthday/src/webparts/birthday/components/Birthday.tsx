import * as React from 'react';
import styles from './Birthday.module.scss';
import { IBirthdayProps } from './IBirthdayProps';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { HttpClient, HttpClientResponse } from "@microsoft/sp-http";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { IBirthday} from '../../../Models/IBirthday';
import { IAnniversary } from '../../../Models/IAnniversary';
import { IBirthdayState } from './IBirthdayState';
import { IBirthAnniResults, ICell } from '../../../Models/IBirthAnniResults';
import BirthdayUser from './Birthday/BirthdayUser';
import AnniversaryUser  from './Anniversary/AnniversaryUser';
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Icon } from '@fluentui/react/lib/Icon';
import SettingsPanel from './SettingsPanel';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { Dropdown, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { Stack } from '@fluentui/react/lib/Stack';
import { MSGraphClient, MSGraphClientFactory } from '@microsoft/sp-http';

initializeIcons();
const MyBirthdayIcon = () => <Icon iconName="BirthdayCake" className = {styles.birthdayIcon} />;
const TeamsSettingsIcon = () => <Icon iconName="Settings" />
const Help = () => <Icon iconName="Help" />

const stackTokens = { childrenGap: 50  };

const CategoryOptions: IDropdownOption[] = [  
  { key: 'all', text: 'All' },
  { key: 'dept', text: 'Department' } 
];

const headers: HeadersInit = new Headers();
headers.append("accept", "application/json;odata.metadata=none");

debugger;
export default class Birthday extends React.Component<IBirthdayProps, IBirthdayState> {  

  constructor(props: IBirthdayProps){
    super(props);
    this.state = {
      BUsers:[],    
      AUsers:[],
      count : 0,    
      bgColorBirthday:"rgb(0,120,212)",
      bgColorAnniversary: "white",   
      colorBirthday:"white",
      colorAnniversary:"black",    
      loading:false,
      errorMessage:null,
      StartDate:null,
      EndDate:null,
      isSettingsPanelOpen:false,
      datasource:'',
      selectedCategory: 'All',
      IsTeamsIcon: false,
      ExternalAPI: ""      
    }
  }

  componentDidMount() 
  {  
    if(this.props.webPartContext.sdks.microsoftTeams)
    {
      this.loadSettingsForTeams(); 
    } 
    else
    {     
      this.CheckBirthdayDataSource();
    } 
    this.checkIfTeamExist();    
  }

  checkIfTeamExist = async() =>
  {
    await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`me/joinedTeams`)
          .version("beta")
          .get().then((res)=>{
            let teamExist: boolean = false;
            for(let i:number =0; i<res.value.length; ++i)
            {
              if(res.value[i].displayName === "Birthday/Anniversary Admin")
              {
                teamExist = true;
              }
            }
            if(teamExist === false)
              this.createTeam();
          });
      });  
  }

  createTeam = async() =>
  {
    let body: any = {      
        "template@odata.bind": "https://graph.microsoft.com/v1.0/teamsTemplates('standard')",
        "displayName": "Birthday/Anniversary Admin",
        "description": "The team for those in architecture design."       
    };
    
    await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams`)
          .version("v1.0")
          .post(body).then(()=>{
            this.GetTeams();
          });
      });
  }

  GetTeams = async() =>
  {
    await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`me/joinedTeams`)
          .version("beta")
          .get().then((res)=>{
            let teamId: string = "";
            for(let i:number =0; i<res.value.length; ++i)
            {
              if(res.value[i].displayName === "Birthday/Anniversary Admin")
              {
                teamId = res.value[i].id;
              }
            }
            if(teamId !== "")
              this.GetChannelId(teamId);
          });
      }); 
  }

  GetChannelId = async(teamId: string) =>
  {
    await this.props.webPartContext.msGraphClientFactory
      .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams/${teamId}/channels`)
          .version("beta")
          .get().then((res)=>{
            let webURL: string = res.value[0].webUrl;
            console.log("web url: " + webURL);
            let channelId = res.value[0].id;           
            this.createImagesTab(teamId,channelId);
            this.createUsersTab(teamId,channelId);
          });
      });
  }

  private createImagesTab(teamId: string, channelId: string)
  {
    let contentURL = `${this.props.webPartContext.pageContext.web.absoluteUrl}/BirthdayAnniversaryImages/Forms/Thumbnails.aspx`
    let body: any = {      
      "displayName": "BirthdayAnniversaryImages",
      "teamsAppId": null,
      "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
      "configuration": {
          "entityId": null,
          "contentUrl": contentURL,
          "removeUrl": null,
          "websiteUrl": null
        }       
    };
    this.createTab(teamId, channelId, body);
  }

  private createUsersTab(teamId: string, channelId: string)
  {
    let contentURL = `${this.props.webPartContext.pageContext.web.absoluteUrl}/Lists/UserBirthAnniversaryDetails/AllItems.aspx`
    let body: any = {      
      "displayName": "UserBirthAnniversaryDetails",
      "teamsAppId": null,
      "teamsApp@odata.bind": "https://graph.microsoft.com/beta/appCatalogs/teamsApps/2a527703-1f6f-4559-a332-d8a7d288cd88",
      "configuration": {
          "entityId": null,
          "contentUrl": contentURL,
          "removeUrl": null,
          "websiteUrl": null
        }       
    }; 
    this.createTab(teamId, channelId, body);
  }

  createTab = async(teamId: string, channelId: string, body: string) =>
  {
    await this.props.webPartContext.msGraphClientFactory
    .getClient()
      .then((client: MSGraphClient): void => {        
        client
          .api(`teams/${teamId}/channels/${channelId}/tabs`)
          .version("beta")
          .post(body).then(()=>{            
          });
      });
  } 

  loadSettingsForTeams = async() =>
  {
    
    await this.props.webPartContext.spHttpClient        
      .get(`${this.props.webPartContext.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('ConfigurationSettings')/items?$filter=Key eq 'Birthday'`, SPHttpClient.configurations.v1, {
        headers: headers
      })
      .then((result: SPHttpClientResponse) => {          
        return result.json();
      })
      .then((jsonresult): void => {
        console.log(jsonresult);
        if(jsonresult.value.length > 0)
        {
          let start: number = jsonresult.value[0].Settings.indexOf(":");        
          let end: number = jsonresult.value[0].Settings.indexOf("}");
          let teamsDataSource = jsonresult.value[0].Settings.substring(start + 2, end - 1);
          this.setState({
            datasource:teamsDataSource,
            IsTeamsIcon: jsonresult.value[0].IsTeamsIcon,
            ExternalAPI: jsonresult.value[0].ExternalAPI
          });
        } 
        else
        {
          this.setState({
            datasource:'Azure'
          });
        }
        this.CheckBirthdayDataSourceForTeams(this.state.datasource);       
      }, (error: any): void => {      
        console.log(error);
      })
      .catch((error: any): void => {    
        console.log(error);
      }); 
  }

  private CheckBirthdayDataSourceForTeams(dataSource: string)
  {
    {dataSource === 'Azure' && 
      this.LoadBirthdayDetails();
    }
    {dataSource === 'Internal' && 
      this.LoadInternalDetails();
    }
    {dataSource === 'API' && 
      this._getThirdPartyBirthdayAPI();
    }
  }

  private CheckAnniversaryDataSourceForTeams(dataSource: string)
  {
    {dataSource === 'Azure' && 
      this.LoadAnniversaryDetails();
    }
    {dataSource === 'Internal' && 
      this.LoadInternalDetails();
    }
    {dataSource === 'API' && 
      this._getThirdPartyBirthdayAPI();      
    }
  } 

  componentDidUpdate(prevProps: IBirthdayProps) : void
  {
    //check if properties has been changed
    if(this.props !== prevProps)
    {
      if(this.state.count === 1)
        this.CheckBirthdayDataSource();
      else if(this.state.count === 2)
        this.CheckAnniversaryDataSource();
      else
        this.CheckBirthdayDataSource();
    }
  }

  private CheckBirthdayDataSource()
  {
    //check the value of dropdown from propert pane and call the method accordingly to fetch the user data.
    {this.props.dropdown === 'Azure' && 
      this.LoadBirthdayDetails();
    }
    {this.props.dropdown === 'Internal' && 
      this.LoadInternalDetails();
    }
    {this.props.dropdown === 'API' && 
      this._getThirdPartyBirthdayAPI();
    }
  }

  private CheckAnniversaryDataSource()
  {
    {this.props.dropdown === 'Azure' && 
      this.LoadAnniversaryDetails();
    }
    {this.props.dropdown === 'Internal' && 
      this.LoadInternalDetails();
    }
    {this.props.dropdown === 'API' && 
      this._getThirdPartyBirthdayAPI();      
    }
  }

  private _getThirdPartyBirthdayAPI()
  {
    let query: string = "";
    if(this.props.webPartContext.sdks.microsoftTeams)
      query = this.state.ExternalAPI;
    else
      query = this.props.externalAPI;

    //this.props.webPartContext.httpClient.get('https://gnsemplist.azurewebsites.net/Employee', HttpClient.configurations.v1, {
    this.props.webPartContext.httpClient.get(`${query}`, HttpClient.configurations.v1, {
      headers: headers
    })
    .then((response: HttpClientResponse) => {  
      return response.json();  
    })
    .then((jsonresult): void => { 
      if(this.state.count === 0 || this.state.count === 1)
      {
        let people:IBirthday[] = jsonresult;    
        
        if(people.length > 0)
        {
          let currentMonthPeople = this._getBirthdayForSorting(people);
          if(this.state.selectedCategory === "Department")
          {
            this.getDeptwiseDataForBirthday(currentMonthPeople);
          }
          else
          {
            let currentMonthPeopleFinal = this.SortBirthday(currentMonthPeople);
            this.setState({
              loading:false,
              BUsers : currentMonthPeopleFinal,
            })
          }
        }
      }
      if(this.state.count === 2)
      {
        let people:IAnniversary[] = jsonresult;
       
        if(people.length > 0)
        {
          let currentMonthPeople = this._getAnniversaryForSorting(people);
          if(this.state.selectedCategory === "Department")
          {
            this.getDeptwiseDataForAnniversary(currentMonthPeople);
          }
          else
          {
            let currentMonthPeopleFinal = this.SortAnniversary(currentMonthPeople);
            this.setState({
              loading:false,
              AUsers : currentMonthPeopleFinal,
            })
          }
        }
      }
    }, (error: any): void => {      
      this.setState({
        loading: false,
        errorMessage: error
      });
    })
    .catch((error: any): void => {
      this.setState({
        loading: false,
        errorMessage: error
      });
    });
  }
  
  private CountStartAndEndDates (): void {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1; 
    
    let year = newDate.getFullYear();      
    let days: number = this.CountDays(month, year);
    
    let startDate, endDate : string;
    if(month < 10)
    {
      startDate  = "2000-0" + month + "-01";
      endDate = "2000-0" + month + "-" + days;
    }
    else
    {
      startDate  = "2000-" + month + "-01";
      endDate  = "2000-" + month + "-" + days;
    }  

    this.setState({
       StartDate: startDate,
       EndDate: endDate,
     })
   
  }

  private CountDays(month:number, year:number): number {
    return new Date(year, month, 0).getDate();
  }

  private LoadInternalDetails()
  {
    this.props.webPartContext.spHttpClient
        //.get(`${this.props.siteurl}/_vti_bin/listdata.svc/TestUserList?$filter=month(BirthDate) eq ${currentMonth} or month(HireDate) eq ${currentMonth}`, SPHttpClient.configurations.v1, {
        .get(`${this.props.webPartContext.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('UserBirthAnniversaryDetails')/items`, SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((result: SPHttpClientResponse) => {          
          return result.json();
        })
        .then((jsonresult): void => {
          if(this.state.count === 0 || this.state.count === 1)
          {
            let people:IBirthday[] = jsonresult.value; 
            if(people.length > 0)
            {
              people = this.getPhotoURL(people);
              let currentMonthPeople = this._getBirthdayForSorting(people);
              if(this.state.selectedCategory === "Department")
              {
                this.getDeptwiseDataForBirthday(currentMonthPeople);
              }
              else
              {
                let currentMonthPeopleFinal = this.SortBirthday(currentMonthPeople);
                this.setState({
                  loading:false,
                  BUsers : currentMonthPeopleFinal,
                })
              }
            }
          }
          if(this.state.count === 2)
          {
            let people:IAnniversary[] = jsonresult.value; 
            if(people.length > 0)
            {
              people = this.getPhotoURL(people);
              let currentMonthPeople = this._getAnniversaryForSorting(people);
              if(this.state.selectedCategory === "Department")
              {
                this.getDeptwiseDataForAnniversary(currentMonthPeople);
              }
              else
              {
                let currentMonthPeopleFinal = this.SortAnniversary(currentMonthPeople);
                this.setState({
                  loading:false,
                  AUsers : currentMonthPeopleFinal,
                })
              }
            }
          }
        }, (error: any): void => {      
          this.setState({
            loading: false,
            errorMessage: error
          });
      })
      .catch((error: any): void => {    
        this.setState({
          loading: false,
          errorMessage: error
        });
      });
  }

  private getPhotoURL(people)
  {
    let siteURL: string = this.props.webPartContext.pageContext.web.absoluteUrl;
    let userphotourl: string = siteURL.substring(0,siteURL.search("/sites"));
    for(let i: number = 0;i<people.length; ++i)
    {     
      let imageURL: string = `${userphotourl}${"/_layouts/15/userphoto.aspx?size=S&accountname=" + people[i].email}`;
      people[i].photoUrl = imageURL;
    }
    return people;
  }
   
  LoadBirthdayDetails = async () => {

    await this.CountStartAndEndDates();
        
      this.setState({
        loading:true,
        errorMessage:null,       
      });

      this.props.webPartContext.spHttpClient
        .get(`${this.props.webPartContext.pageContext.web.absoluteUrl}/_api/search/query?querytext='*'&sourceid='b09a7990-05ea-4af9-81ef-edfab16c4e31'&rowlimit=500&selectproperties='FirstName,LastName,PreferredName,WorkEmail,PictureURL,Department,RefinableDate00'&refinementfilters='RefinableDate00:range(datetime(${this.state.StartDate}), datetime(${this.state.EndDate}))'`, SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((res: SPHttpClientResponse): Promise<IBirthAnniResults> => {          
          return res.json();
        })
        .then((res: IBirthAnniResults): void => {
          if (res.error) {
            // There was an error loading information about people.
            // Notify the user that loading data is finished and return the
            // error message that occurred
            this.setState({
              loading: false,
              errorMessage: res.error.message,
            });
            return;
          }
          if (res.PrimaryQueryResult.RelevantResults.TotalRows == 0) {
            // No results were found. Notify the user that loading data is finished
            this.setState({
              loading: false
            });
            return;
          }
          
          let siteURL: string = this.props.webPartContext.pageContext.web.absoluteUrl;
          let userphotourl: string = siteURL.substring(0,siteURL.search("/sites"));   
        
          let people: IBirthday[] = res.PrimaryQueryResult.RelevantResults.Table.Rows.map(r => {    return {      

            name: this._getValueFromSearchResult('PreferredName', r.Cells),
            firstName: this._getValueFromSearchResult('FirstName', r.Cells),
            lastName: this._getValueFromSearchResult('LastName', r.Cells),     
            email: this._getValueFromSearchResult('WorkEmail', r.Cells),
            photoUrl: `${userphotourl}${"/_layouts/15/userphoto.aspx?size=S&accountname=" + this._getValueFromSearchResult('WorkEmail', r.Cells)}`,
            birthDate:  this._getValueFromSearchResult('RefinableDate00', r.Cells),
            department: this._getValueFromSearchResult('Department', r.Cells)
          };
      });
      
        if(people.length>0)
        {
          if(this.state.selectedCategory === "Department")
          {
            this.getDeptwiseDataForBirthday(people);
          }
          else
          {
            people = this.SortBirthday(people);      
            this.setState({
              loading:false,
              BUsers : people,
            })
          }          
        }
      }, (error: any): void => {      
      this.setState({
        loading: false,
        errorMessage: error
      });
    })
    .catch((error: any): void => {
      this.setState({
        loading: false,
        errorMessage: error
      });
    });
  }

  private getDeptwiseDataForBirthday(people)
  {
    let deptPeople: IBirthday[] = [];
    let azureDepartment: string;
    let userEmail = this.props.webPartContext.pageContext.user.email;
    for(let i=0; i<people.length; ++i)
    {
      if(people[i].email === userEmail)
      {
        azureDepartment = people[i].department;
        //return;
      }
    }
    for(let j=0; j<people.length; ++j)
    {
      if(people[j].department === azureDepartment)
      {
        deptPeople.push(people[j]);
      }
    }
    deptPeople = this.SortBirthday(deptPeople);
    this.setState({
      loading:false,
      BUsers : deptPeople,
    })
  }

  private getDeptwiseDataForAnniversary(people)
  {
    let deptPeople: IAnniversary[] = [];
    let azureDepartment: string;
    let userEmail = this.props.webPartContext.pageContext.user.email;
    for(let i= 0; i<people.length; ++i)
    {
      if(people[i].email === userEmail)
      {
        azureDepartment = people[i].department;
        //return;
      }
    }
    for(let j= 0; j<people.length; ++j)
    {
      if(people[j].department === azureDepartment)
      {
        deptPeople.push(people[j]);
      }
    }
    deptPeople = this.SortAnniversary(deptPeople);
    this.setState({
      loading:false,
      AUsers : deptPeople,
    })
  }
  
  private SortBirthday(BirthUsers: IBirthday[])
  {
    return BirthUsers.sort((a, b) => {
      if(a.birthDate > b.birthDate)
      {
        return 1;
      }
      if(a.birthDate < b.birthDate)
      {
        return -1;
      }
      return 0;
    });
  }

  private SortAnniversary(AnniUsers: IAnniversary[])
  {
    return AnniUsers.sort((a, b) => {
      if(a.hireDate > b.hireDate)
      {
        return 1;
      }
      if(a.hireDate < b.hireDate)
      {
        return -1;
      }
      return 0;
    });
  }
   
  private BirthdayClicked(dataSource) 
  {
    this.setState({
      count: 1,
      bgColorBirthday:"rgb(0,120,212)",
      bgColorAnniversary:"white",
      colorBirthday:"white",
      colorAnniversary:"black",    
    })
    if(this.props.webPartContext.sdks.microsoftTeams)
      this.CheckBirthdayDataSourceForTeams(dataSource);
    else
      this.CheckBirthdayDataSource();
    
  }

  AnniversaryClicked(dataSource) 
  {
    this.setState({
      count: 2,
      bgColorBirthday:"white",
      bgColorAnniversary:"rgb(0,120,212)",
      colorBirthday:"black",
      colorAnniversary:"white",    
    })
    if(this.props.webPartContext.sdks.microsoftTeams)
      this.CheckAnniversaryDataSourceForTeams(dataSource);
    else
      this.CheckAnniversaryDataSource();    
  }
  
  private _getValueFromSearchResult(key: string, cells: ICell[]): string {
    for (let i: number = 0; i < cells.length; i++) {
      if (cells[i].Key === key) {
        return cells[i].Value;
      }
    }
    return '';
  }   

  LoadAnniversaryDetails = async () => {
    await this.CountStartAndEndDates();
    this.setState({
      loading:true,
      errorMessage:null,
    })
  
    const headers: HeadersInit = new Headers();
    // suppress metadata to minimize the amount of data loaded from SharePoint
    headers.append("accept", "application/json;odata.metadata=none");

      this.props.webPartContext.spHttpClient
        .get(`${this.props.webPartContext.pageContext.web.absoluteUrl}/_api/search/query?querytext='*'&sourceid='b09a7990-05ea-4af9-81ef-edfab16c4e31'&rowlimit=500&selectproperties='FirstName,LastName,PreferredName,WorkEmail,PictureURL,Department,RefinableDate01'`, SPHttpClient.configurations.v1, {
          headers: headers
        })
        .then((res: SPHttpClientResponse): Promise<IBirthAnniResults> => {          
          return res.json();
        })
        .then((res: IBirthAnniResults): void => {
          if (res.error) {
            this.setState({
              loading: false,
              errorMessage: res.error.message,
            });
            return;
          }
          if (res.PrimaryQueryResult.RelevantResults.TotalRows == 0) {
            this.setState({
              loading: false
            });
            return;
          }
          
          let siteURL: string = this.props.webPartContext.pageContext.web.absoluteUrl;
          let userphotourl: string = siteURL.substring(0,siteURL.search("/sites"));   
        
          let people: IAnniversary[] = res.PrimaryQueryResult.RelevantResults.Table.Rows.map(r => {    return {      

            name: this._getValueFromSearchResult('PreferredName', r.Cells),
            firstName: this._getValueFromSearchResult('FirstName', r.Cells),
            lastName: this._getValueFromSearchResult('LastName', r.Cells),     
            email: this._getValueFromSearchResult('WorkEmail', r.Cells),
            photoUrl: `${userphotourl}${"/_layouts/15/userphoto.aspx?size=S&accountname=" + this._getValueFromSearchResult('WorkEmail', r.Cells)}`,            
            hireDate: this._getValueFromSearchResult('RefinableDate01', r.Cells),
            department: this._getValueFromSearchResult('Department', r.Cells)
          };
        });
    
        if(people.length>0)
        {
          let currentMonthPeople = this._getAnniversaryForSorting(people);
          if(this.state.selectedCategory === "Department")
          {
            this.getDeptwiseDataForAnniversary(currentMonthPeople);
          }
          else
          {
            let currentMonthPeopleFinal = this.SortAnniversary(currentMonthPeople);
            this.setState({
              loading:false,
              AUsers : currentMonthPeopleFinal,
            })
          } 
        }
      }, (error: any): void => {
      // An error has occurred while loading the data. Notify the user
      // that loading data is finished and return the error message.
      this.setState({
        loading: false,
        errorMessage: error
      });
    })
    .catch((error: any): void => {
    // An exception has occurred while loading the data. Notify the user
    // that loading data is finished and return the exception.
      this.setState({
        loading: false,
        errorMessage: error
      });
    });
  } 

  private _getAnniversaryForSorting(people: IAnniversary[])
  {
    let currentMonth = new Date().getMonth() + 1;
    let hmonth, hday, hireDate;
    let currentMonthPeople: IAnniversary[] = [];
    for(let i=0; i<people.length;++i)
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

  private setIsSettingsPanelOpen()
  {
    this.setState({
      isSettingsPanelOpen: !this.state.isSettingsPanelOpen
    });
  }

  private _getBirthdayForSorting(people: IBirthday[])
  {
    let currentMonth = new Date().getMonth() + 1;
    let bmonth, bday, birthDate;
    let currentMonthPeople: IBirthday[] = [];
    for(let i=0; i<people.length;++i)
    {    
      bday = new Date(people[i].birthDate).getDate();       
      bmonth = new Date(people[i].birthDate).getMonth() + 1;
      if(bmonth == currentMonth)
      {
        birthDate = bmonth < 10 ? bday < 10 ? '2000-0' + bmonth + '-0' + bday : '2000-0' + bmonth + '-' + bday : bday < 10 ? '2000-' + bmonth + '-0' + bday : '2000-' + bmonth + '-' + bday;
        people[i].birthDate = birthDate;               
        currentMonthPeople.push(people[i]);
      }            
    } 
    return currentMonthPeople;
   
  }

  async onChangeDeptCategoryHandle (selectedCategory:any) {
     
     await this.setState({
      selectedCategory: selectedCategory.text
    });
    if(this.props.webPartContext.sdks.microsoftTeams)
    {
      if(this.state.count === 0 || this.state.count === 1)
      {
        this.CheckBirthdayDataSourceForTeams(this.state.datasource);
      } 
      else{
        this.CheckAnniversaryDataSourceForTeams(this.state.datasource);
      }      
    }
    else
    {
      if(this.state.count === 0 || this.state.count === 1)
      {
        this.CheckBirthdayDataSource();
      } 
      else{
        this.CheckAnniversaryDataSource();
      } 
    }
  }

  private HelpOpen()
  {
    alert("In Help");
  }

  public render(): React.ReactElement<IBirthdayProps> {    
    return(
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
            <div onClick={() => { this.setIsSettingsPanelOpen(); }} className={styles.teamsSettings}>
                <TooltipHost content="Configure properties"><TeamsSettingsIcon /></TooltipHost>
              </div >           
            {/* <div className={styles.adminSettings} onClick={() => { this.settings(); }}>
              <TooltipHost content="Admin settings"><AdminSettings /></TooltipHost>
            </div>             */}
            {this.state.isSettingsPanelOpen &&
              <SettingsPanel webPartContext={this.props.webPartContext} onClosePanel={() => { this.setIsSettingsPanelOpen();}} />
            }
          </div>          
          <br></br>
          <div className={styles.SetDisplay}>                                                             
            <div><DefaultButton className={styles.birthTabBtn} style={{backgroundColor:this.state.bgColorBirthday, color:this.state.colorBirthday}} onClick={() => this.BirthdayClicked(this.state.datasource)}><h3>Birthday</h3></DefaultButton></div>   
                                                      
            <div><DefaultButton className={styles.birthTabBtn} style={{backgroundColor:this.state.bgColorAnniversary, color:this.state.colorAnniversary}} onClick={() => this.AnniversaryClicked(this.state.datasource)}><h3>Anniversary</h3></DefaultButton></div>                    
          </div>
          <br></br>
          <div>
            <Stack tokens={stackTokens}>
            <Dropdown
              options={CategoryOptions}
              defaultSelectedKey={"all"}
              onChange={(e,selectedCategory)=>this.onChangeDeptCategoryHandle(selectedCategory)}
              styles={{ dropdown: { width: '20%' } }}
            />
            </Stack>
          </div>          
          {  this.props.webPartContext.sdks.microsoftTeams &&
            ((this.state.count === 1) ? <BirthdayUser people={this.state.BUsers} webPartContext={this.props.webPartContext} dataSource={this.state.datasource} IsTeamsIcon={this.state.IsTeamsIcon}/> : 
            (this.state.count === 2) ? <AnniversaryUser people={this.state.AUsers} webPartContext={this.props.webPartContext} dataSource={this.state.datasource} IsTeamsIcon={this.state.IsTeamsIcon} /> :  <BirthdayUser people={this.state.BUsers} webPartContext={this.props.webPartContext} dataSource={this.props.dropdown} IsTeamsIcon={this.state.IsTeamsIcon}/> )
          }
          {  (!this.props.webPartContext.sdks.microsoftTeams) &&
            ((this.state.count === 1) ? <BirthdayUser people={this.state.BUsers} webPartContext={this.props.webPartContext} dataSource={this.props.dropdown} IsTeamsIcon={this.props.IsTeamsIcon}/> : 
            (this.state.count === 2) ? <AnniversaryUser people={this.state.AUsers} webPartContext={this.props.webPartContext} dataSource={this.props.dropdown} IsTeamsIcon={this.props.IsTeamsIcon} /> :  <BirthdayUser people={this.state.BUsers} webPartContext={this.props.webPartContext} dataSource={this.props.dropdown} IsTeamsIcon={this.props.IsTeamsIcon}/> )
          }           
        </div>        
      </div>
    )    
  }
}