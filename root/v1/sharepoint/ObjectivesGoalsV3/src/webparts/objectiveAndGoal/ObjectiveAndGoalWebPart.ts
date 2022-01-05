import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext} from '@microsoft/sp-webpart-base';

import * as strings from 'ObjectiveAndGoalWebPartStrings';
import ObjectiveAndGoal from './components/ObjectiveAndGoal';
import { IObjectiveAndGoalProps } from './components/IObjectiveAndGoalProps';
import Home from './components/Home';

export interface IObjectiveAndGoalWebPartProps {
  description: string;
  webPartContext: WebPartContext;
}

export default class ObjectiveAndGoalWebPart extends BaseClientSideWebPart<IObjectiveAndGoalWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IObjectiveAndGoalWebPartProps> = React.createElement(
      ObjectiveAndGoal,
      {
        description: this.properties.description,
        webPartContext: this.context
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
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
