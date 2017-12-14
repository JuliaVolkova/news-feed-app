import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import combineReducer from './reducer/combineReducer';
import {dispatch} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/saga";
import logger from 'redux-logger'

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, logger);

const store = createStore(combineReducer, initialState, composeEnhancers(middleware));
sagaMiddleware.run(rootSaga);
export default store;

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <AppContainer>
                    <Component/>
                </AppContainer>
            </Router>
        </Provider>,
        document.getElementById('root'),
    )
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    })
}