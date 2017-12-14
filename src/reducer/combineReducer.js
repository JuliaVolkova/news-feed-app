import {combineReducers} from 'redux';
import * as reducers from './changeTopicReducer';

const combineReducer = combineReducers(reducers);

export default combineReducer;
