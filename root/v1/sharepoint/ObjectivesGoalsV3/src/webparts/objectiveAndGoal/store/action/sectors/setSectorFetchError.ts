import type { SetSectorFetchError } from '../../operations/types';

const setSectorFetchError = (error:string) : SetSectorFetchError => ({
    type: 'SET_SECTOR_FETCH_ERROR',
    payload: error
});

export default setSectorFetchError;