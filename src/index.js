import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch   } from 'react-router-dom';

import LogIn from './contanier/login';
import Register from './contanier/register';
import AuthRoute from './component/authRouter';
import BossInfo from './contanier/bossInfo';
import GeniusInfo from './contanier/geniusInfo';

import DashBoard from './component/dashoboard';

import Store from './store';
import registerServiceWorker from './net/registerServiceWorker';
import './config';
import './style/App.scss';

// Boss Genius me msg
ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <div>
        <AuthRoute />
        <Switch>
          <Route path='/login' exact component = {LogIn}/>
          <Route path='/register' exact component = {Register}/>
          <Route path='/bossinfo' component={BossInfo} />
          <Route path='/geniusinfo' component={GeniusInfo} />
          <Route component={DashBoard}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();




