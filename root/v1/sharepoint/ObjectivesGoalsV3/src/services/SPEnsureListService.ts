import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from '@pnp/sp';
import { ChoiceFieldFormatType, DateTimeFieldFormatType, FieldTypes, UrlFieldFormatType, FieldUserSelectionMode } from '@pnp/sp/fields/types';

var goalDepartmentOptionsListId;

debugger;
export default class SPEnsureListService{
    constructor(private context: WebPartContext){
        // Setup Context to PnPjs
        sp.setup({
          spfxContext: this.context
        });
        this.onInit();
    }

    private async onInit() {}

    //create GoalDepartmentOptions list to store the GoalDepartmentOptions related information
    public async ensureGoalDepartmentOptionsList(GoalDepartmentOptions: string): Promise<string> {
        const listEnsureResult = await sp.web.lists.ensure("GoalDepartmentOptions12", "It's contain Department Options", 100);
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
      await sp.web.lists.getByTitle("GoalDepartmentOptions12").defaultView.fields.add("Department");    
      await sp.web.lists.getByTitle("GoalDepartmentOptions12").defaultView.fields.add("Members");
      await sp.web.lists.getByTitle("GoalDepartmentOptions12").defaultView.fields.add("DeptAdmin");
    } 
     else 
    {
       alert("My GoalDepartmentOptions List is already existed!");
     }
    const r = await listEnsureResult.list.select("Id")();
    console.log(r.Id);
    goalDepartmentOptionsListId = await r.Id;
    if(goalDepartmentOptionsListId){
      this.ensureGoalDepartmentList(goalDepartmentOptionsListId);
    }
        return Promise.resolve(r.Id);     
    }

    //create GoalDepartment list to store the Department related Goals
    public async ensureGoalDepartmentList(GoalDepartment: string): Promise<string> {
        const listEnsureResult = await sp.web.lists.ensure("GoalDepartment12", "Goals information related Department", 100);
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
          await sp.web.lists.getByTitle("GoalDepartment12").defaultView.fields.add("Goal");
          await sp.web.lists.getByTitle("GoalDepartment12").defaultView.fields.add("Interval");  
          await sp.web.lists.getByTitle("GoalDepartment12").defaultView.fields.add("Department");
          await sp.web.lists.getByTitle("GoalDepartment12").defaultView.fields.add("StatusPercentage");    
        } 
         else 
         {
           alert("My GoalDepartment List is already existed!");
         }
        const r = await listEnsureResult.list.select("Id")();
        console.log(r.Id);
        return Promise.resolve(r.Id);     
    }

     //create GoalOrganization list to store the Organization related Goals
     public async ensureGoalOrganizationList(GoalOrganization: string): Promise<string> {
        const listEnsureResult = await sp.web.lists.ensure("GoalOrganization12", "Goals information related Organization", 100);   
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
          await sp.web.lists.getByTitle("GoalOrganization12").defaultView.fields.add("Goal");
          await sp.web.lists.getByTitle("GoalOrganization12").defaultView.fields.add("Interval");       
          await sp.web.lists.getByTitle("GoalOrganization12").defaultView.fields.add("StatusPercentage");  
        } 
         else 
         {
           alert("My GoalOrganization List is already existed!");
         }
        const r = await listEnsureResult.list.select("Id")();
        console.log(r.Id); 
        return Promise.resolve(r.Id);     
    }

     //create GoalSecurityAddGoal list to store the Organization related Admin's Group information
     public async ensureGoalSecurityAddGoalList(GoalSecurityAddGoal: string): Promise<string> {
        const listEnsureResult = await sp.web.lists.ensure("GoalSecurityAddGoal12","Add Security Group of Organization related Add Goal", 100);
        if (listEnsureResult.created)    
        {
            alert("My GoalSecurityAddGoal List is created!");
            const batch = sp.web.createBatch(); 
            //Members, Person Or Group
            listEnsureResult.list.fields.inBatch(batch).addUser("Members", FieldUserSelectionMode.PeopleAndGroups);     
            await batch.execute();     
            await sp.web.lists.getByTitle("GoalSecurityAddGoal12").defaultView.fields.add("Members");     
        } 
        else 
        {
            alert("My GoalSecurityAddGoal List is already existed!");
        }
        const r = await listEnsureResult.list.select("Id")();
        console.log(r.Id);
        return Promise.resolve(r.Id);     
    }

    //create GoalPersonal list to store the Personal related Goals
    public async ensureGoalPersonalList(GoalPersonal: string): Promise<string> {
        const listEnsureResult = await sp.web.lists.ensure("GoalPersonal12", "Goals information related Personal", 100);
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
            await sp.web.lists.getByTitle("GoalPersonal12").defaultView.fields.add("Goal");
            await sp.web.lists.getByTitle("GoalPersonal12").defaultView.fields.add("Interval");  
            await sp.web.lists.getByTitle("GoalPersonal12").defaultView.fields.add("AssignTo");
            await sp.web.lists.getByTitle("GoalPersonal12").defaultView.fields.add("StatusPercentage");  
        } 
        else 
        {
            alert("My GoalPersonal List is already existed!");
        }
        const r = await listEnsureResult.list.select("Id")();
        console.log(r.Id);
        return Promise.resolve(r.Id);     
    }
}//End of Main function