import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';
import decode from 'jwt-decode';
import "semantic-ui-css/semantic.min.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import { userLoggedIn } from './actions/auth';


/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
/* eslint-enable */

if(localStorage.animinderJWT) {
    const payload = decode(localStorage.animinderJWT);
    const user = { 
        token: localStorage.animinderJWT,
        email: payload.email,
        confirmed: payload.confirmed
    };
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
<BrowserRouter>
    <Provider store={store}>
        <Route component={App} />
    </Provider>
</BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
