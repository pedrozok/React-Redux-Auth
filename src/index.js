import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import Login from './containers/login';
import Dashboard from './containers/dashboard';
import Profile from './containers/profile';

import Authentication from './components/require_auth';

import reducers from './reducers';

// Redux Thunk
import ReduxThunk from 'redux-thunk'

// Routing
import {Router, Route, browserHistory} from 'react-router';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

// if we have a token, the user will be authenticated
if (token) {
  // update the app state accordingly
  store.dispatch({ type: 'DO_LOGIN'});
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Login}/>
      <Route path="/" component={App}>
         <Route path="dashboard" component={Authentication(Dashboard)}/>
         <Route path="profile" component={Authentication(Profile)}/>
       </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'));
