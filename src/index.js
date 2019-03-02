import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';  // to create store 
import { Provider } from 'react-redux';  ///connecting react with redux framework
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//import contactReducer from './reducers/contactReducer';  // reducer should be given to the store

import rootReducer from './reducers'; //combined reducers
import { fetchAllContacts } from './actions/index';

// this is the place to create store
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

//To Setup Initial Loading
store.dispatch(fetchAllContacts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
