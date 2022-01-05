import type { SetSectorFetchComplete } from '../../operations/types';

const setSectorFetchComplete = () :SetSectorFetchComplete => ({
    type: 'SET_SECTOR_FETCH_COMPLETE',
    payload: true
});

export default setSectorFetchComplete;