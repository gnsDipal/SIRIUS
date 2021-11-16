/* List of interface for All Users info */
//import { IFollowers } from "../Followers/IFollowers";
//import {IUserAll} from "./IUserAll";

import { Ref } from "react";
import { Attachment } from "sp-pnp-js/lib/graph/attachments";
import { IMSGraphInterface } from "../../../../services/msGraphProvider";
import {IConversationService} from './IDepartmentalRequestProps'

export interface IDepartmentalRequestState {
    // Users : IUserAll[],
    // Followers : IFollowers[],
    // Following : IFollowers[],
    count:number;
    bgColorRaiseRequest:string;
    bgColorFollowers:string;
    bgColorFollowing:string;
    colorRaiseRequest:string;
    colorFollowers:string;
    colorFollowing:string;
    loading:boolean;
    selectedDept:string;
    selectedDeptCategory:string;
    requestDescription:string;
    myIssueUnlock:number;
    nextCount:number;
    dataFilledCheck:number;
    initialRaisedCount:number;
    totalRaisedIssuesCount:number
    dispatcherViewUnlock:number;
    assignedToViewUnlock:number;
    managerViewUnlock:number;
    archiveTimeSpan:number;
    fileAddition:File[];
    managerCheckForManagerView:number;
    notificationTest:number;
    msGraphProvider: IMSGraphInterface;
    raisedDispatcherGroupMembersEmailIds:number[];
    dispatcherShow:boolean;
    assignedShow:boolean;
    isSettingsPanelOpen:boolean,
    // conversationService: IConversationService;
    

    /**
     * Contains the error message that occurred while loading the data.
     * If no error message occurred, null.
     */
     errorMessage: string;

}