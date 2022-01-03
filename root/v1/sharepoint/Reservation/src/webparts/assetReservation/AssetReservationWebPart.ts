import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  IPropertyPaneDropdownOption,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneButtonType,
  PropertyPaneButton
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'AssetReservationWebPartStrings';
import AssetReservation from './components/AssetReservation';
import { IAssetReservationProps } from './components/IAssetReservationProps';
import { PropertyFieldDateTimePicker, DateConvention, TimeConvention, IDateTimeFieldValue } from '@pnp/spfx-property-controls/lib/PropertyFieldDateTimePicker';
import spservices from '../../services/spservices';
import * as moment from 'moment';

import { Logger, ConsoleListener, ILogEntry, LogLevel} from "@pnp/logging";
import AppListener from '../../services/appListner';
import { IListInfo } from '../../models/IListInfo';
import spServiceEnsureLists from '../../services/spServiceEnsureLists';
export interface IAssetReservationWebPartProps {
  title: string;
  siteUrl: string;
  locationListName: string;
  areaListName: string;
  categoryListName:string;
  masterListName: string;
  calendarListName: string;
  eventStartDate: IDateTimeFieldValue ;
  eventEndDate: IDateTimeFieldValue;
  errorMessage: string;
  context:any; 
}
export default class AssetReservationWebPart extends BaseClientSideWebPart<IAssetReservationWebPartProps> {
  private lists: IPropertyPaneDropdownOption[] = [];
  
  // Ensure Lists are present 
  private isLocationListAvailable: boolean = false;
  private isAreaListAvailable: boolean = false;
  private isCategoryListAvailable: boolean = false;
  private isMasterListAvailable: boolean = false;
  private isCalendarListAvailable: boolean = false;

  private spService: spservices = null;
  private spEnsureListsService: spServiceEnsureLists = null;
  private errorMessage: string;
  private appListner: AppListener = new AppListener();

  public render(): void {
    const element: React.ReactElement<IAssetReservationProps> = React.createElement(
      AssetReservation,
      {
        title: this.properties.title,
        siteUrl: this.properties.siteUrl,
        locationListName: this.properties.locationListName,
        areaListName: this.properties.areaListName,
        categoryListName: this.properties.categoryListName,
        masterListName: this.properties.masterListName,
        calendarListName:this.properties.calendarListName,
        displayMode: this.displayMode,
        updateProperty: (value: string) => {
          this.properties.title = value;
        },
        context: this.context,
        eventStartDate: this.properties.eventStartDate,
        eventEndDate: this.properties.eventEndDate,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  /*
  *
  */
  public  async onInit(): Promise<void> {
    this.appListner.setAppLogger();

    this.spService = new spservices(this.context);
    this.spEnsureListsService = new spServiceEnsureLists(this.context);

    this.properties.siteUrl = this.properties.siteUrl ? this.properties.siteUrl : this.context.pageContext.site.absoluteUrl;
    if (!this.properties.eventStartDate){
      this.properties.eventStartDate = { value: moment().subtract(2,'years').startOf('month').toDate(), displayValue: moment().format('ddd MMM MM YYYY')};
    }
    if (!this.properties.eventEndDate){
      this.properties.eventEndDate = { value: moment().add(20,'years').endOf('month').toDate(), displayValue: moment().format('ddd MMM MM YYYY')};
    }
   Logger.write("Init() method triggered.", LogLevel.Info);

    return Promise.resolve();
  }

  /*
  *
  */
  protected async onPropertyPaneConfigurationStart() {
    this.context.propertyPane.refresh();
  }

  /*
  *
  */
  private onEventStartDateValidation(date:string){
    if (date && this.properties.eventEndDate.value){
      if (moment(date).isAfter(moment(this.properties.eventEndDate.value))){
        return strings.SartDateValidationMessage;
      }
    }
    return '';
  }

  /*
  *
  */
  private onEventEndDateValidation(date:string){
    if (date && this.properties.eventEndDate.value){
      if (moment(date).isBefore( moment(this.properties.eventStartDate.value))){
        return strings.EnDateValidationMessage;
      }
    }
    return '';
  }

  /*
  *
  */
  private onSiteUrlGetErrorMessage(value: string) {
  let returnValue: string = '';
  if (value) {
    returnValue = '';
  } else {
    const previousSiteUrl: string = this.properties.siteUrl;
    // reset selected item
    this.properties.siteUrl = undefined;
    this.isCalendarListAvailable = true;
    this.context.propertyPane.refresh();
    }
    return returnValue;
  }

  /*
  *
  */
  protected async onPropertyPaneFieldChanged(propertyPath: string, oldValue: string, newValue: string) {
    try {
      // reset any error
      this.properties.errorMessage = undefined;
      this.errorMessage = undefined;
      this.context.propertyPane.refresh();

      if (propertyPath === 'siteUrl' && newValue) {
        super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);

        this.context.propertyPane.refresh();
        // const _lists = await this.loadLists();
        // this.lists = _lists;
        this.isCalendarListAvailable = false;
        this.context.propertyPane.refresh();
        this.render();
      }
      else {
        super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
      }
    } catch (error) {
      this.errorMessage =  `${error.message} -  please check if site url if valid.` ;
      this.context.propertyPane.refresh();
    }
  }

  /*
  *
  */
  // LIST   - ASSETLOCATION 
  // FIELDS - ID, TITLE, ISACTIVE

  // Get LISTID 
  private async ensureLocationListWithFields() {
    let listInfo: IListInfo = <IListInfo> {};

    listInfo.ListName = this.properties.locationListName;
    listInfo.ListDescription = 'Location list to hold location information';
    listInfo.ListType = 100;
    
    Logger.write("Checking for " + listInfo.ListName , LogLevel.Info);
    let res = await this.spEnsureListsService.ensureListByListInfo(this.properties.siteUrl, listInfo);
    if(res.IsListCreated) {
        let fieldRes = await this.spEnsureListsService.ensureLocationListFields(this.properties.siteUrl, listInfo);
        Logger.write("List " + listInfo.ListName + " Fileds have been created" , LogLevel.Info);
        this.isLocationListAvailable = true;
        this.context.propertyPane.refresh();
        Logger.write("List " + listInfo.ListName + " has been created successfully" , LogLevel.Info);
        listInfo.ListName = this.properties.areaListName;
    }
  }

  /*
  *
  */
  // LIST   - ASSETAREA 
  // FIELDS - ID, TITLE, ISACTIVE
  private async ensureAreaListWithFields() {
    let listInfo: IListInfo = <IListInfo> {};
    let lookUpListInfo: IListInfo = <IListInfo>{};
    debugger;
    listInfo.ListName = this.properties.areaListName;
    listInfo.ListType = 100;
    listInfo.ListDescription = 'Area list to hold asset area information';
    Logger.write("Checking for " + listInfo.ListName , LogLevel.Info);
    let res = await this.spEnsureListsService.ensureListByListInfo(this.properties.siteUrl, listInfo);
    if(res.IsListCreated) {
      lookUpListInfo.ListName = this.properties.locationListName;
      let fieldRes = await this.spEnsureListsService.ensureAreaListFields(this.properties.siteUrl, listInfo, lookUpListInfo);

      Logger.write("List " + listInfo.ListName + " Fileds have been created" , LogLevel.Info);
      this.isAreaListAvailable = true;
      this.context.propertyPane.refresh();
      Logger.write("List " + listInfo.ListName + " has been created successfully" , LogLevel.Info);
      } else Logger.write("Error while creating the List :" + listInfo.ListName, LogLevel.Info);
  }

  /*
  *
  */
  // LIST   - ASSETCATEGORY 
  // FIELDS - ID, TITLE, ISACTIVE, ASSETAREA
  private async ensureCategoryListWithFields() {
    let listInfo: IListInfo = <IListInfo>{};
    let lookUpListInfo: IListInfo = <IListInfo>{};

    listInfo.ListName = this.properties.categoryListName;
    listInfo.ListType = 100;
    listInfo.ListDescription = 'Category list to hold asset category information';
    Logger.write("Checking for " + listInfo.ListName , LogLevel.Info);
    let res = await this.spEnsureListsService.ensureListByListInfo(this.properties.siteUrl, listInfo);
    if(res.IsListCreated) {
      lookUpListInfo.ListName = this.properties.areaListName;
      this.spEnsureListsService.ensureCategoryListFields(this.properties.siteUrl, listInfo, lookUpListInfo).then(resCategoryFields=>{
        Logger.write("List " + listInfo.ListName + " Fileds have been created" , LogLevel.Info);
      });
      this.isCategoryListAvailable = true;
      this.context.propertyPane.refresh();
      Logger.write("List " + listInfo.ListName + " has been created successfully" , LogLevel.Info);
    }
  }

  /*
  *
  */
  // LIST   - ASSETMASTER 
  // FIELDS - ID, TITLE, ISACTIVE, ASSETCATEGORY
  private async ensureMasterListWithFields() { 
    let listInfo: IListInfo = <IListInfo>{};
    let lookUpListInfo: IListInfo = <IListInfo>{};

    listInfo.ListName = this.properties.masterListName;
    listInfo.ListType = 100;
    listInfo.ListDescription = 'Master list to hold asset master information';
    Logger.write("Checking for " + listInfo.ListName , LogLevel.Info);
    let res = await this.spEnsureListsService.ensureListByListInfo(this.properties.siteUrl, listInfo);
    if(res.IsListCreated) {
      lookUpListInfo.ListName = this.properties.categoryListName;
      let fieldRes = await this.spEnsureListsService.ensureMasterListFields(this.properties.siteUrl, listInfo, lookUpListInfo);
      Logger.write("List " + listInfo.ListName + " Fileds have been created" , LogLevel.Info);
      this.isMasterListAvailable = true;
      this.context.propertyPane.refresh();
      Logger.write("List " + listInfo.ListName + " has been created successfully" , LogLevel.Info);
    }
  }

  /*
  *
  */
  // LIST   - ASSETCALENDAR 
  // FIELDS - ID, TITLE, ISACTIVE, ASSETMASTER
  private async ensureCalendarListWithFields() {
    debugger;
    let listInfo: IListInfo = <IListInfo>{};
    let lookUpListInfo: IListInfo = <IListInfo>{};

    listInfo.ListName = this.properties.calendarListName;
    listInfo.ListType = 106;
    listInfo.ListDescription = 'Calendar list to hold asset transaction information';
    Logger.write("Checking for " + listInfo.ListName , LogLevel.Info);
    let res = await this.spEnsureListsService.ensureListByListInfo(this.properties.siteUrl, listInfo);
    if(res.IsListCreated) {
      lookUpListInfo.ListName = this.properties.masterListName;
      let fieldRes = await this.spEnsureListsService.ensureCalendarListFields(this.properties.siteUrl, listInfo);
      Logger.write("List " + listInfo.ListName + " Fileds have been created" , LogLevel.Info);
      this.isCalendarListAvailable = true;
      this.context.propertyPane.refresh();
      Logger.write("List " + listInfo.ListName + " has been created successfully" , LogLevel.Info);
    }
  }

  /*
  *
  */
  private async PerformEnsureLists(oldVal: any) {
    Logger.write("Ensure lists are presents", LogLevel.Info);
    await this.ensureLocationListWithFields();
    await this.ensureAreaListWithFields();
    await this.ensureCategoryListWithFields();
    await this.ensureMasterListWithFields();
    await this.ensureCalendarListWithFields();
  }


  /*
  *
  */
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    // EndDate and Start Date defualt values

    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('siteUrl', {
                  label: strings.SiteUrlFieldLabel,
                  onGetErrorMessage: this.onSiteUrlGetErrorMessage.bind(this),
                  value: this.context.pageContext.site.absoluteUrl,
                  deferredValidationTime: 1200,
                }),
                PropertyPaneTextField('locationListName', {
                  label: strings.LocationListName,
                  disabled: this.isLocationListAvailable,
                }),
                PropertyPaneTextField('areaListName', {
                  label: strings.AreaListName,
                  disabled: this.isAreaListAvailable,
                }),
                PropertyPaneTextField('categoryListName', {
                  label: strings.CategoryListName,
                  disabled: this.isCategoryListAvailable,
                }),
                PropertyPaneTextField('masterListName', {
                  label: strings.MasterListName,
                  disabled: this.isMasterListAvailable,
                }),
                PropertyPaneTextField('calendarListName', {
                  label: strings.CalendarListName,
                  disabled: this.isCalendarListAvailable,
                }),
                PropertyPaneButton('EnsureList',
                 {  
                  text: "EnsureList",
                  buttonType: PropertyPaneButtonType.Normal,
                  onClick: this.PerformEnsureLists.bind(this),
                  disabled: this.isLocationListAvailable && this.isAreaListAvailable && this.isCategoryListAvailable && this.isMasterListAvailable && this.isCalendarListAvailable
                 }),
                PropertyPaneLabel('eventStartDate', {
                  text: strings.eventSelectDatesLabel
                }),
                PropertyFieldDateTimePicker('eventStartDate', {
                  label: 'From',
                  initialDate: this.properties.eventStartDate,
                  dateConvention: DateConvention.Date,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  onGetErrorMessage: this.onEventStartDateValidation,
                  deferredValidationTime: 0,
                  key: 'eventStartDateId'
                }),
                PropertyFieldDateTimePicker('eventEndDate', {
                  label: 'to',
                  initialDate:  this.properties.eventEndDate,
                  dateConvention: DateConvention.Date,
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  onGetErrorMessage:  this.onEventEndDateValidation,
                  deferredValidationTime: 0,
                  key: 'eventEndDateId'
                }),
                PropertyPaneLabel('errorMessage', {
                  text:  this.errorMessage,
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
