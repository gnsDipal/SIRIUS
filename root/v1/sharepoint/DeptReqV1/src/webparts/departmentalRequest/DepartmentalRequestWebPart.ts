import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  PropertyPaneLink,
  PropertyPaneLabel
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';

import * as strings from 'DepartmentalRequestWebPartStrings';
// import DepartmentalRequest from './components/DepartmentalRequest/DepartmentalRequest';
// import { IDepartmentalRequestProps } from './components/DepartmentalRequest/IDepartmentalRequestProps';
import { sp } from '@pnp/sp';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/fields";
import "@pnp/sp/views";
import { ChoiceFieldFormatType, DateTimeFieldFormatType, UrlFieldFormatType, FieldUserSelectionMode, FieldTypes , IFieldCreationProperties } from '@pnp/sp/fields/types';
import { Logger, ConsoleListener,FunctionListener, ILogEntry,ILogListener, LogLevel} from "@pnp/logging";
import AppListener from '../../services/appListener';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Web } from 'sp-pnp-js';
import Main from './components/Main/Main';


export interface IDepartmentalRequestWebPartProps {
  webPartContext: WebPartContext;
}
// debugger;
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
    const element: React.ReactElement<IDepartmentalRequestWebPartProps> = React.createElement(
      Main,
      {
        webPartContext: this.context,       
        
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
      await sp.web.lists.getByTitle("Dept").defaultView.fields.add("Manager");
      await sp.web.lists.getByTitle("Dept").defaultView.fields.add("GroupName");
      await sp.web.lists.getByTitle("Dept").defaultView.fields.add("DepartmentGroup");

      
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
      await sp.web.lists.getByTitle("DeptCateg").defaultView.fields.add("Department");
      await sp.web.lists.getByTitle("DeptCateg").defaultView.fields.add("Title");
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
      await batch.execute();
      await sp.web.lists.getByTitle("EmpReq").defaultView.fields.add("Description");
      await sp.web.lists.getByTitle("EmpReq").defaultView.fields.add("Category");
      await sp.web.lists.getByTitle("EmpReq").defaultView.fields.add("Department");
      await sp.web.lists.getByTitle("EmpReq").defaultView.fields.add("AssignedTo");
      await sp.web.lists.getByTitle("EmpReq").defaultView.fields.add("ReAssignTo");
      await sp.web.lists.getByTitle("EmpReq").defaultView.fields.add("Status");
      await sp.web.lists.getByTitle("EmpReq").defaultView.fields.add("Comment");
      await sp.web.lists.getByTitle("EmpReq").defaultView.fields.add("DepartmentManager");
      await sp.web.lists.getByTitle("EmpReq").defaultView.fields.add("ArchivedTimeSpan");
      await sp.web.lists.getByTitle("EmpReq").defaultView.fields.add("Author");
      await sp.web.lists.getByTitle("EmpReq").defaultView.fields.add("ArchiveDate");
      await sp.web.lists.getByTitle("EmpReq").defaultView.fields.add("DepartmentGroup");
      
    } 
    // else 
    // {
    //   alert("My EmpReq List is already existed!");
    // }
    const r = await listEnsureResult.list.select("Id")();
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
            // description: strings.PropertyPaneDescription
            description: `Departmental Request admin setup steps:`

          },
          groups: [
            {
              // groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneLabel('label',{
                  text:`Create new respective Departmental "Dispatcher groups and Support groups from the link below. \n 
                  Add users for each groups respectively"`,required:true
                }),
                PropertyPaneLink('', {
                  href: `${this.context.pageContext.web.absoluteUrl}/_layouts/15/groups.aspx`,
                  text: 'Create groups',
                  target: '_blank',
              }),
              PropertyPaneLabel('label',{
                text:`Add the Departments, Managers, Dispatcher and Support group names in the list through the link below."`,required:true
              }),
              PropertyPaneLink('', {
                href: `${this.context.pageContext.web.absoluteUrl}/Lists/Dept/AllItems.aspx`,
                text: 'Department List',
                target: '_blank',
            }),
            PropertyPaneLabel('label',{
              text:`Add the Departmental categories along with their corresponding Department's names through the link below."`,required:true
            }),
            PropertyPaneLink('', {
              href: `${this.context.pageContext.web.absoluteUrl}/Lists/DeptCateg/AllItems.aspx`,
              text: 'Departmental Category List',
              target: '_blank',
          })
          // PropertyPaneDropdown('emailType',{
          //   label:"Select the email facility",options:[
          //     {
          //       key:0,
          //       text: "Normal EMail",
          //     },
          //     {
          //       key:1,
          //       text:"Power Automate"
          //     }
          //   ],
          //   selectedKey:0
          // })
              ]
            }
          ]
          
        }
      ]
    };
  }
}

// https://gns11.sharepoint.com/sites/SiriusTeams/Lists/Dept/AllItems.aspx