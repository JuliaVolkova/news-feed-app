import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import doLog from './reducer/doSomething';
import { dispatch } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import doExample from './actionCreators/actionCreators';

const store = createStore(doLog, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(doExample());

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
            <AppContainer>
                <Component />
            </AppContainer>
            </Router>
        </Provider>,
        document.getElementById('root'),
    )
};

render(App);
if (module.hot) {
    module.hot.accept('./components/App', () => { render(App) })
}