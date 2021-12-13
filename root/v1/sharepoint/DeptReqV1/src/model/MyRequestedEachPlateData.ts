export interface MyAssignedEachPlateData {
    DepartmentName?:string;
    InProcess?:number;
    Closed?:number;
}

export interface MyRequestedEachPlateData {
    DepartmentName?:string;
    Open?:number;
    InProcess?:number;
    Closed?:number;
}

export interface reAssignedUser{
    Id:number;
    Title:string;
}

export interface fileElements{
    FileName:string;
    ServerRelativeUrl:string;
}
 /* Assigned Tickets View Interface */
export interface AssignedTicketData {
    ticketNumber:string;
    dispatcherDeptName:string;
    supportDeptName:string;
    raisedBy:string;
    issueDate:string;
    description:string;
    category:string;
    department:string;
    status:string;
    reAssignedTo:reAssignedUser;
    dataId:number;
    comment:string;
    attachmentFileName:fileElements[];
    getAttachmentData:string;
    authorId:number;
}

export interface passUser{
    key:number;
    text:string;
}

/* My Requested Issues View Interface */

export interface reAssignedUser{
    Id:number;
    Title:string;
}

export interface IMyRequestList {
    ticketNumber:string;
    dispatcherDeptName:string;
    supportDeptName:string;
    raisedBy:string;
    issueDate:string;
    description:string;
    category:string;
    department:string;
    status:string;
    reAssignedTo:reAssignedUser;
    dataId:number;
    comment:string;
    attachmentFileName:fileElements[];
    getAttachmentData:string;
}

