import type { SPContext } from '../../operations/types';
import type { SetSPContext } from '../../operations/actionTypes';


const setSPContext = (context: SPContext) : SetSPContext => (
    {
        type: 'SET_SPCONTEXT',
        payload: context
    }
);

export default setSPContext;
