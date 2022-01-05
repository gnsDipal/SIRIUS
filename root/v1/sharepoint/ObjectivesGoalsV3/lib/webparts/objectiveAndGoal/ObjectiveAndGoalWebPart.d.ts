import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IObjectiveAndGoalWebPartProps {
    description: string;
}
export default class ObjectiveAndGoalWebPart extends BaseClientSideWebPart<IObjectiveAndGoalWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=ObjectiveAndGoalWebPart.d.ts.map