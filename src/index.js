import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider }from 'react-redux';
import { BrowserRouter,Route,Link,Redirect,Switch }from 'react-router-dom';
import Store from './store';
import registerServiceWorker from './net/registerServiceWorker';
import './config';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        {/* 只渲染命中的第一个Route */}

      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();




