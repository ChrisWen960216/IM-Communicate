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

export function getMessageList () {
  return dispatch => {
    return axions.get('/users/getmsglist').then(response => {
      if (response.status === 200 && response.data.code === 0) {
        return dispatch(messageList(response.data.msgs));
      }
    });
  };
}