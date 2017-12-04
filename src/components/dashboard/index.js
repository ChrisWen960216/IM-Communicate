import React,{ Component }from 'react';
import { Link }from 'react-router-dom';
export default class DashBoard extends Component {
  render(){
    return (
      <div>
        <ul>
          <li><Link to='/login'>主页</Link></li>
          <li><Link to='/dashboard'>介绍</Link></li>
        </ul>
        <h1>This is DashBoard Page</h1>
      </div>);
  }
}