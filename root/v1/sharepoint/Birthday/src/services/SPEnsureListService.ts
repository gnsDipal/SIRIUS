import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from '@pnp/sp';
import { ChoiceFieldFormatType, DateTimeFieldFormatType, FieldTypes, UrlFieldFormatType } from '@pnp/sp/fields/types';

export default class SPEnsureListService{
    constructor(private context: WebPartContext){
        // Setup Context to PnPjs
        sp.setup({
          spfxContext: this.context
        });
        this.onInit();
    }

    private async onInit() {}

    //create list to store the configuration for widget set by admin in Microsoft teams
    public async ensureConfigurationList(ConfigListName: string): Promise<string> {
        const listEnsureResult = await sp.web.lists.ensure(ConfigListName, "Defines the configuration settings for webparts in teams", 100);    
        if (listEnsureResult.created){
            console.log("Configuration list is created.");
            const batch = sp.web.createBatch();
            listEnsureResult.list.fields.inBatch(batch).addMultilineText("Settings",6,false);
            listEnsureResult.list.fields.inBatch(batch).addText("Key");
            listEnsureResult.list.fields.inBatch(batch).addText("ExternalAPI");
            listEnsureResult.list.fields.inBatch(batch).addBoolean("IsTeamsIcon");
            await batch.execute();
            await sp.web.lists.getByTitle(ConfigListName).defaultView.fields.add("Settings");
            await sp.web.lists.getByTitle(ConfigListName).defaultView.fields.add("Key");
            await sp.web.lists.getByTitle(ConfigListName).defaultView.fields.add("ExternalAPI");
            await sp.web.lists.getByTitle(ConfigListName).defaultView.fields.add("IsTeamsIcon");
        }
        else
            console.log("Configuration list is already exists.");
        const r = await listEnsureResult.list.select("Id")();
        return Promise.resolve(r.Id);
    }

    //create image library to store the images for birthday and anniversary
    public async ensureImageLibrary(ImageLibraryName: string): Promise<string> {
        const listEnsureResult = await sp.web.lists.ensure(ImageLibraryName, "Birthday and Anniversary Images list", 109);
        if(listEnsureResult.created){
            console.log("Image Library is created.");
            const batch = sp.web.createBatch();
            listEnsureResult.list.fields.inBatch(batch).addChoice("Category", ["Birthday", "Anniversary"], ChoiceFieldFormatType.Dropdown);     
            await batch.execute();
            await sp.web.lists.getByTitle(ImageLibraryName).defaultView.fields.add("Category");
        } 
        else 
            console.log("Image Library is already exists.");

        const r = await listEnsureResult.list.select("Id")();
        return Promise.resolve(r.Id);
    }

    //Create list to store the email details will use to send wish to desired person
    public async ensureUserList(UserListName: string): Promise<string> {
        const listEnsureResult = await sp.web.lists.ensure(UserListName, "Users details list", 100);
        if (listEnsureResult.created){
            console.log("User List is created.");
            const batch = sp.web.createBatch(); 
            listEnsureResult.list.fields.inBatch(batch).addText("name");
            listEnsureResult.list.fields.inBatch(batch).addText("firstName");
            listEnsureResult.list.fields.inBatch(batch).addText("lastName");
            listEnsureResult.list.fields.inBatch(batch).addText("email");
            listEnsureResult.list.fields.inBatch(batch).addText("department"); 
            listEnsureResult.list.fields.inBatch(batch).addDateTime("birthDate",DateTimeFieldFormatType.DateOnly);   
            listEnsureResult.list.fields.inBatch(batch).addDateTime("hireDate",DateTimeFieldFormatType.DateOnly);
            listEnsureResult.list.fields.inBatch(batch).addCalculated("birthdayMonth", "=MONTH(birthDate)", DateTimeFieldFormatType.DateOnly, FieldTypes.Number);
            listEnsureResult.list.fields.inBatch(batch).addCalculated("hireDayMonth", "=MONTH(hireDate)", DateTimeFieldFormatType.DateOnly, FieldTypes.Number);
            await batch.execute();
            await sp.web.lists.getByTitle(UserListName).defaultView.fields.add("name");
            await sp.web.lists.getByTitle(UserListName).defaultView.fields.add("firstName");
            await sp.web.lists.getByTitle(UserListName).defaultView.fields.add("lastName");
            await sp.web.lists.getByTitle(UserListName).defaultView.fields.add("email");
            await sp.web.lists.getByTitle(UserListName).defaultView.fields.add("department");
            await sp.web.lists.getByTitle(UserListName).defaultView.fields.add("birthDate");
            await sp.web.lists.getByTitle(UserListName).defaultView.fields.add("hireDate");
        } 
        else 
            console.log("User List is already exists.");

        const r = await listEnsureResult.list.select("Id")();
        return Promise.resolve(r.Id);
    }

    public async ensureEmailList(EmailListName: string): Promise<string> {
        const listEnsureResult = await sp.web.lists.ensure(EmailListName, "Email sending list", 100);
        if (listEnsureResult.created){
            console.log("Email List is created.");
            const batch = sp.web.createBatch();
            listEnsureResult.list.fields.inBatch(batch).addText("EmailSubject"); 
            listEnsureResult.list.fields.inBatch(batch).addMultilineText("EmailBody",3,true);
            listEnsureResult.list.fields.inBatch(batch).addText("EmailTo"); 
            listEnsureResult.list.fields.inBatch(batch).addText("EmailCCTo"); 
            listEnsureResult.list.fields.inBatch(batch).addText("EmailFrom");
            listEnsureResult.list.fields.inBatch(batch).addUrl("ActivityEmail",UrlFieldFormatType.Image);            
            await batch.execute();
            await sp.web.lists.getByTitle(EmailListName).defaultView.fields.add("EmailSubject");
            await sp.web.lists.getByTitle(EmailListName).defaultView.fields.add("EmailBody");
            await sp.web.lists.getByTitle(EmailListName).defaultView.fields.add("EmailTo");
            await sp.web.lists.getByTitle(EmailListName).defaultView.fields.add("EmailCCTo");
            await sp.web.lists.getByTitle(EmailListName).defaultView.fields.add("EmailFrom");
            await sp.web.lists.getByTitle(EmailListName).defaultView.fields.add("ActivityEmail");
        } 
        else 
            console.log("Email List is already exists.");

        const r = await listEnsureResult.list.select("Id")();
        return Promise.resolve(r.Id);
    }
}//End of Main function