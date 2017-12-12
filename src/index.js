import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import doLog from './reducer/doSomething';
import {dispatch} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';
import createSagaMiddleware from 'redux-saga';
import { fetchArticles } from "./sagas/saga";

const initialState = {
    articles: [
        {
            title: 'name',
            url: 'vk.ru',
            byline: 'somebody',
            abstract: 'do-dod-dod-dooo'
        }
    ],
    currentTopic: '',
    topics: [
        "World",
        "Politics",
        "Science",
        "Technology",
        "Books",
        "Art"
    ],
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(doLog, initialState, applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
sagaMiddleware.run(fetchArticles);
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