import { combineReducers } from 'redux';
import doSomething from './doSomething';

const mainReducer = combineReducers({
    doSomething
});

export default mainReducer;