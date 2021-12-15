import SPBirthdayAnniversaryService from './SPBirthdayAnniversaryService';
import { IBirthday } from '../Models/IBirthday';
import { IAnniversary } from '../Models/IAnniversary';

export default class SPBirthdayAnniversaryServiceData{

    private SPBirthdayAnniversaryService: SPBirthdayAnniversaryService = null;

    constructor(private context)
    {
        this.SPBirthdayAnniversaryService = new SPBirthdayAnniversaryService(this.context);            
        this.onInit();
    }

    private async onInit(){}

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
    
    getInternalDetails():Promise<{}>
    {
        return this.SPBirthdayAnniversaryService.loadInternalDetails();
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
    
    putUserDataToList(requestlistItem)
    {
        return this.SPBirthdayAnniversaryService.insertUserDataToList(requestlistItem)
    }
} //End of Main Class
      
  
 