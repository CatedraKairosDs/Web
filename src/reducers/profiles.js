import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedProfiles= createReducer({}, {
    [types.SET_SEARCHED_PROFILES](state,action){
        let newState={};
        for(var i=0; i<action.profiles.length+1;i++){
            if(i === action.profiles.length){
                newState[101]=action.pages.totalPages
            }else{
                newState[action.profiles[i]._id]= action.profiles[i]
            }
        }
        return newState;
    }
});

export const profileCount=  createReducer(0,{
    [types.SET_SEARCHED_PROFILES](state,action){
        return action.profiles.length;
    },
    [types.ADD_PROFILE](state,action){
        return state +1;
    }
});