import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import doLog from './reducer/doSomething';
import doExample from './actions/action';
import  { dispatch } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router'

const store = createStore(doLog, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(doExample(0));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
