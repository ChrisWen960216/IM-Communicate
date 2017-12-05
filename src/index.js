import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }from 'react-redux';
import { BrowserRouter,Route }from 'react-router-dom';

import LogIn from './contanier/login';
import Register from './contanier/register';
import AuthRoute from './component/authRouter';

import Store from './store';
import registerServiceWorker from './net/registerServiceWorker';
import './config';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        {/*<Route path='/boss' exact></Route>*/}
        <Route path='/login' exact component = {LogIn}/>
        <Route path='/register' exact component = {Register}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();




