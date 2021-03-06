import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneSlider,
  PropertyPaneToggle,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext} from '@microsoft/sp-webpart-base';
import * as strings from 'ObjectiveAndGoalWebPartStrings';
import ObjectiveAndGoal from './components/ObjectiveAndGoal';
import SPEnsureListService from '../../services/SPEnsureListService';


export interface IObjectiveAndGoalWebPartProps {
  webPartContext: WebPartContext;
}

let SPListsEnsureService: SPEnsureListService = null;
debugger;
export default class ObjectiveAndGoalWebPart extends BaseClientSideWebPart<IObjectiveAndGoalWebPartProps> {

  isGoalOrganizationListDisable = false;
  isGoalDepartmentListDisable = false;
  isGoalPersonalListDisable = false;

  protected async onInit(){
    SPListsEnsureService = new SPEnsureListService(this.context);
    if(this.context.sdks.microsoftTeams){         
      await SPListsEnsureService.ensureGoalDepartmentOptionsList(strings.goalDepartmentOptionsListName)
      .then((res:string)=> {
          if(res)
            this.createListsUsingPNP();
      });            
    }
    else      
      this.createListsUsingPNP();
  }

  public render(): void {
    const element: React.ReactElement<IObjectiveAndGoalWebPartProps> = React.createElement(
      ObjectiveAndGoal,
      {
        webPartContext: this.context
      }
    );
    ReactDom.render(element, this.domElement);
  }

  private createListsUsingPNP = async() => 
  {   await SPListsEnsureService.ensureGoalDepartmentOptionsList(strings.goalDepartmentOptionsListName)
      .then(async(res:string) => {
        if(res)
            await SPListsEnsureService.ensureGoalDepartmentList(strings.goalDepartmentListName)
            .then(async(res:string) => {
              if(res)
                  await SPListsEnsureService.ensureGoalOrganizationList(strings.goalOrganizationListName)
                  .then(async(res:string) => {
                    if(res)
                      await SPListsEnsureService.ensureGoalSecurityAddGoalList(strings.goalSecurityAddGoalListName)
                      .then(async(res:string) => {
                        if(res)
                          await SPListsEnsureService.ensureGoalPersonalList(strings.goalPersonalListName)
                          .then((res:string) => {
                            if(res)
                              console.log("All lists are created.");
                          });                         
                      });                     
                  });
            });
      });   
  } 

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          // header: {
          //   description: strings.PropertyPaneDescription
          // },
          groups: [
            {
              // groupName: strings.BasicGroupName,
              groupFields: [
                // PropertyPaneTextField('description', {
                //       label: strings.DescriptionFieldLabel
                //    }),               
                PropertyPaneLabel('label',{
                      text:`Changes in the "Organization" related Goals`,
                    }),
                PropertyPaneLink('', {
                      href: `${this.context.pageContext.web.absoluteUrl}/Lists/GoalOrganization/AllItems.aspx`,
                      text: 'GoalOrganization List',
                      target: '_blank',
                      disabled: this.isGoalOrganizationListDisable,
                    }),
                  
                PropertyPaneLabel('label',{
                      text:`Changes in the "Department" related Goals`,
                    }),
                PropertyPaneLink('', {
                      href: `${this.context.pageContext.web.absoluteUrl}/Lists/GoalDepartment/AllItems.aspx`,
                      text: 'GoalDepartment List',
                      target: '_blank',
                      disabled: this.isGoalDepartmentListDisable,
                    }),
                PropertyPaneLabel('label',{
                      text:`Changes in the "Personal" related Goals`,
                    }),
                PropertyPaneLink('', {
                      href: `${this.context.pageContext.web.absoluteUrl}/Lists/GoalPersonal/AllItems.aspx`,
                      text: 'GoalPersonal List',
                      target: '_blank',
                      disabled: this.isGoalPersonalListDisable,
                    }),  
              ]
            }
          ]
        }
      ]
    };
  }
}
