import type { SetPersonal, Personal } from '../../operations/types';

const setPersonal = (appData:any) : SetPersonal => ({
    type: 'SET_PERSONAL',
    payload: appData
    //payload: Personal
});

export default setPersonal;