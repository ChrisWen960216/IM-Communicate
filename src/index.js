import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider }from 'react-redux';
import { BrowserRouter,Route,Link,Redirect,Switch }from 'react-router-dom';
import App from './components/app/index';
import DashBoard from './components/dashboard/index';
import Auth from './components/auth/index';
import Store from './store';
import registerServiceWorker from './net/registerServiceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        {/* 只渲染命中的第一个Route */}
        <Route path='/login' component={App} />
        <Route path='/dashboard' component={DashBoard}/>
        <Redirect to='/dashboard'></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();




