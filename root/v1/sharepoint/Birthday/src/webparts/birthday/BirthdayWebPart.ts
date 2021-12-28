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
// import { sp } from '@pnp/sp';
// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp/fields";
// import "@pnp/sp/views";
// import { ChoiceFieldFormatType, DateTimeFieldFormatType, FieldTypes, UrlFieldFormatType } from '@pnp/sp/fields/types';
import SPBirthdayAnniversaryServiceData from '../../services/SPBirthdayAnniversaryServiceData';
import SPEnsureListService from '../../services/SPEnsureListService';

export interface IBirthdayWebPartProps {
  description: string;
  webPartContext: WebPartContext;  
  dropdown: string;
  externalAPI: string;
  IsTeamsIcon: boolean;
  filePickerResult: IFilePickerResult;
}

let spBirthdayServiceData:SPBirthdayAnniversaryServiceData = undefined;
let SPListsEnsureService: SPEnsureListService = undefined;

debugger;
export default class BirthdayWebPart extends BaseClientSideWebPart<IBirthdayWebPartProps> {

  protected async onInit(){
    SPListsEnsureService = new SPEnsureListService(this.context);
    // await super.onInit();
    // // we always setup using the current context
    // sp.setup(this.context);
    if(this.context.sdks.microsoftTeams){         
      await SPListsEnsureService.ensureConfigurationList(strings.configurationListName)
      .then((res:string)=> {
          if(res)
            this.createListsUsingPNP();
      })
            
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
        IsTeamsIcon: this.properties.IsTeamsIcon                            
      } 
    );     
    ReactDom.render(element, this.domElement);
  }

  //create list to store the configuration for widget set by admin in Microsoft teams
  // createConfigurationList = async() =>
  // {
  //   const listEnsureResult = await sp.web.lists.ensure("ConfigurationSettings", "Defines the configuration settings for webparts in teams", 100);    
  //   if (listEnsureResult.created){
  //     const batch = sp.web.createBatch();
  //     listEnsureResult.list.fields.inBatch(batch).addMultilineText("Settings",6,false);
  //     listEnsureResult.list.fields.inBatch(batch).addText("Key");
  //     listEnsureResult.list.fields.inBatch(batch).addText("ExternalAPI");
  //     listEnsureResult.list.fields.inBatch(batch).addBoolean("IsTeamsIcon");
  //     await batch.execute();
  //     await sp.web.lists.getByTitle("ConfigurationSettings").defaultView.fields.add("Settings");
  //     await sp.web.lists.getByTitle("ConfigurationSettings").defaultView.fields.add("Key");
  //     await sp.web.lists.getByTitle("ConfigurationSettings").defaultView.fields.add("ExternalAPI");
  //     await sp.web.lists.getByTitle("ConfigurationSettings").defaultView.fields.add("IsTeamsIcon");
  //   }
  // }

  private createListsUsingPNP = async() => 
  {
      await SPListsEnsureService.ensureImageLibrary(strings.imagesListName)
      .then(async(res:string) => {
        if(res)
            await SPListsEnsureService.ensureUserList(strings.userDetailsListName)
            .then(async(res:string) => {
              if(res)
                  await SPListsEnsureService.ensureEmailList(strings.emailSenderListName)
                  .then((res:string) => {
                    if(res)
                      console.log("All lists are created.");
                  });
            });
      });
  }  

  //create library to store the images for birthday and anniversary
  // createLibrary = async() =>
  // {
  //   // ensure that a list exists. If it doesn't it will be created with the provided title (the rest of the settings will be default):
  //   const listEnsureResult = await sp.web.lists.ensure("BirthdayAnniversaryImages", "Birthday and Anniversary Images list", 109);

  //   // check if the list was created, or if it already existed:
  //   if (listEnsureResult.created){
  //     const batch = sp.web.createBatch();
  //     listEnsureResult.list.fields.inBatch(batch).addChoice("Category", ["Birthday", "Anniversary"], ChoiceFieldFormatType.Dropdown);     
  //     await batch.execute();
  //     await sp.web.lists.getByTitle("BirthdayAnniversaryImages").defaultView.fields.add("Category");
  //   } 
  //   else 
  //     console.log("My Library is already existed!");
  //   const r = await listEnsureResult.list.select("Id")();
  //   if(r.Id)
  //     this.createListUsers();
  // }

  //create the list to store the user details
  // createListUsers = async() =>
  // {
  //   const listEnsureResult = await sp.web.lists.ensure("UserBirthAnniversaryDetails", "Users details list", 100);
  //   if (listEnsureResult.created){
  //     const batch = sp.web.createBatch(); 
  //     listEnsureResult.list.fields.inBatch(batch).addText("name");
  //     listEnsureResult.list.fields.inBatch(batch).addText("firstName");
  //     listEnsureResult.list.fields.inBatch(batch).addText("lastName");
  //     listEnsureResult.list.fields.inBatch(batch).addText("email");
  //     listEnsureResult.list.fields.inBatch(batch).addText("department"); 
  //     listEnsureResult.list.fields.inBatch(batch).addDateTime("birthDate",DateTimeFieldFormatType.DateOnly);   
  //     listEnsureResult.list.fields.inBatch(batch).addDateTime("hireDate",DateTimeFieldFormatType.DateOnly);
  //     listEnsureResult.list.fields.inBatch(batch).addCalculated("birthdayMonth", "=MONTH(birthDate)", DateTimeFieldFormatType.DateOnly, FieldTypes.Number);
  //     listEnsureResult.list.fields.inBatch(batch).addCalculated("hireDayMonth", "=MONTH(hireDate)", DateTimeFieldFormatType.DateOnly, FieldTypes.Number);
  //     await batch.execute();
  //     await sp.web.lists.getByTitle("UserBirthAnniversaryDetails").defaultView.fields.add("name");
  //     await sp.web.lists.getByTitle("UserBirthAnniversaryDetails").defaultView.fields.add("firstName");
  //     await sp.web.lists.getByTitle("UserBirthAnniversaryDetails").defaultView.fields.add("lastName");
  //     await sp.web.lists.getByTitle("UserBirthAnniversaryDetails").defaultView.fields.add("email");
  //     await sp.web.lists.getByTitle("UserBirthAnniversaryDetails").defaultView.fields.add("department");
  //     await sp.web.lists.getByTitle("UserBirthAnniversaryDetails").defaultView.fields.add("birthDate");
  //     await sp.web.lists.getByTitle("UserBirthAnniversaryDetails").defaultView.fields.add("hireDate");
  //   } 
  //   else 
  //     console.log("My User List is already existed!");
  //   const r = await listEnsureResult.list.select("Id")();
  //   if(r.Id)
  //     this.createListEmail();
  // }

  //Create list to store the email details send to wish the desired person
  // createListEmail = async() =>
  // {
  //   const listEnsureResult = await sp.web.lists.ensure("EmailSender", "Email sending list", 100);
  //   if (listEnsureResult.created){
  //     const batch = sp.web.createBatch();
  //     listEnsureResult.list.fields.inBatch(batch).addText("EmailSubject"); 
  //     listEnsureResult.list.fields.inBatch(batch).addMultilineText("EmailBody",3,true);
  //     listEnsureResult.list.fields.inBatch(batch).addText("EmailTo"); 
  //     listEnsureResult.list.fields.inBatch(batch).addText("EmailCCTo"); 
  //     listEnsureResult.list.fields.inBatch(batch).addText("EmailFrom");
  //     listEnsureResult.list.fields.inBatch(batch).addUrl("ActivityEmail",UrlFieldFormatType.Image);            
  //     await batch.execute();
  //     await sp.web.lists.getByTitle("EmailSender").defaultView.fields.add("EmailSubject");
  //     await sp.web.lists.getByTitle("EmailSender").defaultView.fields.add("EmailBody");
  //     await sp.web.lists.getByTitle("EmailSender").defaultView.fields.add("EmailTo");
  //     await sp.web.lists.getByTitle("EmailSender").defaultView.fields.add("EmailCCTo");
  //     await sp.web.lists.getByTitle("EmailSender").defaultView.fields.add("EmailFrom");
  //     await sp.web.lists.getByTitle("EmailSender").defaultView.fields.add("ActivityEmail");
  //   } 
  //   else 
  //     console.log("My Email List is already existed!");
  // }

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
      spBirthdayServiceData = new SPBirthdayAnniversaryServiceData(this.context);
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
                spBirthdayServiceData.putUserDataToList(requestlistItem);
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
        context: this.context,
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
                  href: `${this.context.pageContext.web.absoluteUrl}/BirthdayAnniversaryImages/Forms/Thumbnails.aspx`,
                  text: strings.LinkTextImage,
                  target: "_blank" 
                }),
                
                PropertyPaneLink('linkUsers', {
                  href: `${this.context.pageContext.web.absoluteUrl}/Lists/UserBirthAnniversaryDetails/AllItems.aspx`,
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