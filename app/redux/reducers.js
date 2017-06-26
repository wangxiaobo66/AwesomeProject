import { combineReducers } from 'redux'

function comments(state={},action){
    switch (action.type){
        default:
            return state;
    }
}

export const APP = combineReducers({
    comments
});