import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from '@pnp/sp';
import { DateTimeFieldFormatType, FieldUserSelectionMode, FieldTypes } from '@pnp/sp/fields/types';

export default class SPServiceListEnsure{ 
    private departmentListId?:string = null;
    constructor(private context: WebPartContext) {
      // Setup Context to PnPjs and MSGraph
      sp.setup({
        spfxContext: this.context
      });

      // Init
      // this.onInit();
    }
    /* Create required Lists for admin settings */
    public createListsUsingPNP(departmentListName, departmentCategoryListName, employeeRequestListName){
        this.createListDepartment(departmentListName,departmentCategoryListName, employeeRequestListName)
    };
   public async createListDepartment(departmentListName,departmentCategoryListName, employeeRequestListName)
    {
      const listEnsureResult = await sp.web.lists.ensure(departmentListName, "Department details list", 100);
      if (listEnsureResult.created)    
      {
        const batch = sp.web.createBatch(); 
        listEnsureResult.list.fields.inBatch(batch).addUser("Manager", FieldUserSelectionMode.PeopleAndGroups);
        listEnsureResult.list.fields.inBatch(batch).addUser("GroupName", FieldUserSelectionMode.PeopleAndGroups);
        listEnsureResult.list.fields.inBatch(batch).addUser("DepartmentGroup", FieldUserSelectionMode.PeopleAndGroups);
        await batch.execute();
        await sp.web.lists.getByTitle(departmentListName).defaultView.fields.add("Manager");
        await sp.web.lists.getByTitle(departmentListName).defaultView.fields.add("GroupName");
        await sp.web.lists.getByTitle(departmentListName).defaultView.fields.add("DepartmentGroup");
      } 
      
      const r = await listEnsureResult.list.select("Id")();
      this.departmentListId = await r.Id;
      if(this.departmentListId){
        this.createListDepartmentCategory(departmentCategoryListName,employeeRequestListName);
      }
    };
  
   public async createListDepartmentCategory (departmentCategoryListName,employeeRequestListName){
      const listEnsureResult = await sp.web.lists.ensure(departmentCategoryListName, "Dept details list", 100);
      if (listEnsureResult.created)    
      {
        
        const batch = sp.web.createBatch(); 
        listEnsureResult.list.fields.inBatch(batch).addLookup("Department",this.departmentListId, "Title");
        await batch.execute();
        await sp.web.lists.getByTitle(departmentCategoryListName).defaultView.fields.add("Department");
        await sp.web.lists.getByTitle(departmentCategoryListName).defaultView.fields.add("Title");
      }
      const r = await listEnsureResult.list.select("Id")();
      console.log(r.Id);
      if(r.Id){
        this.createEmpReq(employeeRequestListName);
      }
    };
  
    public async createEmpReq (employeeRequestListName) 
    {
      const listEnsureResult = await sp.web.lists.ensure(employeeRequestListName, "EmpReq details list", 100);
      if (listEnsureResult.created)    
      {
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
        await sp.web.lists.getByTitle(employeeRequestListName).defaultView.fields.add("Description");
        await sp.web.lists.getByTitle(employeeRequestListName).defaultView.fields.add("Category");
        await sp.web.lists.getByTitle(employeeRequestListName).defaultView.fields.add("Department");
        await sp.web.lists.getByTitle(employeeRequestListName).defaultView.fields.add("AssignedTo");
        await sp.web.lists.getByTitle(employeeRequestListName).defaultView.fields.add("ReAssignTo");
        await sp.web.lists.getByTitle(employeeRequestListName).defaultView.fields.add("Status");
        await sp.web.lists.getByTitle(employeeRequestListName).defaultView.fields.add("Comment");
        await sp.web.lists.getByTitle(employeeRequestListName).defaultView.fields.add("DepartmentManager");
        await sp.web.lists.getByTitle(employeeRequestListName).defaultView.fields.add("ArchivedTimeSpan");
        await sp.web.lists.getByTitle(employeeRequestListName).defaultView.fields.add("Author");
        await sp.web.lists.getByTitle(employeeRequestListName).defaultView.fields.add("ArchiveDate");
        await sp.web.lists.getByTitle(employeeRequestListName).defaultView.fields.add("DepartmentGroup");
      } 
      const r = await listEnsureResult.list.select("Id")();
    };
};