import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  PropertyPaneLink
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';

import * as strings from 'DepartmentalRequestWebPartStrings';
import DepartmentalRequest from './components/DepartmentalRequest/DepartmentalRequest';
import { IDepartmentalRequestProps } from './components/DepartmentalRequest/IDepartmentalRequestProps';
import { sp } from '@pnp/sp';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/fields";

import "@pnp/sp/views";
import { ChoiceFieldFormatType, DateTimeFieldFormatType, UrlFieldFormatType, FieldUserSelectionMode, FieldTypes  } from '@pnp/sp/fields/types';
import { Logger, ConsoleListener,FunctionListener, ILogEntry,ILogListener, LogLevel} from "@pnp/logging";
import AppListener from '../../services/appListener';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export interface IDepartmentalRequestWebPartProps {
  description: string;
  emailType:number;
  webPartContext: WebPartContext;
  msGraphClientFactory : any;
  
}
debugger;
var departmentListId;

export default class DepartmentalRequestWebPart extends BaseClientSideWebPart<IDepartmentalRequestWebPartProps> {
  private appListner: AppListener = new AppListener();

  public async onInit(): Promise<void> {
    await super.onInit();
    sp.setup(this.context);
    await this.appListner.setAppLogger();
    // this.appListner.setAppLogger();
    return Promise.resolve();

  }

  public render(): void {
    const element: React.ReactElement<IDepartmentalRequestProps> = React.createElement(
      DepartmentalRequest,
      {
        description: this.properties.description,
        webUrl: this.context.pageContext.web.absoluteUrl,
        spHttpClient: this.context.spHttpClient,
        emailType:this.properties.emailType,
        loggedInUserName:this.context.pageContext.user.displayName,
        loggedInUserEmail:this.context.pageContext.user.email,
        currentUserId:this.context.pageContext.legacyPageContext["userId"],
        webPartContext: this.context,       
        msGraphClientFactory : this.context.msGraphClientFactory
      }
    );
    this.createListsUsingPNP();
    // this.appListner.setAppLogger();
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private async createListsUsingPNP()
  {
    this.createListDepartment();
  //  await this.createEmpReq();
  //  await this.createArchiveSettings();
    // this.appListner.setAppLogger();
  }  


  createListDepartment = async() =>
  {
    const listEnsureResult = await sp.web.lists.ensure("Dept", "Dept details list", 100);
    if (listEnsureResult.created)    
    {
      alert("My Dept List is created!");
      const batch = sp.web.createBatch(); 
      listEnsureResult.list.fields.inBatch(batch).addUser("Manager", FieldUserSelectionMode.PeopleAndGroups);
      listEnsureResult.list.fields.inBatch(batch).addUser("GroupName", FieldUserSelectionMode.PeopleAndGroups);
      listEnsureResult.list.fields.inBatch(batch).addUser("DepartmentGroup", FieldUserSelectionMode.PeopleAndGroups);
      await batch.execute();
      
      // await sp.web.lists.getByTitle("Dept").defaultView.fields()
      // const xml = await sp.web.lists.getByTitle("Dept").defaultView.fields.getSchemaXml();


    } 
    // else 
    // {
    //   alert("My Dept List is already existed!");
    // }
    const r = await listEnsureResult.list.select("Id")();
    console.log(r.Id);
    departmentListId = await r.Id;
    if(departmentListId){
      this.createListDepartmentCategory();
    }
  }

  createListDepartmentCategory = async() =>
  {
    const listEnsureResult = await sp.web.lists.ensure("DeptCateg", "Dept details list", 100);
    if (listEnsureResult.created)    
    {
      alert("My DeptCateg List is created!");
      const batch = sp.web.createBatch(); 
      listEnsureResult.list.fields.inBatch(batch).addLookup("Department",departmentListId, "Title");
      await batch.execute();


    } 
    // else 
    // {
    //   alert("My DeptCateg List is already existed!");
    // }
    const r = await listEnsureResult.list.select("Id")();
    console.log(r.Id);
    if(r.Id){
      this.createEmpReq();
    }
  }

  createEmpReq = async() =>
  {
    const listEnsureResult = await sp.web.lists.ensure("EmpReq", "EmpReq details list", 100);
    if (listEnsureResult.created)    
    {
      alert("My EmpReq List is created!");
      const batch = sp.web.createBatch(); 
      listEnsureResult.list.fields.inBatch(batch).addMultilineText("Description", 6, true);
      listEnsureResult.list.fields.inBatch(batch).addText("Category");
      listEnsureResult.list.fields.inBatch(batch).addText("Department");
      listEnsureResult.list.fields.inBatch(batch).addText("AssignedTo");
      listEnsureResult.list.fields.inBatch(batch).addUser("ReAssignTo", FieldUserSelectionMode.PeopleOnly, { Group: "" });
      listEnsureResult.list.fields.inBatch(batch).addText("Status");
      listEnsureResult.list.fields.inBatch(batch).addMultilineText("Comment", 6, true);
      listEnsureResult.list.fields.inBatch(batch).addUser("DepartmentManager", FieldUserSelectionMode.PeopleOnly); 
      listEnsureResult.list.fields.inBatch(batch).addNumber("ArchivedTimeSpan");
      listEnsureResult.list.fields.inBatch(batch).addUser("Author", FieldUserSelectionMode.PeopleOnly);
      listEnsureResult.list.fields.inBatch(batch).addCalculated("ArchiveDate", "=Created+ArchivedTimeSpan", DateTimeFieldFormatType.DateTime, FieldTypes.DateTime);
      listEnsureResult.list.fields.inBatch(batch).addText("DepartmentGroup");
      // listEnsureResult.list.fields.addCalculated("Dispatch_x0020_Group", "=IF(Status='Pending',AssignedTo,'')", DateTimeFieldFormatType.DateOnly, FieldTypes.Text);
      // listEnsureResult.list.fields.addNumber

      await batch.execute();

    } 
    // else 
    // {
    //   alert("My EmpReq List is already existed!");
    // }
    const r = await listEnsureResult.list.select("Id")();
    console.log(r.Id);
    if(r.Id){
      this.createArchiveSettings();
    }
  }


  createArchiveSettings = async() =>
  {
    const listEnsureResult = await sp.web.lists.ensure("ArchiveSett", "ArchiveSett details list", 100);
    if (listEnsureResult.created)    
    {
      alert("My ArchiveSett List is created!");
      const batch = sp.web.createBatch(); 
      listEnsureResult.list.fields.inBatch(batch).addNumber("NumberOfDays");
      await batch.execute();


    } 
    // else{
    //   Logger.activeLogLevel = LogLevel.Info;
    //   Logger.subscribe(functionlistener);
    //   Logger.subscribe(new ConsoleListener());
    //   }
    // else 
    // {
    //   alert("My ArchiveSett List is already existed!");
    // }
    const r = await listEnsureResult.list.select("Id")();
    console.log(r.Id);
    // if(r.Id){
    //   this.appListner.setAppLogger();
    // }
    
  }


  createListEmail = async() =>
  {
    const listEnsureResult = await sp.web.lists.ensure("EmailSender", "Email sending list", 100);
    if (listEnsureResult.created) 
    {
      alert("My Email List is created!");
      const batch = sp.web.createBatch();
      listEnsureResult.list.fields.inBatch(batch).addText("EmailSubject"); 
      listEnsureResult.list.fields.inBatch(batch).addMultilineText("EmailBody",3,true);
      listEnsureResult.list.fields.inBatch(batch).addText("EmailTo"); 
      listEnsureResult.list.fields.inBatch(batch).addText("EmailCCTo"); 
      listEnsureResult.list.fields.inBatch(batch).addText("EmailFrom");
      listEnsureResult.list.fields.inBatch(batch).addUrl("ActivityEmail",UrlFieldFormatType.Image);            
      await batch.execute();
    } 
    else 
    {
      alert("My Email List is already existed!");
    }
    const r = await listEnsureResult.list.select("Id")();
    console.log(r.Id);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneDropdown('emailType',{
                  label:"Select the email facility",options:[
                    {
                      key:0,
                      text: "Normal EMail",
                    },
                    {
                      key:1,
                      text:"Power Automate"
                    }
                  ],
                  selectedKey:0
                }),
                PropertyPaneLink('', {
                  href: 'https://gns11.sharepoint.com/sites/SiriusTeams/Lists/Dept/AllItems.aspx',
                  text: 'Department Data',
                  // target: '_blank',
                  // popupWindowProps: {
                  //   height: 500,
                  //   width: 500,
                  //   positionWindowPosition: 2,
                  //   title: 'COB blog'
                  // }
              })
              ]
            }
          ]
        }
      ]
    };
  }
}
