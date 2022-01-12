import type { SetDepartment, Department } from '../../operations/types';

const setDepartment = (appData:any) : SetDepartment => ({
    type: 'SET_DEPARTMENT',
    payload: appData
    // payload: Department
});

export default setDepartment;