import React, { Component } from 'react';
import io from 'socket.io-client';
class Chat extends Component {
  componentDidMount () {
    const socket = io('ws://localhost:7000');
  }
  render () {
    return (<h2>Chat with user:{this.props.match.params.user}</h2>);
  }
}

export default Chat;