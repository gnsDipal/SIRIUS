import type { SetOrganization, Organization } from '../../operations/types';

const setOrganization = (appData:any) : SetOrganization => ({
    type: 'SET_ORGANIZATION',
    payload: appData
    //payload: Organization
});

export default setOrganization;
