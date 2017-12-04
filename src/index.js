import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider }from 'react-redux';
import { BrowserRouter,Route,Link,Redirect,Switch }from 'react-router-dom';
import App from './components/App';
import DashBoard from './components/dashboard/index';
import Auth from './components/auth/index';
import store from './store';
import registerServiceWorker from './net/registerServiceWorker';

class Test extends Component{
  render(){
    return <h1>测试</h1>;
  }
}
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          {/* 只渲染命中的第一个Route */}
          <Route path='/login' component={Auth} />
          <Route path='/dashboard' component={DashBoard}/>
          <Redirect to='/dashboard'></Redirect>
        </Switch>
        {/*<App />*/}
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();




