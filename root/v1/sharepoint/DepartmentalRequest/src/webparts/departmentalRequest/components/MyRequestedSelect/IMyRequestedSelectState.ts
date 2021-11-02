/* List of interface for All Users info */
//import { IFollowers } from "../Followers/IFollowers";
//import {IUserAll} from "./IUserAll";

import { IDetailsListProps } from "office-ui-fabric-react";
import { Ref } from "react";
import {IDepartmentList, IDispacherList} from '../DepartmentalRequest/IDepartmentList'
import {IDispatcherList} from '../DispatcherView/IDispatcherList'

export interface IMyRequestedSelectState {
    count:number,
    loading:boolean;
    selectedDept:string;
    dataFilledCheck:number;
    unlockEachPlaceCard:number;
    homeButtonUnlock:number;
    passDeptName:string;
    passStatus:string;
    raisedRequestsDepts:string[];
    openRequestsCount:number;
    inProcessRequestsCount:number;
    closedRequestsCount:number;
    totalRequestsCount:number;

    /**
     * Contains the error message that occurred while loading the data.
     * If no error message occurred, null.
     */
     errorMessage: string;

}