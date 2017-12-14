import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Result, WhiteSpace, List, Button, Modal } from 'antd-mobile';
import cookies from 'browser-cookies';

import { logOut } from '../../redux/user/action';

class User extends Component {
  constructor (props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showConfirm: false
    };
  }

  logOut () {
    const { alert } = Modal;
    alert.call(undefined, '注销', '确认退出?', [
      { text: '取消' },
      {
        text: '确认', onPress: () => {
          cookies.erase('userId');
          this.props.logOut();
        } }
    ]);
  }

  render () {
    const { user } = this.props;
    const { Item } = List;
    const { Brief } = Item;
    //console.log('render', this.props.user);
    return user.user ? (
      <div>
        <Result
          img={<img src={require(`../../img/avatar/${user.avatar}.png`)} style={{ width: 50 }} alt='用户头像' />}
          title={user.user}
          message={user.type === 'Boss' ? user.company : null} />
        <List renderHeader={() => ('简介')}>
          <Item multipleLine>
            {user.title}
            {user.description.split('\n').map((item, index) => {
              return <Brief key={index}>{item}</Brief>;
            })}
            {user.salary ? <Brief>薪资标准:{user.salary}元</Brief> : null}
          </Item>
        </List>
        <WhiteSpace />
        <Button type='default' className='logout-btn' onClick={this.logOut}>退出登录</Button>
      </div>
    ) : <Redirect to={user.redirectTo} />;
  }
}

function mapStateToProps (state) {
  console.log('state', state.user);
  return {
    user: state.user
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    logOut: () => {dispatch(logOut());}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);