import * as React from 'react'
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web, PermissionKind, IItem, IFieldInfo } from '@pnp/sp/presets/all';
import { IItemAddResult } from "@pnp/sp/items";
import { IList } from "@pnp/sp/lists";
import { IAttachmentFileInfo } from "@pnp/sp/attachments";
// import { siteUsers } from '@pnp/sp/site-users/web'
import { graph } from "@pnp/graph";
// import * as moment from 'moment';
import { Logger, LogLevel} from "@pnp/logging";
import {UserContext} from '../webparts/departmentalRequest/components/Main/Main';
import { Dropdown, IDropdown, IDropdownOption, optionProperties, TextField, Tooltip } from 'office-ui-fabric-react';
import { IOptionWithKey } from '../model/RaiseRequest';
import { IDepartmentList } from '../model/RaiseRequest';
import {MyAssignedEachPlateData, MyRequestedEachPlateData, IMyRequestList} from '../model/MyRequestedEachPlateData'
  debugger;
  let spfxContext = null;
  let uniqueDeptList = [],myRequestedEachPlateData = [];
  
  export default class SPMyRequestService{ 
    private webContext = null;
    private webUrl:string = null;
    private loggedInUserId?:string = null;
    private loggedInUserEmail?:string = "";
    private loggedInUserName?:string = "";
    private web = null;
    constructor(private context) {    
      // Setup Context to PnPjs and MSGraph
      this.webContext = context;
      sp.setup({
        spfxContext: context
      });
  
      graph.setup({
       spfxContext: context
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

/* My Requested Issues Call */

public async loadMyRequestsViewCount():Promise<MyRequestedEachPlateData[]>{
    let myRequestedDepartmentsCount:MyRequestedEachPlateData[] = [];
    uniqueDeptList = [];
      const web = Web(this.webUrl);
      let result = await web.lists.getByTitle('EmpReq').items.select('*','AttachmentFiles').expand('AttachmentFiles').filter(`Author eq ${this.loggedInUserId}`).orderBy("ID",false).get();

      console.log('result = ' + result);
      if(result.length>0){
       var tempArr:string[]=[];
       for(let i=0;i<result.length;++i){
           tempArr.push(result[i].Department);
       }
       uniqueDeptList = tempArr.filter(function(elem, index) {
         return tempArr.indexOf(elem)  === index;
       });
       if(uniqueDeptList.length >0){
        let data:MyRequestedEachPlateData;
        uniqueDeptList.map((r,index)=>{
          myRequestedDepartmentsCount.push(
           data = {
            DepartmentName:r,
            Open:0,
            InProcess: 0,
            Closed:0,
          });
        })
        let promiseOpenRequestCount = []; 
        let promiseInProcessRequestCount = []; 
        let promiseClosedRequestsCount = []; 
      
       for(let i=0;i<uniqueDeptList.length;++i){
          promiseOpenRequestCount.push(this.getRequestedCountByPara(web,myRequestedDepartmentsCount[i].DepartmentName,'Pending',this.loggedInUserId));
          promiseInProcessRequestCount.push(this.getRequestedCountByPara(web,myRequestedDepartmentsCount[i].DepartmentName,'In Process',this.loggedInUserId));
          promiseClosedRequestsCount.push(this.getRequestedCountByPara(web,myRequestedDepartmentsCount[i].DepartmentName,'Completed',this.loggedInUserId))
       }

       await Promise.all(promiseOpenRequestCount)
       .then(result=>{
         result.map((r,index)=>{
          myRequestedDepartmentsCount[index].Open = r
         });
       });

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
    let result = await web.lists.getByTitle('EmpReq').items.select(`*`).filter(`Author eq ${currentUserId} and Status eq '${status}' and Department eq '${deptName}'`).get();
    return result.length;
  }

  public async loadDeptListInfo(selectedStatus,dept):Promise<IMyRequestList[]>{
    try{
      let myReqData:IMyRequestList[] = [];
      let result = await this.web.lists.getByTitle('EmpReq').items.select("*","Author/Title","ReAssignTo/Title","AttachmentFiles").expand("Author","ReAssignTo","AttachmentFiles").filter(`Status eq '${selectedStatus}' and Author eq ${this.loggedInUserId} and Department eq '${dept}'`).orderBy("ID",false).get();
      myReqData = result.map(r=>{
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
          reAssignedTo:r.ReAssignTo?r.ReAssignTo:'',
          dataId:r.ID,
          comment:r.Comment?r.Comment:'',
          attachmentFileName:r.AttachmentFiles.map((r,i)=>{
            return{
            FileName:r.FileName,
            ServerRelativeUrl:r.ServerRelativeUrl
            }
          }),
          getAttachmentData:r.AttachmentFiles.length?r.AttachmentFiles[0].ServerRelativeUrl:''
        }
      });
      return Promise.resolve(myReqData);
    }catch(error){
      return Promise.reject(error);
    }
   }
} //End of Main class