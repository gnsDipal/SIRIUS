export interface IDepartmentList {
    deptName:string;
    deptGroup:string;
    deptManager:number;
    dispatcherName:string
}

export interface passUser{
    id:number;
    text:string;
}

export interface reAssignedUser{
    Id:number;
    Title:string;
}

export interface  IChartList {
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
    comment:number;
}