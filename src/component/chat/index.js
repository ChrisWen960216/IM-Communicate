import React, { Component } from 'react';
import io from 'socket.io-client';
import { List, InputItem } from 'antd-mobile';
import { connect } from 'react-redux';
import { getMessageList } from '../../redux/chat/action';

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
    const from = this.props.user;
    socket.emit('sendMessage', { text: this.state.text });
    //console.log(this.state.text);
    this.setState({ text: '' });
  }

  componentDidMount () {
    this.props.getMessageList();
    // socket.on('receiveMessage', data => {
    //   this.setState({
    //     message: [...this.state.message, data.text]
    //   });
    // });
  }
  render () {
    return (
      <div>
        {this.state.message.map((item, index) => {
          return <p key={index}>{item}</p>;
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
    chat: state.chat
  };
}

function mapDispatchToProps (dispatch, ownProps) {
  return {
    getMessageList: () => {dispatch(getMessageList());}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);