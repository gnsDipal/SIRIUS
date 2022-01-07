import type { SetSectors, Sector } from '../../operations/types';

const setSectors = (appData:any) : SetSectors => ({
    type: 'SET_SECTORS',
    payload: appData
});

export default setSectors;