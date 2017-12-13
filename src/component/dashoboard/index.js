import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from 'antd-mobile';

import BossComponent from '../boss';
import GeniusComponent from '../genius';
import NavLinkBar from '../navlink';
import User from '../user';

function message () {
  return <h1>消息列表</h1>;
}

function userCeneter () {
  return <h1>个人中心</h1>;
}

class DashBoard extends Component {

  render () {
    const { user } = this.props;
    if (!user.type) {
      return null;
    }
    const { pathname } = this.props.location;
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: 'Genius列表',
        component: BossComponent,
        hide: user.type === 'Genius'
      },
      {
        path: '/genius',
        text: 'BOSS',
        icon: 'job',
        title: 'Boss列表',
        component: GeniusComponent,
        hide: user.type === 'Boss'
      },
      {
        path: '/message',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: message
      },
      {
        path: '/usercenter',
        text: '我',
        icon: 'user',
        title: '用户中心',
        component: User
      }
    ];

    const navBarTitle = navList.find(item => item.path === pathname).title;

    const userList = navList.map((item) => {
      return <Route key={item.path} path={item.path} component={item.component} />;
    });

    return (
      <div id='dashboard'>
        <NavBar mode='dard' className='fix-header'>{navBarTitle}</NavBar>
        <div>
          <Switch>
            {userList}
          </Switch>
        </div>
        <NavLinkBar data={navList}/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  };
}
function mapDispatchToProps (dispatch, ownProps) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);