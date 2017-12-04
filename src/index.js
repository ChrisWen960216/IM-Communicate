import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }from 'react-redux';
import { BrowserRouter,Route,Link }from 'react-router-dom';
import App from './js/App';
import store from './store/index';
import registerServiceWorker from './net/registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to='/main'>主页</Link></li>
          <li><Link to='/intro'>介绍</Link></li>
          <li><Link to='/blog'>博客</Link></li>
        </ul>
        <Route path='/main' exact component={App} />
        {/*<App />*/}
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();




