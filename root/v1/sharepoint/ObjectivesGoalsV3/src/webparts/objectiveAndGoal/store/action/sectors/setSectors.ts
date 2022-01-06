import type { SetSectors, Sector } from '../../operations/types';

const setSectors = (sectors: Sector[]) : SetSectors => ({
    type: 'SET_SECTORS',
    payload: sectors
});

export default setSectors;