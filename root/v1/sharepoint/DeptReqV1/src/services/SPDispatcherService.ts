import {Web} from '@pnp/sp/presets/all';
import { IList } from "@pnp/sp/lists";
import { IAttachmentFileInfo } from "@pnp/sp/attachments";
import { Logger, LogLevel} from "@pnp/logging";
import { IDropdownOption } from 'office-ui-fabric-react';
import { IDispatcherList } from '../model/IDispatcher';

/* Main function call */
export default class SPDispatcherService{
   private webContext = null;
   private webUrl:string = null;
   private loggedInUserId?:string = null;
   private loggedInUserEmail?:string = "";
   private loggedInUserName?:string = "";
   private web = null;
   constructor(private mainProp) {  
       this.webContext = this.mainProp.webPartContext; 
     this.onInit();
   }
   private async onInit() {
       Logger.write("SPDepartmentalService init()", LogLevel.Info);
       this.webUrl = this.webContext.pageContext.web.absoluteUrl;
       this.loggedInUserId = this.webContext.pageContext.legacyPageContext["userId"];
       this.loggedInUserEmail = this.webContext.pageContext.user.email;
       this.loggedInUserName = this.webContext.pageContext.user.displayName;
       this.web = Web(this.webUrl);
     }

/* DispatcherTab related calls */

public async getDepartmentsDetails():Promise<{}>{  
  let result = await this.web.lists.getByTitle(this.mainProp.departmentListName).items.select("GroupName/Title","DepartmentGroup/Title","Manager/Title").expand("GroupName","DepartmentGroup","Manager").orderBy("Title",false).get();
  let loggedInUserDispGrps = await this.web.currentUser.groups(); 
  let SPGroupList = await this.getLoggedInUserIdSPGroupsSuccess(loggedInUserDispGrps,result);
  let dispatcherData = await this.loadAssignedTask(SPGroupList);
    return Promise.resolve(dispatcherData);
}

public async getLoggedInUserIdSPGroups(departmentDetailsArray){
   let loggedInUserDispGrps = await this.web.currentUser.groups(); 
    await this.getLoggedInUserIdSPGroupsSuccess(loggedInUserDispGrps,departmentDetailsArray);

}

public async getLoggedInUserIdSPGroupsSuccess(res,departmentDetailsArray){
 let SPGroupList = new Array();
 var obj = res, currentLoggedInUserDispatcherGroups = 0;

 for (var loggedInTemp = 0; loggedInTemp < obj.length; loggedInTemp++) {
   obj[loggedInTemp].Added = false;
   for (var dispatcherTemp = 0; dispatcherTemp < departmentDetailsArray.length; dispatcherTemp++) {
       if (obj[loggedInTemp].Title == departmentDetailsArray[dispatcherTemp].GroupName.Title && obj[loggedInTemp].Added == false) {  
           obj[loggedInTemp].Added = true;
           SPGroupList[currentLoggedInUserDispatcherGroups] = new Object();
           SPGroupList[currentLoggedInUserDispatcherGroups].groupname = obj[loggedInTemp].Title;
           currentLoggedInUserDispatcherGroups++;
       }
   }
}

  if(SPGroupList.length==0)
     {
          console.log("User not in any dispatch group");
     }
     return (SPGroupList);
}

    public async loadAssignedTask(SPGroupList){
      let deptData = [];
      var i=0, deptDataCount=0;
      for(i=0;i<SPGroupList.length;++i){
        var depCount:number = SPGroupList.length;
           let result = await this.web.lists.getByTitle(this.mainProp.employeeRequestListName).items.select("Department","AssignedTo","Author/Title").expand("Author").filter(`Status eq 'Pending' and AssignedTo eq '${SPGroupList[i].groupname}'`).orderBy("ID",false).get();
            
              if(result.length>0){
              var count:number = 0;
              let deptDispatchData = result.map((r)=>{
                  count = count + 1;
                  return{
                  deptName:r.Department,
                  dispatcherName:r.AssignedTo,
                  thisCount: count
                }
              });
              
              deptData.push({deptName:deptDispatchData[0].deptName,thisCount:count })
              deptDataCount = deptDataCount + 1;
            }
            if(result.length === 0){
              deptDataCount = deptDataCount + 1;
            }

        }
        if(deptDataCount === SPGroupList.length && deptData.length > 0){
            return deptData
        }
        else if(deptDataCount === SPGroupList.length && deptData.length === 0){
            return deptData
        }
        else{

        }
      }      
      /* DispatcherTicketView related calls */

  public async loadDispatcherListInfo(passedDeptName):Promise<IDispatcherList[]>{
      try{
          let result = await this.web.lists.getByTitle(this.mainProp.employeeRequestListName).items.select("Department","ID","DepartmentGroup","Created","Description","Category","Status","AssignedTo","ReAssignTo/Title","Author/Title","AttachmentFiles").expand("Author","ReAssignTo","AttachmentFiles").filter(`Department eq '${passedDeptName}' and Status eq 'Pending'`).orderBy("ID",false).get();

             let dispatcherDetails:IDispatcherList[] = result.map((r,index)=>{
                return{
                  ticketNumber:`INC_${r.Department}_000${r.ID}`,
                  supportDeptName:r.DepartmentGroup,
                  raisedBy:r.Author.Title,
                  issueDate:r.Created,
                  description:r.Description,
                  category:r.Category,
                  department:r.Department,
                  status:r.Status,
                  dispatcherDeptName:r.AssignedTo,
                  reAssignedTo:r.ReAssignTo,
                  dataId:r.ID,
                  attachmentFileName:r.AttachmentFiles.map((r,i)=>{
                    return{
                    FileName:r.FileName,
                    ServerRelativeUrl:r.ServerRelativeUrl
                    }
                  }),
                  getAttachmentData:r.AttachmentFiles.length?r.AttachmentFiles[0].ServerRelativeUrl:'',
                  requesterAttachmentCheck:r.AttachmentFiles.length
                }
              });
          return Promise.resolve(dispatcherDetails);
        }catch(error){
            return Promise.reject(error);
      }
   }

   public async loadDepartmentOptionsByGroupName(groupName):Promise<IDropdownOption[]>{
     try{
        let result = await this.web.siteGroups.getByName(groupName).users();   
        let groupUser:IDropdownOption[]=result.map((r,index)=>{
          return{
            key:r.Id,
            text:r.Title,
            }
          })
      return Promise.resolve(groupUser);
     }catch(error){
        return Promise.reject(error);
     }      
   }

  public async loadMultipleDispatcherAttachmentLoop(requestedId,dispatcherFileAddition):Promise<{}>{
    let list: IList = null;
    let fileInfos: IAttachmentFileInfo[] = [];
    if(dispatcherFileAddition != null){
    let file = dispatcherFileAddition;
      for(let i=0;i<file.length;++i){
        let fileName = `DISP_${file[i].name}`;
        fileInfos.push({
          name: fileName,
          content: "Dispatcher attachment"
      });
      }
      await Promise.all(fileInfos)
      .then(res=>{
       list = this.web.lists.getByTitle(this.mainProp.employeeRequestListName).items.getById(requestedId).attachmentFiles.addMultiple(res);
      })
      return await Promise.resolve(list);
   }
  }
  // newReAssignedToUser

  public async loadAddingReAssignedToData(newUser:any,idRequest:number,raisedBy):Promise<{}>{
    // this.getEmail(newReAssignedToUser.id);
    let newItem:any = {
      Status: "In Process",
      ReAssignToId: newUser.key,
    }
       let result = await this.web.lists.getByTitle(this.mainProp.employeeRequestListName).items.getById(idRequest).update(newItem);
        return result       
 }
 
 public async loadEmail(userId):Promise<string>{
   try{
   let result = await this.web.getUserById(userId).get();
   return Promise.resolve(result.Email);
   }catch(error){
      return await Promise.reject(error);
   }
   
}
} //End of Main class


