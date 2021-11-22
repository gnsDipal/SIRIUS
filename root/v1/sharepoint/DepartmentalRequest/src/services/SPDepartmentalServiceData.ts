import * as React from 'react'
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp, Web, PermissionKind, IItem, IFieldInfo } from '@pnp/sp/presets/all';
// import { siteUsers } from '@pnp/sp/site-users/web'
import { graph } from "@pnp/graph";
import * as moment from 'moment';
import { Logger, LogLevel} from "@pnp/logging";
import {UserContext} from '../webparts/departmentalRequest/components/Main/Main';
import SPDepartmentalService from './SPDepartmentalService';
import {MyRequestedEachPlateData} from '../modal/MyRequestedEachPlateData'

  debugger;
  let uniqueDeptList = [];
  
  export default class SPDepartmentalServiceData{ 
      private departmentalService: SPDepartmentalService = null;
      constructor(private context: WebPartContext){
            this.departmentalService = new SPDepartmentalService(this.context);
            this.onInit();
      }
    private async onInit(){
        
        }
      getAssignedViewCountData(mainContext):Promise<MyRequestedEachPlateData[]>{
        return this.departmentalService.getAssignedViewCount(mainContext);
         
      }
      }
      

      // getAssignedViewCount():Promise<MyRequestedEachPlateData[]>{
      //       let myRequestedDepartmentsCount:MyRequestedEachPlateData[] = [];
      //       this.departmentalService.initialDeptGetMethod()
      //       .then((res)=>{
      //          if(res.length>0){
      //             for(let j=0;j<res.length;++j){
      //               myRequestedEachPlateData.push({
      //                 department:res[j],
      //                 inProcessCount:0,
      //                 closedCount:0,
      //                 totalCount:0
      //               });
      //             }
      //             // SetTotalRaisedData(res.length);
      //             // allRequestsLoop(res);
      //           }
      //      })
      // }
  
