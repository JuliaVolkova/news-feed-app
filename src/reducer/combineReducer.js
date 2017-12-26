import {combineReducers} from 'redux';
import * as reducers from './changeTopicReducer';
import {getComments} from './commentsReducer';

const combineReducer = combineReducers(Object.assign(reducers, {getComments}));

export default combineReducer;
