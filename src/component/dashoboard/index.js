import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from 'antd-mobile';

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
    const pathname = this.props.location;
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
        icon: 'Genius ',
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
    return (
      <div>
        <NavBar mode='dard'>{navList.find(value => {return value.path === pathname;})}</NavBar>
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