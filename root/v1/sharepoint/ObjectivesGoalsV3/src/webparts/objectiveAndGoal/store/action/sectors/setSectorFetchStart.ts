import type { SetSectorFetchStart } from '../../operations/types';

const setSectorFetchStart = () :SetSectorFetchStart => ({
    type: 'SET_SECTOR_FETCH_START',
    payload: true
});

export default setSectorFetchStart;