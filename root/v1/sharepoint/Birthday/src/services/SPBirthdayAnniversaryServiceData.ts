import * as React from 'react'
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web, PermissionKind, IItem, IFieldInfo } from '@pnp/sp/presets/all';
import { graph } from "@pnp/graph";
import * as moment from 'moment';
import { Logger, LogLevel} from "@pnp/logging";
import SPBirthdayAnniversaryService from './SPBirthdayAnniversaryService';
import { Dropdown, IDropdown, IDropdownOption, optionProperties, TextField, Tooltip } from 'office-ui-fabric-react';
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

    getTocheckIfTeamExist()
    {
        return this.SPBirthdayAnniversaryService.loadTocheckIfTeamExist();
    }

    putUserDataToList(requestlistItem)
    {
        return this.SPBirthdayAnniversaryService.insertUserDataToList(requestlistItem)
    }
} //End of Main Class
      
  
 