import * as React from 'react'
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web, PermissionKind, IItem, IFieldInfo } from '@pnp/sp/presets/all';
// import { siteUsers } from '@pnp/sp/site-users/web'
import { graph } from "@pnp/graph";
import * as moment from 'moment';
import { Logger, LogLevel} from "@pnp/logging";
import {UserContext} from '../webparts/departmentalRequest/components/Main/Main';
import {MyRequestedEachPlateData} from '../modal/MyRequestedEachPlateData'
  debugger;
  let spfxContext:WebPartContext = null;
  let uniqueDeptList = [],myRequestedEachPlateData = [];
  export default class SPDepartmentalService{ 
    private webUrl:string = null;
    private loggedInUserId?:string = null;
    constructor(private context: WebPartContext) {    
      // Setup Context to PnPjs and MSGraph
      sp.setup({
        spfxContext: this.context
      });
  
      graph.setup({
       spfxContext: this.context
      });

      

      // Init
      this.onInit();
    }
    private async onInit() {
      Logger.write("SPDepartmentalService init()", LogLevel.Info);
      this.webUrl = spfxContext.pageContext.web.absoluteUrl;
      this.loggedInUserId = spfxContext.pageContext.legacyPageContext["userId"];
    }


    // public async initialDeptGetMethod (mainContext):Promise<string[]> {
          
    //   try{
    //      const web = Web(mainContext.pageContext.web.absoluteUrl);
    //      let result = await web.lists.getByTitle('EmpReq').items.select('*').filter(`ReAssignToId eq ${mainContext.pageContext.legacyPageContext["userId"]}`).get();
    //      console.log('result = ' + result);
    //      if(result.length>0){
    //       var tempArr:string[]=[];
    //       for(let i=0;i<result.length;++i){
    //           tempArr.push(result[i].Department);
    //       }
    //       uniqueDeptList = tempArr.filter(function(elem, index) {
    //         return tempArr.indexOf(elem)  === index;
    //       });
    //       if(uniqueDeptList.length >0){
    //         for(let j=0;j<uniqueDeptList.length;++j){
    //           myRequestedEachPlateData.push({
    //             department:uniqueDeptList[j],
    //             inProcessCount:0,
    //             closedCount:0,
    //             totalCount:0
    //           });
    //         }
    //       }
    //       if(uniqueDeptList.length>0){ 
    //         return Promise.resolve(uniqueDeptList)
    //     }
    //   }
    //   }
    //   catch{
    //       console.log('Error in get method');
    //       return;
    //       }    
    // }

   /* 
      get the array containing the 
   */ 
   async getAssignedViewCount(mainContext):Promise<MyRequestedEachPlateData[]>{
      let myRequestedDepartmentsCount:MyRequestedEachPlateData[] = [];
        const web = Web(mainContext.pageContext.web.absoluteUrl);
        let result = await web.lists.getByTitle('EmpReq').items.select('*').filter(`ReAssignToId eq ${mainContext.pageContext.legacyPageContext["userId"]}`).get();
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
              InProcess: 0,
              Closed:0,
              Total:0,
            });
          })
          
          let firstIndexInProcess = this.getRequestedCountByPara(web,myRequestedDepartmentsCount[0].DepartmentName,'In Process',this.loggedInUserId)
          for(let i=0;i<myRequestedDepartmentsCount.length;++i){
              
          }


          let promiseInProcessRequestCount = []; 
          let promiseClosedRequestsCount = []; 
        
          for(let i=0;i<uniqueDeptList.length;++i){
        
            //  promiseInProcessRequestCount.push(this.getInProcessRequestsCount(uniqueDeptList[i],mainContext.pageContext.web.absoluteUrl, mainContext.pageContext.legacyPageContext["userId"]));
        
            //  promiseClosedRequestsCount.push(this.getclosedRequestsCount(uniqueDeptList[i],mainContext.pageContext.web.absoluteUrl, mainContext.pageContext.legacyPageContext["userId"]));

            promiseInProcessRequestCount.push(this.getRequestedCountByPara(web,myRequestedDepartmentsCount[0].DepartmentName,'In Process',this.loggedInUserId));
            promiseClosedRequestsCount.push(this.getRequestedCountByPara(web,myRequestedDepartmentsCount[0].DepartmentName,'Completed',this.loggedInUserId))
         }
        
        //  Promise.all(promiseInProcessRequestCount)
        //  .then(result=>{
        //    result.map((r,index)=>{
        //     MyRequestedDepartmentsCount[index].InProcess = r
        //    });
        //  });

        //  Promise.all(promiseClosedRequestsCount)
        //     .then(result=>{
        //       result.map((r,index)=>{
        //        MyRequestedDepartmentsCount[index].Closed = r;
        //       });
        //     });
         return Promise.resolve(myRequestedDepartmentsCount);
      }
    }
  }



  
  public async getInProcessRequestsCount(deptName,siteUrl,currentUserId){

      const web = Web(siteUrl);
      let result = await web.lists.getByTitle('EmpReq').items.select(`*`).filter(`ReAssignToId eq ${currentUserId} and Status eq 'In Process' and Department eq '${deptName}'`).get();
      console.log('result = ' + result.length);
      return result.length;

  }

  public async getclosedRequestsCount(deptName,siteUrl,currentUserId){
    const web = Web(siteUrl);
    let result = await web.lists.getByTitle('EmpReq').items.select(`*`).filter(`ReAssignToId eq ${currentUserId} and Status eq 'Completed' and Department eq '${deptName}'`).get();
    return result.length;

  }

  //Todo (Dipal) (Change the method from item to count)
  public async getRequestedCountByPara(web, deptName, status, currentUserId){
    let result = await web.lists.getByTitle('EmpReq').items.select(`*`).filter(`ReAssignToId eq ${currentUserId} and Status eq '${status}' and Department eq '${deptName}'`).get();
    return result.length;
  }


}


