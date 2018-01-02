import React, { Component } from 'react';
import io from 'socket.io-client';
import { List, InputItem, NavBar } from 'antd-mobile';
import { connect } from 'react-redux';
import { getMessageList, sendMessage, receiveMessage } from '../../redux/chat/action';

const socket = io('ws://localhost:7000');

class Chat extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: '',
      message: []
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage () {
    const from = this.props.user._id;
    const to = this.props.match.params.user;
    const message = this.state.text;
    this.props.sendMessage({ from, to, message });
    this.setState({ text: '' });
  }

  componentDidMount () {
    this.props.getMessageList();
    this.props.receiveMessage();
    socket.on('receiveMessage', data => {
      this.setState({
        message: [...this.state.message, data.text]
      });
    });
  }
  render () {
    const user = this.props.match.params.user;
    const Item = List.Item;
    return (
      <div>
        <NavBar mode='dark'>{this.props.match.params.user}</NavBar>
        {this.props.chat.chatMessage.map((item, index) => {
          return item._id === user ? (
            <List  key={index}>
              <Item>对方发来的: {item.content}</Item>
            </List>) :
            (
              <List key={index}>
                <Item extra=''>我发送的: {item.content}</Item>
              </List>);
        })}
        <List id='chat'>
          <InputItem
            placeholder='请输入消息'
            value={this.state.text} onChange={(v) => { this.setState({ text: v }); }}
            extra={<span onClick={this.sendMessage}>发送</span>}>
            消息
          </InputItem>
        </List>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    chat: state.chat,
    user: state.user
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    getMessageList: () => { dispatch(getMessageList()); },
    sendMessage: ({ from, to, message }) => { dispatch(sendMessage({ from, to, message })); },
    receiveMessage: () => {dispatch(receiveMessage());}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);