import { USER_LIST } from './actionTypes';
import axios from 'axios';

function userList (data) {
  return {
    type: USER_LIST,
    payload: data
  };
}

export function getUserList (type) {
  return dispatch => {
    axios.get(`/users/list?type=${type}`).then(response => {
      if (response.data.code === 0) {
        dispatch(userList(response.data));
      }
    });
  };
}