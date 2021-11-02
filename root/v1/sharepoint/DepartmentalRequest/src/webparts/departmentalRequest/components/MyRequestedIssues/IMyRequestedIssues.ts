export interface IDepartmentList {
    deptName:string,
    deptGroup:string,
    deptManager:string,
    dispatcherName:string
}

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
    attachmentFileName:File;
    getAttachmentData:string;
}