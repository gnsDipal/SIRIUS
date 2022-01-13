
import { 
    setSectorFetchStart, 
    setSectorFetchComplete, 
    setSectorFetchError 
} from "./setSectorActions";
import SPService from "../../../../../services/SPService";
import type { 
    AppData, 
    DepartmentSectorData
} from '../../operations/types';

export const getAppData = (dispatch: Function, getStore:any) => {
    const store = getStore();
    dispatch(setSectorFetchStart());
    let appData:AppData = {Sectors:[]=[]};

    const mainContext = store.SPContext; 
    let spService: SPService = null;
    spService = new SPService(mainContext);
    let orgData = spService.getOrganizationData();
    let deptData = spService.getDepartmentData();
    let persData = spService.getPersonalData();
    const monthly = 'Monthly Target';
    const quarterly = 'Quarterly Objectives';
    const yearly = 'Yearly Goals';
    return Promise.all([orgData, deptData, persData]).then(data=>{
        data.map((d,i)=>{
            let yrlData = d.filter(val=>val.Interval === yearly);
            let quartData = d.filter(val=>val.Interval === quarterly);
            let monthData = d.filter(val=>val.Interval === monthly);
            if(i == 0) { // for Orgamization
                appData.Sectors.push({
                    Id: 1,
                    Title: "Organization",
                    IsSelected:false,
                    Data: {
                        Yearly: yrlData,
                        Quartly: quartData,
                        Monthly: monthData
                    }
                });
            } else if(i == 1) { // for Departments
                let departmentData: DepartmentSectorData[] =[];
                // Get Unique departments
                let uniqueDepartments = d.map(item => item.Department[0].Title)
                .filter((value, index, self) => self.indexOf(value) === index);

               // FILTER DATA BY DEPARTMENT AND INTERVALS
                uniqueDepartments.map(y=>{
                    yrlData = d.filter(val=>val.Department[0].Title === y && val.Interval === yearly);
                    quartData = d.filter(val=>val.Department[0].Title === y && val.Interval === quarterly);
                    monthData = d.filter(val=>val.Department[0].Title === y && val.Interval === monthly);
                    departmentData.push(
                        {
                            DepartmentId: yrlData[0].DepartmentId[0],
                            DepartmentName: y,
                            IsSelected: false,
                            DepartmentData : {
                                Yearly: yrlData,
                                Quartly: quartData,
                                Monthly: monthData
                            }
                        }
                    );
                    
                });
                appData.Sectors.push({
                    Id: 1,
                    Title: "Department",
                    IsSelected:false,
                    Data: departmentData
                });
            } else if(i == 2) { // for Personal
                appData.Sectors.push({
                    Id: 1,
                    Title: "Personal",
                    IsSelected:false,
                    Data: {
                        Yearly: yrlData,
                        Quartly: quartData,
                        Monthly: monthData
                    }
                });
            }
        });
        dispatch(setSectorFetchComplete());
        return appData;
    });
}