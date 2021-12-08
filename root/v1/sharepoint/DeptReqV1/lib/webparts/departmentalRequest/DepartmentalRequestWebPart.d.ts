import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/fields";
import "@pnp/sp/views";
import 'react-toastify/dist/ReactToastify.css';
export interface IDepartmentalRequestWebPartProps {
    webPartContext: WebPartContext;
}
export default class DepartmentalRequestWebPart extends BaseClientSideWebPart<IDepartmentalRequestWebPartProps> {
    private appListner;
    onInit(): Promise<void>;
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    private createListsUsingPNP;
    createListDepartment: () => Promise<void>;
    createListDepartmentCategory: () => Promise<void>;
    createEmpReq: () => Promise<void>;
    createArchiveSettings: () => Promise<void>;
    createListEmail: () => Promise<void>;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=DepartmentalRequestWebPart.d.ts.map