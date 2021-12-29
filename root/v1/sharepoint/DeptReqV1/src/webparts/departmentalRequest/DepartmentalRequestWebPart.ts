import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import * as strings from 'DepartmentalRequestWebPartStrings';
import {IPropertyPaneConfiguration,PropertyPaneLink,PropertyPaneLabel} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
import { sp } from '@pnp/sp';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/fields";
import "@pnp/sp/views";
import AppListener from '../../services/appListener';
import 'react-toastify/dist/ReactToastify.css';
import Main from './components/Main/Main';
import SPServiceListEnsure from '../../services/SPServiceListEnsure';
/* 
    IDepartmentalRequestWebPartProps interface contains all the web context for all web parts.
*/
export interface IDepartmentalRequestWebPartProps {
  webPartContext: WebPartContext;
  departmentListName:string;
  departmentCategoryListName:string;
  employeeRequestListName:string;
};
/* 
    TODO
*/
export default class DepartmentalRequestWebPart extends BaseClientSideWebPart<IDepartmentalRequestWebPartProps> {
  private spServiceEnsure:SPServiceListEnsure = null;
  private departmentListId?:string = null;
  private appListner: AppListener = null;

  public render(): void {
    const element: React.ReactElement<IDepartmentalRequestWebPartProps> = React.createElement(
      Main,
      {
        webPartContext: this.context,  
        departmentListName:this.properties.departmentListName,
        departmentCategoryListName:this.properties.departmentCategoryListName,
        employeeRequestListName:this.properties.employeeRequestListName
      }
    );
    ReactDom.render(element, this.domElement);
  };

  public onInit(): Promise<void> {
    this.properties.departmentListName = strings.DepartmentListName;
    this.properties.departmentCategoryListName = strings.DepartmentCategoryName;
    this.properties.employeeRequestListName = strings.EmployeeRequestName;
    this.appListner = new AppListener();
    this.spServiceEnsure = new SPServiceListEnsure(this.context);
    sp.setup(this.context);
    this.appListner.setAppLogger();
    this.spServiceEnsure.createListsUsingPNP(this.properties.departmentListName,this.properties.departmentCategoryListName,this.properties.employeeRequestListName);
    return Promise.resolve();
  };

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  };

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  };

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
                href: `${this.context.pageContext.web.absoluteUrl}/Lists/${this.properties.departmentListName}/AllItems.aspx`,
                text: 'Department List',
                target: '_blank',
            }),
            PropertyPaneLabel('label',{
              text:`Add the Departmental categories along with their corresponding Department's names through the link below."`,required:true
            }),
            PropertyPaneLink('', {
              href: `${this.context.pageContext.web.absoluteUrl}/Lists/${this.properties.departmentCategoryListName}/AllItems.aspx`,
              text: 'Departmental Category List',
              target: '_blank',
          }),
          PropertyPaneLabel('label',{
            text:`The below link contains the Employee Request list where all the ticketing flow data is maintained."`,required:true
          }),
          PropertyPaneLink('', {
            href: `${this.context.pageContext.web.absoluteUrl}/Lists/${this.properties.employeeRequestListName}/AllItems.aspx`,
            text: 'Employee Request List',
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
  };
};
