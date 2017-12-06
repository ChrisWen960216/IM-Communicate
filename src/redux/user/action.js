import axios from 'axios';
import { REGISTER_SUCCESS, ERROR_MSG, LOGIN_SUCCESS, LOAD_DATA } from './actionTypes';

function errorMsg (message) {
  return {
    message,
    type: ERROR_MSG
  };
}

function registerSuccess (data) {
  return {
    payload: data,
    type: REGISTER_SUCCESS
  };
}

function loginSuccess (data) {
  console.log('data', data);
  return {
    payload: data,
    type: LOGIN_SUCCESS
  };
}

function loadSuccess (data) {
  return {
    payload: data,
    type: LOAD_DATA
  };
}

export function register ({ user, password, repeatPassword, type }) {
  if (!user || !password || !type) {
    return errorMsg('用户名Or密码不能为空');
  }
  if (password !== repeatPassword) {
    return errorMsg('两次密码不一致！');
  }
  return dispatch => {
    axios.post('/users/register', { user, password, type }).then(response => {
      if (response.status === 200 && response.data.code === 0) {
        dispatch(registerSuccess({ user, password, type }));
      } else {
        dispatch(errorMsg(response.data.message));
      }
    });
  };
}

export function login ({ user, password }) {
  if (!user || !password) {
    return errorMsg('用户名Or密码不能为空');
  }
  return dispatch => {
    axios.post('/users/login', { user, password }).then(response => {
      if (response.status === 200 && response.data.code === 0) {
        const type = response.data.data.type;
        dispatch(loginSuccess({ user, type }));
      } else {
        dispatch(errorMsg(response.data.message));
      }
    });
  };
}

export function loadData (data) {
  return loadSuccess(data);
}

