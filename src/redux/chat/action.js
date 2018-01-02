import axions from 'axios';
import io from 'socket.io-client';
import { MESSAGE_LIST, MESSAGE_READ, MESSAGE_RECV } from './actionTypes';
const socket = io('ws://localhost:7000');

function messageList (messages) {
  return {
    type: MESSAGE_LIST,
    payload: messages
  };
}

function messageReceive (message) {
  return {
    type: MESSAGE_RECV,
    payload: message
  };
}

export function getMessageList () {
  return dispatch => {
    return axions.get('/users/getmsglist').then(response => {
      if (response.status === 200 && response.data.code === 0) {
        //console.log(response.data);
        return dispatch(messageList(response.data.data));
      }
    });
  };
}

export function sendMessage ({ from, to, message }) {
  return dispatch => {
    socket.emit('sendMessage', { from, to, message });
  };
}

export function receiveMessage () {
  return dispatch => {
    socket.on('receiveMessage', data => {
      return dispatch(messageReceive(data));
    });
  };
}