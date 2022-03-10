import { sp, Web } from '@pnp/sp/presets/all';
import { IItemAddResult } from "@pnp/sp/items";
import { IList } from "@pnp/sp/lists";
import { IAttachmentFileInfo } from "@pnp/sp/attachments";
import { graph } from "@pnp/graph";
import { Logger, LogLevel} from "@pnp/logging";
import {AssignedTicketData, MyAssignedEachPlateData} from '../model/MyRequestedEachPlateData';
import { IDropdownOption } from 'office-ui-fabric-react';
import { IOptionWithKey } from '../model/RaiseRequest';
import { IDepartmentList } from '../model/RaiseRequest';

// debugger;
export default class SPDepartmentalService{ 
    private uniqueDeptList = [];
    private departmentalListName = null;
    private webContext = null;
    private webUrl:string = null;
    private loggedInUserId?:string = null;
    private loggedInUserEmail?:string = "";
    private loggedInUserName?:string = "";
    private web = null;
    constructor(private mainProp) {    
      // Setup Context to PnPjs and MSGraph
      this.webContext = this.mainProp.webPartContext;
      this.departmentalListName = this.mainProp.departmentListName;
      sp.setup({
        spfxContext: mainProp
      });
  
      graph.setup({
       spfxContext: mainProp
      });
      // Init
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
    /* Raise a request related Calls  */

    public async loadDepartmentOptions():Promise<IOptionWithKey[]>{
      let departmentOptions:IOptionWithKey[] = [];
      let result = await this.web.lists.getByTitle(this.mainProp.departmentListName).items.select("Title").orderBy("Title",true).get();
      departmentOptions = result.map((r,index)=>{
        return{
          key:index,
          text:r.Title
        }
      });
       return await Promise.resolve(departmentOptions);    
     }

     public async loadDepartmentDetailForPost():Promise<IDepartmentList[]>{
      let departmentFAQ_deptList:IDepartmentList[] = Array();
      let result = await this.web.lists.getByTitle(this.mainProp.departmentListName).items.select("Title","GroupName/Title","DepartmentGroup/Title","Manager/Title").expand("GroupName","DepartmentGroup","Manager").orderBy("Title",true).get();
      departmentFAQ_deptList = result.map((r,index)=>{
        return{
          deptName:r.Title,
          deptGroup:r.DepartmentGroup.Title,
          deptManager:r.ManagerId,
          dispatcherName:r.GroupName.Title
        }
      });
      return await Promise.resolve(departmentFAQ_deptList);    
     }

     public async deptCategorySelect(selectedDept:any):Promise<IOptionWithKey[]>{
      let result = await this.web.lists.getByTitle(this.mainProp.departmentCategoryListName).items.select("Title","ID","Department/Title").expand("Department").get();
        const getOptionsBySelectedDept = [];
        for(var i=0;i<result.length;++i){
          if(result[i].Department.Title === selectedDept){
            getOptionsBySelectedDept.push(result[i])
            // break;
          }
        }
    let departmentCategoryOptions:IOptionWithKey[] = getOptionsBySelectedDept.map((r,index) => {
      return {
        key:index,
        text:r.Title,
      };
    });
    return await Promise.resolve(departmentCategoryOptions)
    }
    /* Loading all users belonging to present dispatcher group */
    public async loadSelectedDispatcherGroupPeople(selectedDept):Promise<[]>{
      let result = await this.web.lists.getByTitle(this.departmentalListName).items.select("Title","GroupName/Title").expand("GroupName").orderBy("Title",false).get();
          let dispatcherGroupName = null;
          dispatcherGroupName = result.filter(getGrpName);
          function getGrpName(res){
            if(res.Title === selectedDept){
              return res.GroupName.Title;
            }
          }
              let res = await this.web.siteGroups.getByName(dispatcherGroupName[0].GroupName.Title).users();
              var groupUsers:[]=res.map((r)=>{
                return{
                  eMail:r.Email,
                  name:r.Title,
                  id:r.Id
                }
              });
              return Promise.resolve(groupUsers)
          // }
    }

    public async loadEmployeeRequest(issueDescription, selectedDept, selectedDeptCategory,fileAddition,deptListCoreInfo):Promise<{}>{
     
     let selectedDeptGroup, selectedDeptManager, selectedDispatcherName;
     let selectedTitle:string = selectedDeptCategory + ' Request';
     let currentUserName = this.loggedInUserName;
     let currentUserEmail = this.loggedInUserEmail;
     let selectedFileAddOn = fileAddition;
   
     for(let i=0;i<deptListCoreInfo.length;++i){
       if(deptListCoreInfo[i].deptName === selectedDept){
         selectedDeptGroup = deptListCoreInfo[i].deptGroup;
         selectedDispatcherName = deptListCoreInfo[i].dispatcherName;
         selectedDeptManager = deptListCoreInfo[i].deptManager;
       }
     }
   
         //for email body
         let textbody = `<h3>The request details are as below:</h3><br><p>Raised by: " ${this.loggedInUserName} " <br>Category: " ${selectedDeptCategory} " <br>Description: " ${issueDescription} "<br><br>Thank you</p>`;
   
         console.log('textbody = ' + textbody);
         let EmailSubject =` ${this.loggedInUserName} raised ${selectedDeptCategory} request`;
   
         console.log('EmailSubject = ' + EmailSubject);
   
   
     if(issueDescription !== "" && selectedDept !== ""){

      const result: IItemAddResult = await this.web.lists.getByTitle(this.mainProp.employeeRequestListName).items.add({
        Title: selectedTitle,
        Description: issueDescription,
        Category: selectedDeptCategory,
        Department:selectedDept,
        Status:'Pending',
        AssignedTo: selectedDispatcherName,
        DepartmentManagerId: selectedDeptManager,
        DepartmentGroup:selectedDeptGroup
      }).then((responseJSON) => {
             this.addMultipleAttachmentLoop(responseJSON,fileAddition);   
           });
      } 
      return Promise.resolve(1);
    }

    public async addMultipleAttachmentLoop(responseJSON,fileAddition){
      let fileInfos: IAttachmentFileInfo[] = [];
      if(fileAddition != null){
      let promiseUploadAllRequesterAttachments = [];
      let file = fileAddition;
        for(let i=0;i<file.length;++i){
          let fileName = `REQ_${file[i].name}`;
          fileInfos.push({
            name: fileName,
            content: "Requester attachment"
        });
        }
      }
      Promise.all(fileInfos)
      .then(res=>{
      const list: IList = this.web.lists.getByTitle(this.mainProp.employeeRequestListName).items.getById(responseJSON.data.ID).attachmentFiles.addMultiple(res);
      });
    };

   // Assigned Issues Section Calls 
   /* 
      get the array containing the InProcess and Closed count for Assigned Tickets 
   */ 
   public async getAssignedViewCount():Promise<MyAssignedEachPlateData[]>{
      let myRequestedDepartmentsCount:MyAssignedEachPlateData[] = [];
        let result = await this.web.lists.getByTitle(this.mainProp.employeeRequestListName).items.select('Department').filter(`ReAssignToId eq ${this.loggedInUserId}`).get();
        if(result.length>0){
         var tempArr:string[]=[];
         for(let i=0;i<result.length;++i){
             tempArr.push(result[i].Department);
         }
         this.uniqueDeptList = tempArr.filter(function(elem, index) {
           return tempArr.indexOf(elem)  === index;
         });
         if(this.uniqueDeptList.length >0){
          let data:MyAssignedEachPlateData;
          this.uniqueDeptList.map(r =>{
            myRequestedDepartmentsCount.push(
             data = {
              DepartmentName:r,
              InProcess: 0,
              Closed:0,
            });
          });

          let promiseInProcessRequestCount = []; 
          let promiseClosedRequestsCount = []; 
        
         for(let i=0;i<this.uniqueDeptList.length;++i){

            promiseInProcessRequestCount.push(this.getRequestedCountByPara(this.web,myRequestedDepartmentsCount[i].DepartmentName,'In Process',this.loggedInUserId));
            promiseClosedRequestsCount.push(this.getRequestedCountByPara(this.web,myRequestedDepartmentsCount[i].DepartmentName,'Completed',this.loggedInUserId))
         }
        await Promise.all(promiseInProcessRequestCount)
         .then(result=>{
           result.map((r,index)=>{
            myRequestedDepartmentsCount[index].InProcess = r
           });
         });

        await Promise.all(promiseClosedRequestsCount)
            .then(result=>{
              result.map((r,index)=>{
               myRequestedDepartmentsCount[index].Closed = r;
              });
            });
            return await Promise.resolve(myRequestedDepartmentsCount); 
      }
    }
  }

  //Todo (Dipal) (Change the method from item to count)
  public async getRequestedCountByPara(web, deptName, status, currentUserId){
    let result = await web.lists.getByTitle(this.mainProp.employeeRequestListName).items.select('ID').filter(`ReAssignToId eq ${currentUserId} and Status eq '${status}' and Department eq '${deptName}'`).get();
    return result.length;
  }

  public async loadAssignToListInfo(inProcess,deptName):Promise<AssignedTicketData[]>{
      let ticketList:AssignedTicketData[] = [];
      let result = await this.web.lists.getByTitle(this.mainProp.employeeRequestListName).items.select("DepartmentGroup","Department","ID","Created","Description","Category","Status","AssignedTo","Comment","Author/Title","AuthorId","ReAssignTo/Title","AttachmentFiles").expand("Author","ReAssignTo","AttachmentFiles").filter(`Status eq '${inProcess}' and ReAssignToId eq ${this.loggedInUserId} and Department eq '${deptName}'`).orderBy("ID",false).get();
      console.log('result = ' + result.length);
      ticketList = result.map((r)=>{
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
              comment:r.Comment,
              authorId:r.AuthorId,
              attachmentFileName:r.AttachmentFiles.map((r,i)=>{
                return{
                FileName:r.FileName,
                ServerRelativeUrl:r.ServerRelativeUrl
                }
              }),
              getAttachmentData:r.AttachmentFiles.length?r.AttachmentFiles[0].ServerRelativeUrl:'',
        }
      })
      return Promise.resolve(ticketList);
  }

  public async loadDepartmentOptionsByGroupName(groupName):Promise<IDropdownOption[]>{
    let result = await this.web.siteGroups.getByName(`${groupName}`).users();
       let groupUser:IDropdownOption[] = result.map((r,index)=>{
         return{
            key:r.Id,
            text:r.Title,
          }
        })
      return Promise.resolve(groupUser); 
   }

  public async getAddReAssignedToData(newReAssignedToUser:any,idRequest:number,commentData:string, ticketNumber:string):Promise<{}>{
      let newItem:any = {
        Status: "In Process",
        ReAssignToId: newReAssignedToUser.key,
        Comment:commentData
      }
      let result = await this.web.lists.getByTitle(this.mainProp.employeeRequestListName).items.getById(idRequest).update(newItem);
      return result;
};

public async emailIdMethod(userId):Promise<string>{
  let result = await this.web.getUserById(userId).get();
  return Promise.resolve(result.Email)
}

public async loadCompletedWithStatusUpdate(idRequest,commentData):Promise<{}>{
  let newItem:any = {
    Status: "Completed",
    Comment:commentData
  }
  let result = await this.web.lists.getByTitle(this.mainProp.employeeRequestListName).items.getById(idRequest).update(newItem);
  return result;
}
}//End of Main function

