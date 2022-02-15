import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
    IPropertyPaneConfiguration,
    PropertyPaneButton,
    PropertyPaneButtonType,
    PropertyPaneTextField,
    PropertyPaneToggle,
    PropertyPaneLink
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
import { IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { update, get } from '@microsoft/sp-lodash-subset'; 
import { PropertyPaneDropdown } from '../../controls/PropertyPaneDropdown/components/PropertyPaneDropdown';
import Main from './components/Main/Main';
import { IBirthdayProps } from './components/IBirthdayProps';
import * as strings from 'BirthdayWebPartStrings';
import { PropertyFieldFilePicker, IFilePickerResult } from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";
import SPBirthdayAnniversaryServiceData from '../../services/SPBirthdayAnniversaryServiceData';
import SPEnsureListService from '../../services/SPEnsureListService';

export interface IBirthdayWebPartProps {
    description: string;
    webPartContext: WebPartContext;  
    dropdown: string;
    externalAPI: string;
    IsTeamsIcon: boolean;
    ImagesListName: string;
    UsersListName: string;
    ConfigListName: string;
    EmailListName: string;
    filePickerResult: IFilePickerResult;
}

export default class BirthdayWebPart extends BaseClientSideWebPart<IBirthdayWebPartProps> {

  private spBirthdayServiceData: SPBirthdayAnniversaryServiceData = null;
  private SPListsEnsureService: SPEnsureListService = null;
  
  public async onInit(){
    this.properties.ImagesListName = strings.imagesListName;
    this.properties.ConfigListName = strings.configurationListName;
    this.properties.EmailListName = strings.emailSenderListName;
    this.properties.UsersListName = strings.userDetailsListName;
    this.SPListsEnsureService = new SPEnsureListService(this.context);
    if(this.context.sdks.microsoftTeams){         
      await this.SPListsEnsureService.ensureConfigurationList(this.properties.ConfigListName)
      .then((res:string)=> {
          if(res)
            this.createListsUsingPNP();
      });            
    }
    else      
      this.createListsUsingPNP();
  }

  public render(): void {
    const element: React.ReactElement<IBirthdayProps> = React.createElement(
      Main,
      {
        description: this.properties.description,
        webPartContext: this.context,       
        dropdown: this.properties.dropdown,
        externalAPI: this.properties.externalAPI,
        IsTeamsIcon: this.properties.IsTeamsIcon,
        ImagesListName: this.properties.ImagesListName,
        UsersListName: this.properties.UsersListName,
        ConfigListName: this.properties.ConfigListName,
        EmailListName: this.properties.EmailListName                            
      } 
    );     
    ReactDom.render(element, this.domElement);
  }  

  private createListsUsingPNP = async() => 
  {
      await this.SPListsEnsureService.ensureImageLibrary(this.properties.ImagesListName)
      .then(async(res:string) => {
        if(res)
            await this.SPListsEnsureService.ensureUserList(this.properties.UsersListName)
            .then(async(res:string) => {
              if(res)
                  await this.SPListsEnsureService.ensureEmailList(this.properties.EmailListName)
                  .then((res:string) => {
                    if(res)
                      console.log("All lists are created.");
                  });
            });
      });
  }  

  private onDropdownChange(propertyPath: string, newValue: any): void {  
      const oldValue: any = get(this.properties, propertyPath);  
      // store new value in web part properties  
      update(this.properties, propertyPath, (): any => { return newValue; });  
      // refresh web part 
      this.context.propertyPane.refresh(); 
      this.render();     
  }

  private loadOptions(): Promise<IDropdownOption[]> {
      return new Promise<IDropdownOption[]>((resolve: (options: IDropdownOption[]) => void, reject: (error: any) => void) => {
          setTimeout(() => {
              resolve([{
                  key: 'Azure',
                  text: 'From Azure active directory'
                  },
                  {
                    key: 'Internal',
                    text: 'Internal list from SharePoint'
                  },
                  {
                    key: 'API',
                    text: 'APIs OR Webservice'
                  }
              ]);
          }, 0);
      });   
  } 
  
  protected onDispose(): void {
      ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
      return Version.parse('1.0');
  }
  
  //download the template to add the user details
  private downloadCsv()
  {   
      const linkSource = `data:application/csv;base64,${"TmFtZSxGaXJzdE5hbWUsTGFzdE5hbWUsRW1haWwsQmlydGhEYXRlLEhpcmVEYXRlLERlcGFydG1lbnQ="}`;
      const downloadLink = document.createElement('a');

      // Append to html link element page
      document.body.appendChild(downloadLink);

      downloadLink.href = linkSource;
      downloadLink.target = '_self';
      downloadLink.download = "UserBirthAnniversaryDetails.csv";

      // Start download
      downloadLink.click();

      // Clean up and remove the link
      setTimeout(function(){ downloadLink.parentNode.removeChild(downloadLink); }, 500);
  }
  
  //upload the csv format data to SharePoint list 
  protected UploadCSV()
  {
      if(this.properties.filePickerResult.fileName !== ""){
          let uploadedFileName = this.properties.filePickerResult.fileName;
          let fileExtension = uploadedFileName.split('.').pop();
          if(fileExtension === 'csv'){
              let file = this.properties.filePickerResult;
              let selectedFile =  file.downloadFileContent()
              .then((res: any): Promise<any> => {     
                return res;
              })
              .then((res: any): void => {
                  if(res){
                      const reader = new FileReader();        
                      reader.onload = async (e) => {           
                        const text = reader.result;
                        const dataArray = this.csvToArray(text);              
                        this.exportDataToList(dataArray);
                      }
                      reader.readAsText(res);               
                  }
              }, 
              (error: any): void => {
                console.log("Error occured.");
              })
              .catch((error: any): void => {
                console.log("Error: " + error);      
              }); 
          }      
      }    
  }

  private csvToArray(str, delimiter = ",")
  {
      const headers = str.slice(0, str.indexOf("\r\n")).split(delimiter);
      const rows = str.slice(str.indexOf("\n") + 1).split("\r\n");
      
      const arr = rows.map((row) => {
          if(row.length !== 0){
              const values = row.split(delimiter);    
              const el = headers.reduce(function (object, header, index) {          
                  object[header] = values[index];
                  return object;                
              }, {});
              return el;
          }        
      });
      //return an array
      return arr;
  }

  private exportDataToList(UserList: any)
  {
      this.spBirthdayServiceData = new SPBirthdayAnniversaryServiceData(this.context);
      for(let i:number = 0; i<UserList.length; ++i){
          if(UserList[i] !== undefined){
              let birthDate = new Date(UserList[i].BirthDate);
              let birthDateFinal = new Date(birthDate.getTime() - (birthDate.getTimezoneOffset() * 60000));
              let hireDate = new Date(UserList[i].HireDate);
              let hireDateFinal = new Date(hireDate.getTime() - (hireDate.getTimezoneOffset() * 60000));
              const requestlistItem: string = JSON.stringify({
                'Title': "Birthday/Anniversary",
                'name': UserList[i].Name,
                'firstName': UserList[i].FirstName,
                'lastName': UserList[i].LastName,
                'email': UserList[i].Email,
                'birthDate': birthDateFinal, 
                'hireDate': hireDateFinal,                           
                'department': UserList[i].Department          
                });
                this.spBirthdayServiceData.putUserDataToList(requestlistItem);
          }  
      }
  }

  private validateAPI(value: string): string {
      if (value === null || value.trim().length === 0) 
        return 'Provide a external API URL';      
      return '';
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {  
    let uploadControl: any = []; 
    let CSVControl: any = []; 
    let externalAPI: any = [];
    let IsTeamsIcon: any = [];
      
    if (this.properties.dropdown === "Internal"){  
      CSVControl = PropertyPaneButton('Csv File', {
        text: strings.CSVtemplateText,
        buttonType: PropertyPaneButtonType.Primary,
        onClick: this.downloadCsv.bind(this)
      });

      uploadControl = PropertyFieldFilePicker('filePicker', {
        context: this.context as any,
        filePickerResult: this.properties.filePickerResult,
        onPropertyChange: this.UploadCSV.bind(this),
        properties: this.properties,
        onSave: (e: IFilePickerResult) => { this.properties.filePickerResult = e; },
        onChanged: (e: IFilePickerResult) => { this.properties.filePickerResult = e; },        
        accepts:[".csv"],
        key: "filePickerId",
        buttonLabel: strings.UploadCSVlabel,
        label: "",
        hideRecentTab: true,
        hideStockImages: true,
        hideOneDriveTab: true,
        hideSiteFilesTab: true,
        hideLinkUploadTab: true,        
        storeLastActiveTab: false
      });
    }

    if (this.properties.dropdown === "API"){
      externalAPI = PropertyPaneTextField('externalAPI',{
        label: strings.ExternalAPIlabel,
        onGetErrorMessage: this.validateAPI.bind(this)
      });

      IsTeamsIcon = PropertyPaneToggle('IsTeamsIcon', {
        label: strings.TeamsIconlabel
      });
    }

    return {      
      pages: [
        {          
          groups: [
            {
              groupName: strings.GroupName,
              groupFields: [                               
                new PropertyPaneDropdown('dropdown', {
                  label: strings.DropDownlabel,
                  loadOptions: this.loadOptions.bind(this),
                  onPropertyChange: this.onDropdownChange.bind(this),
                  selectedKey: this.properties.dropdown,
                }),
                CSVControl,
                uploadControl,
                externalAPI,
                IsTeamsIcon                                
              ]
            },
            {
              groupName: strings.GroupNameAdmin,
              groupFields: [                               
                PropertyPaneLink('linkImage', {
                  href: `${this.context.pageContext.web.absoluteUrl}/${strings.imagesListName}/Forms/Thumbnails.aspx`,
                  text: strings.LinkTextImage,
                  target: "_blank" 
                }),
                
                PropertyPaneLink('linkUsers', {
                  href: `${this.context.pageContext.web.absoluteUrl}/Lists/${strings.userDetailsListName}}/AllItems.aspx`,
                  text: strings.LinkTextUsers,
                  target: "_blank" 
                })
              ]
            }
          ],          
        }
      ]
    };    
  }
}