import SPBirthdayAnniversaryService from './SPBirthdayAnniversaryService';
import SPSettingsPanelService from './SPSettingsPanelService';
import { IBirthday } from '../Models/IBirthday';
import { IAnniversary } from '../Models/IAnniversary';

export default class SPBirthdayAnniversaryServiceData{

    private SPBirthdayAnniversaryService: SPBirthdayAnniversaryService = null;
    private SPSettingsPanelService: SPSettingsPanelService = null;

    constructor(private context)
    {
        this.SPBirthdayAnniversaryService = new SPBirthdayAnniversaryService(this.context);  
        this.SPSettingsPanelService = new SPSettingsPanelService(this.context);          
        this.onInit();
    }

    private async onInit(){}

    checkIfLoggedInUserIsAdmin():Promise<boolean>
    {
        return this.SPBirthdayAnniversaryService.loadLoggedInUserDetails()
    }

    getTeamsSettingData():Promise<{}>
    {
        return this.SPBirthdayAnniversaryService.loadSettingsForTeams();
    } 

    getBirthdayImagesdata():Promise<{}>
    {
        return this.SPBirthdayAnniversaryService.loadBirthdayImages();
    }

    getAnniversaryImagesdata():Promise<{}>
    {
        return this.SPBirthdayAnniversaryService.loadAnniversaryImages();
    }
    
    getInternalBirthdayDetails(Month: number):Promise<{}>
    {
        return this.SPBirthdayAnniversaryService.loadInternalBirthdayDetails(Month);
    }

    getInternalAnniversaryDetails(Month: number):Promise<{}>
    {
        return this.SPBirthdayAnniversaryService.loadInternalAnniversaryDetails(Month);
    }
    
    getBirthdayFromAzure(startDate: string, endDate: string):Promise<IBirthday[]>
    {
        return this.SPBirthdayAnniversaryService.loadBirthdayFromAzure(startDate, endDate);
    }

    getAnniversaryFromAzure():Promise<IAnniversary[]>
    {
        return this.SPBirthdayAnniversaryService.loadAnniversaryFromAzure();
    }

    getDataUsingThirdPartyAPI(query: string):Promise<{}>
    {
        return this.SPBirthdayAnniversaryService.loadDataUsingThirdPartyAPI(query);
    }
    
    putUserDataToList(requestlistItem: string)
    {
        return this.SPBirthdayAnniversaryService.insertUserDataToList(requestlistItem)
    }

    createNewTeam():Promise<string>
    {
        return this.SPSettingsPanelService.newTeam();
    }

    putTeamsConfigurationToList(JsonData: string, ItemID: number)
    {
        return this.SPSettingsPanelService.updateTeamsConfigurationToList(JsonData, ItemID);
    }

    addTeamsConfigurationToList(JsonData: string)
    {
        return this.SPSettingsPanelService.insertTeamsConfigurationToList(JsonData);
    }

    addEmailDataToList(JsonData: string)
    {
        return this.SPBirthdayAnniversaryService.insertEmailDataToList(JsonData);
    }

    getUserPhotoURL()
    {
        return this.SPBirthdayAnniversaryService.loadUserphotoURL();
    }

    getIntUserDepartment(intUserEmail: string)
    {
        return this.SPBirthdayAnniversaryService.loadIntUserDepartment(intUserEmail);
    }
    
    getAzureUserDepartment(azureUserEmail: string)
    {
        return this.SPBirthdayAnniversaryService.loadAzureUserDepartment(azureUserEmail);
    }
} //End of Main Class
      
  
 