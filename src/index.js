import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import doLog from './reducer/doSomething';
import doExample from './actions/action';
import { dispatch } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router';
import { AppContainer } from 'react-hot-loader';

const store = createStore(doLog, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(doExample(0));

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
};

render(App);


if (module.hot) {
    module.hot.accept('./components/App', () => { render(App) })
}