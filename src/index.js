import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { counter } from './reducer/index';
import { addGun,delGuns } from './actions/action';
import thunk from 'redux-thunk';
import { Provider }from 'react-redux';
import App from './js/App';
import registerServiceWorker from './net/registerServiceWorker';

const store = createStore(counter, applyMiddleware(thunk));
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();




