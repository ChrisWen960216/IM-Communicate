import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';

import NavLinkBar from '../navlink';

function Boss () {
  return <h1>Boss-Component</h1>;
}

function Genius () {
  return <h1>Genius-Component</h1>;
}
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
    console.log(user);
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: 'Genius列表',
        component: Boss,
        hide: user.type === 'Genius'
      },
      {
        path: '/genius',
        text: 'BOSS',
        icon: 'job',
        title: 'Boss列表',
        component: Genius,
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
        component: userCeneter
      }
    ];

    const navBarTitle = navList.find(item => item.path === pathname).title;

    return (
      <div id='dashboard'>
        <NavBar mode='dard' >{navBarTitle}</NavBar>
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