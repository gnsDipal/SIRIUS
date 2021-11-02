/* List of interface for All Users info */
//import { IFollowers } from "../Followers/IFollowers";
//import {IUserAll} from "./IUserAll";

import { Ref } from "react";
import {IMyRequestList} from './IMyRequestedIssues'

export interface IMyRequestedIssuesState {
    // Users : IUserAll[],
    // Followers : IFollowers[],
    // Following : IFollowers[],
    // count:number,
    // bgColorRaiseRequest:string,
    // bgColorFollowers:string,
    // bgColorFollowing:string,
    // colorRaiseRequest:string,
    // colorFollowers:string,
    // colorFollowing:string,
    // loading:boolean,
    // selectedDept:string,
    // selectedDeptCategory:string,
    // requestDescription:string,
    // previous:number,
    // next:number
    /**
     * Contains the error message that occurred while loading the data.
     * If no error message occurred, null.
     */
    errorMessage: string;
    loading:boolean;
    ticketCount:number;
    deptDetails:IMyRequestList[];
    homeButton:number,
    myIssuesUnlock:number;
    archiveIssuesUnlock:number;
    noDataUnlock:number;
}