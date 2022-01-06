import type { SetSPContext, SPContext } from '../../operations/types';

const setSPContext = (context: SPContext) : SetSPContext => ({
    type: 'SET_SPCONTEXT',
    payload: context
});

export default setSPContext;