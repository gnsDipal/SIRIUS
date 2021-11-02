import {IDispatcherList} from '../DispatcherView/IDispatcherList'

export interface IDispatcherSelectState{
    count : number,
      dataFilledCheck:number,
      myIssueUnlock:number,
      nextCount:number,
      bgColorRaiseRequest:string,
      bgColorFollowers:string,
      bgColorFollowing:string,
      colorRaiseRequest:string,
      colorFollowers:string,
      colorFollowing:string,
      loading:boolean,
      errorMessage:string,
      selectedDept:string,
      selectedDeptCategory:string,
      requestDescription:string,
      onlyDepartmentInfoState:string[],
      deptDetails:IDispatcherList[],
      passDeptName:string,
      unlockEachPlaceCard:number,
      homeButtonUnlock:number
}