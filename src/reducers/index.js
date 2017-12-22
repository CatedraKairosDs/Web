import {combineReducers} from 'redux'
import * as profilesReducer from './profiles';

export default combineReducers(Object.assign(
    profilesReducer,
));