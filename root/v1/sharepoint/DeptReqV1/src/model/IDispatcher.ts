export interface reAssignedUser{
    Id:number;
    Title:string;
}

export interface passUser{
    key:number;
    text:string;
}

export interface fileElements{
    FileName:string;
    ServerRelativeUrl:string;
}

export interface IDispatcherList {
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
    requesterAttachmentCheck:number;
}