import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from 'components/app';
import LoginPage from 'components/login/login-page';

import reducers from 'reducers';

// import routes from 'routes';

import startChat, {chatMiddleWare} from './chat';

const initialState = window.INITIAL_STATE;
const createStoreWithMiddleware = applyMiddleware(chatMiddleWare)(createStore);
const store = createStoreWithMiddleware(reducers(initialState));


startChat(store);

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LoginPage}></IndexRoute>
            </Route>
        </Router>
    </Provider>,
    app
);
