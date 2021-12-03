import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration
  
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'ObjectivesGoalsWebPartStrings';
//import ObjectivesGoals from './components/ObjectivesGoals';
import ObjectivesGoals from './components/ObjectivesGoals';
import { IObjectivesGoalsProps } from './components/IObjectivesGoalsProps';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import {
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneSlider,
  PropertyPaneToggle,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { sp } from '@pnp/sp';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/fields";
import "@pnp/sp/views";
import { ChoiceFieldFormatType, DateTimeFieldFormatType, UrlFieldFormatType, FieldUserSelectionMode, FieldTypes  } from '@pnp/sp/fields/types';
import { Logger, ConsoleListener,FunctionListener, ILogEntry,ILogListener, LogLevel} from "@pnp/logging";

export interface IObjectivesGoalsWebPartProps {
  description: string;
  context:any;
  siteurl: string;
  spHttpClient: SPHttpClient;
  isAddOrganizationGoalButtonDisplay:boolean;
  isAddDepartmentGoalButtonDisplay : boolean;
  isAddPersonalGoalButtonDisplay : boolean;
  isIntervalDataDisplay: boolean;
  loggedInUserName: string;
  loggedInUserEmail: string;
  currentUserId:number;
  RequireGoalStatusId:number;
  //openOrganizationForm:number;
  openAddEditForm:number;
  //isOrgnizationGoalFormDisplay: boolean;
  OrganizationTabDisplay:any;
}

debugger;
var goalDepartmentOptionsListId;

export default class ObjectivesGoalsWebPart extends BaseClientSideWebPart<IObjectivesGoalsWebPartProps> {
  
  public async onInit(): Promise<void> {
    await super.onInit();

    // we always setup using the current context
    sp.setup(this.context);
    return Promise.resolve();
  }

  public render(): void {
    const element: React.ReactElement<IObjectivesGoalsProps> = React.createElement(
      ObjectivesGoals,
      {
        description: this.properties.description,
        context:this.properties.context,
        siteurl: this.context.pageContext.web.absoluteUrl,
        spHttpClient: this.context.spHttpClient,
        webUrl: this.context.pageContext.web.absoluteUrl,
        isAddOrganizationGoalButtonDisplay:this.properties.isAddOrganizationGoalButtonDisplay,
        isAddDepartmentGoalButtonDisplay:this.properties.isAddDepartmentGoalButtonDisplay,
        isAddPersonalGoalButtonDisplay:this.properties.isAddPersonalGoalButtonDisplay,
        isIntervalDataDisplay:this.properties.isIntervalDataDisplay,
        loggedInUserName:this.context.pageContext.user.displayName,
        loggedInUserEmail:this.context.pageContext.user.email,
        currentUserId:this.context.pageContext.legacyPageContext["userId"],
        RequireGoalStatusId:this.properties.RequireGoalStatusId,
        //openOrganizationForm:this.properties.openOrganizationForm,
        openAddEditForm:this.properties.openAddEditForm,
        //isOrgnizationGoalFormDisplay:this.properties.isOrgnizationGoalFormDisplay,
        OrganizationTabDisplay:this.properties.OrganizationTabDisplay,
      }
    );
    this.createListsUsingPNP();
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
    await this.createListGoalDepartmentOptions();
    await this.createListGoalSecurityAddGoal();
    await this.createListGoalOrganization();
    await this.createListGoalPersonal();   
    //await this.createListTestGoalOrganization();  
  } 
  
  createListGoalDepartmentOptions = async() =>
  {
    const listEnsureResult = await sp.web.lists.ensure("GoalDepartmentOptions", "It's contain Department Options", 100);
    if (listEnsureResult.created)    
    {
      alert("My GoalDepartmentOptions List is created!");
      const batch = sp.web.createBatch(); 
      // Department, Single Line of Text
      listEnsureResult.list.fields.inBatch(batch).addText("Department");
      // Members, Person Or Group
      listEnsureResult.list.fields.inBatch(batch).addUser("Members", FieldUserSelectionMode.PeopleAndGroups);
      // DeptAdmin, Person Or Group
      listEnsureResult.list.fields.inBatch(batch).addUser("DeptAdmin", FieldUserSelectionMode.PeopleOnly);
      await batch.execute();
      await sp.web.lists.getByTitle("GoalDepartmentOptions").defaultView.fields.add("Department");    
      await sp.web.lists.getByTitle("GoalDepartmentOptions").defaultView.fields.add("Members");
      await sp.web.lists.getByTitle("GoalDepartmentOptions").defaultView.fields.add("DeptAdmin");
    } 
     else 
    {
       //alert("My GoalDepartmentOptions List is already existed!");
     }
    const r = await listEnsureResult.list.select("Id")();
    console.log(r.Id);
    goalDepartmentOptionsListId = await r.Id;
    if(goalDepartmentOptionsListId){
      this.createListGoalDepartment();
    }
  }

  createListGoalDepartment = async() =>
  {
    const listEnsureResult = await sp.web.lists.ensure("GoalDepartment", "Goals information related Department", 100);
    if (listEnsureResult.created)    
    {
      alert("My GoalDepartment List is created!");
      const batch = sp.web.createBatch(); 
      // Goal, Multiple lines of text
      listEnsureResult.list.fields.inBatch(batch).addMultilineText("Goal",6,false);
      // Interval, Choice (menu to choose from) Monthly Target, Quarterly Objectives, Yearly Goals
      listEnsureResult.list.fields.inBatch(batch).addChoice("Interval", ["Monthly Target", "Quarterly Objectives","Yearly Goals"], ChoiceFieldFormatType.Dropdown); 
      // Department, Lookup
      listEnsureResult.list.fields.inBatch(batch).addLookup("Department",goalDepartmentOptionsListId, "Title" );     
      // StatusPercentage , Number
      listEnsureResult.list.fields.inBatch(batch).addNumber("StatusPercentage");
                    
      await batch.execute();     
      await sp.web.lists.getByTitle("GoalDepartment").defaultView.fields.add("Goal");
      await sp.web.lists.getByTitle("GoalDepartment").defaultView.fields.add("Interval");  
      await sp.web.lists.getByTitle("GoalDepartment").defaultView.fields.add("Department");
      await sp.web.lists.getByTitle("GoalDepartment").defaultView.fields.add("StatusPercentage");    
    } 
     else 
     {
       //alert("My GoalDepartment List is already existed!");
     }
    const r = await listEnsureResult.list.select("Id")();
    console.log(r.Id);
  }

  createListGoalSecurityAddGoal = async() =>
  {
    const listEnsureResult = await sp.web.lists.ensure("GoalSecurityAddGoal","Add Security Group of Organization related Add Goal", 100);
    if (listEnsureResult.created)    
    {
      alert("My GoalSecurityAddGoal List is created!");
      const batch = sp.web.createBatch(); 
      //Members, Person Or Group
      listEnsureResult.list.fields.inBatch(batch).addUser("Members", FieldUserSelectionMode.PeopleAndGroups);     
      await batch.execute();     
      await sp.web.lists.getByTitle("GoalSecurityAddGoal").defaultView.fields.add("Members");     
    } 
     else 
     {
       //alert("My GoalSecurityAddGoal List is already existed!");
     }
    const r = await listEnsureResult.list.select("Id")();
    console.log(r.Id);
  }

  createListGoalOrganization = async() =>
  {
    const listEnsureResult = await sp.web.lists.ensure("GoalOrganization", "Goals information related Organization", 100);
    if (listEnsureResult.created)    
    {
      alert("My GoalOrganization List is created!");
      const batch = sp.web.createBatch(); 
      // Goal, Multiple lines of text
      listEnsureResult.list.fields.inBatch(batch).addMultilineText("Goal",6,false);
      // Interval, Choice (menu to choose from) Monthly Target, Quarterly Objectives, Yearly Goals
      listEnsureResult.list.fields.inBatch(batch).addChoice("Interval", ["Monthly Target", "Quarterly Objectives","Yearly Goals"], ChoiceFieldFormatType.Dropdown);       
      // StatusPercentage , Number
      listEnsureResult.list.fields.inBatch(batch).addNumber("StatusPercentage");
                    
      await batch.execute();     
      await sp.web.lists.getByTitle("GoalOrganization").defaultView.fields.add("Goal");
      await sp.web.lists.getByTitle("GoalOrganization").defaultView.fields.add("Interval");       
      await sp.web.lists.getByTitle("GoalOrganization").defaultView.fields.add("StatusPercentage");  
    } 
     else 
     {
       //alert("My GoalOrganization List is already existed!");
     }
    const r = await listEnsureResult.list.select("Id")();
    console.log(r.Id);   
  }

  createListGoalPersonal = async() =>
  {
    const listEnsureResult = await sp.web.lists.ensure("GoalPersonal", "Goals information related Personal", 100);
    if (listEnsureResult.created)    
    {
      alert("My GoalPersonal List is created!");
      const batch = sp.web.createBatch(); 
      // Goal, Multiple lines of text
      listEnsureResult.list.fields.inBatch(batch).addMultilineText("Goal",6,false);
      // Interval, Choice (menu to choose from) Monthly Target, Quarterly Objectives, Yearly Goals
      listEnsureResult.list.fields.inBatch(batch).addChoice("Interval", ["Monthly Target", "Quarterly Objectives","Yearly Goals"], ChoiceFieldFormatType.Dropdown);      
      //AssignTo, Person Or Group
      listEnsureResult.list.fields.inBatch(batch).addUser("AssignTo", FieldUserSelectionMode.PeopleOnly); 
      // StatusPercentage , Number
      listEnsureResult.list.fields.inBatch(batch).addNumber("StatusPercentage");
                    
      await batch.execute();     
      await sp.web.lists.getByTitle("GoalPersonal").defaultView.fields.add("Goal");
      await sp.web.lists.getByTitle("GoalPersonal").defaultView.fields.add("Interval");  
      await sp.web.lists.getByTitle("GoalPersonal").defaultView.fields.add("AssignTo");
      await sp.web.lists.getByTitle("GoalPersonal").defaultView.fields.add("StatusPercentage");  
    } 
     else 
     {
       //alert("My GoalPersonal List is already existed!");
     }
    const r = await listEnsureResult.list.select("Id")();
    console.log(r.Id);  
  }

  // createListTestGoalOrganization = async() =>
  // {
  //   const listEnsureResult = await sp.web.lists.ensure("TestGoalOrganization","Goals information related Organization", 100);
  //   if (listEnsureResult.created)    
  //   {
  //     alert("My TestGoalOrganization List is created!");
  //     const batch = sp.web.createBatch(); 
  //     // Goal, Multiple lines of text
  //     listEnsureResult.list.fields.inBatch(batch).addMultilineText("Goal",6,false);
  //     // Interval, Choice (menu to choose from) Monthly Target, Quarterly Objectives, Yearly Goals
  //     listEnsureResult.list.fields.inBatch(batch).addChoice("Interval", ["Monthly Target", "Quarterly Objectives","Yearly Goals"], ChoiceFieldFormatType.Dropdown);       
  //     // StatusPercentage , Number
  //     listEnsureResult.list.fields.inBatch(batch).addNumber("StatusPercentage");
                    
  //     await batch.execute();     
  //     await sp.web.lists.getByTitle("TestGoalOrganization").defaultView.fields.add("Goal");
  //     await sp.web.lists.getByTitle("TestGoalOrganization").defaultView.fields.add("Interval");       
  //     await sp.web.lists.getByTitle("TestGoalOrganization").defaultView.fields.add("StatusPercentage");  
  //   } 
  //    else 
  //    {
  //      alert("My TestGoalOrganization List is already existed!");
  //    }
  //   const r = await listEnsureResult.list.select("Id")();
  //   console.log(r.Id);   
  // }

 

protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
    {
      header: {
         //description: strings.PropertyPaneDescription
         description: `Objectives and Goals admin setup steps:`
        },
      groups: [
        {
          //groupName: strings.BasicGroupName,
          groupFields: [
            // PropertyPaneTextField('description', {
            //  label: strings.DescriptionFieldLabel
            // }),
                // PropertyPaneToggle("isAddOrganizationGoalButtonDisplay",{
                //   label: "Add Organization Goal Button Display",
                // }),
                // PropertyPaneToggle("isAddDepartmentGoalButtonDisplay",{
                //   label: "Add Department Goal Button Display",
                // }),
                // PropertyPaneToggle("isAddPersonalGoalButtonDisplay",{
                //   label: "Add Personal Goal Button Display",
                // }),
            PropertyPaneLabel('label',{
                  text:`Create new respective Departmental groups from the link below, Example: OrganizationAddGoal, HR, IT etc \n 
                  Add users for each groups respectively"`,required:true
                }),
            PropertyPaneLink('', {
                  href: `${this.context.pageContext.web.absoluteUrl}/_layouts/15/groups.aspx`,
                  text: 'Create groups',
                  target: '_blank',
                 }),
            PropertyPaneLabel('label',{
                 text:`Add the "OrganizationAddGoal" group names in the column of "Members" in list through the link below."`,required:true
                 }),
            PropertyPaneLink('', {
                  href: `${this.context.pageContext.web.absoluteUrl}/Lists/GoalSecurityAddGoal/AllItems.aspx`,
                  text: 'GoalSecurityAddGoal List',
                  target: '_blank',
                }),
            PropertyPaneLabel('label',{
                 text:`Add the Department Group name in the column of "Members" with their corresponding Department's names through the link below."`,required:true
                }),
            PropertyPaneLink('', {
                  href: `${this.context.pageContext.web.absoluteUrl}/Lists/GoalDepartmentOptions/AllItems.aspx`,
                  text: 'GoalDepartmentOptions List',
                  target: '_blank',
                }),
            ]
          }
        ]
       }
     ]
   };
  }
}
