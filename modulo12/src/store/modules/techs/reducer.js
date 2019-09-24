import produce from 'immer';

export const INITIAL_STATE = [];

export default function techd(state= INITIAL_STATE, action){
    return produce(state, draft => {
        switch(action.type){
            case 'ADD_TECH': {
                draft.push(action.payload.tech);
                break;
            }
            default:
        }
    })
}