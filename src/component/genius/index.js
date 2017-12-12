import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { Card, WhiteSpace, WingBlank } from 'antd-mobile';

import { getUserList } from '../../redux/chat/action';

class GeniusComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: ''
    };
  }
  componentDidMount () {
    this.props.getUserList.call(undefined, 'Boss');
  }
  render () {
    console.log(this.props.chat);
    if (!this.props.chat) {
      return (<h1>没有什么好看的</h1>);
    }
    const { Header, Body } = Card;
    return (
      <WingBlank>
        <WhiteSpace/>
        {this.props.chat.filter(item => item.avatar).map((item, index) => {
          return (<Card key={index}>
            <Header title={item.user} thumb={require(`../../img/avatar/${item.avatar}.png`)} extra={<span>{item.company}</span>}></Header>
            <Body>{item.description.split('\n').map((_item, _index) => {
              return <div key={_index}>{_item}</div>;
            })}</Body>
          </Card>);
        })}
      </WingBlank>
    );
  }
}

function mapStateToProps (state) {
  return {
    chat: state.chat.userList.data
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    getUserList: (data) => {dispatch(getUserList(data));}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GeniusComponent);