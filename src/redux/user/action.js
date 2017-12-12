import axios from 'axios';
import { ERROR_MSG, LOAD_DATA, AUTH_SUCCESS } from './actionTypes';

function errorMsg (message) {
  return {
    message,
    type: ERROR_MSG
  };
}

function authSuccess (object) {
  const { password, ...data } = object;
  return {
    payload: data,
    type: AUTH_SUCCESS
  };
}

function loadSuccess (data) {
  console.log({
    payload: data.data,
    type: LOAD_DATA
  });
  return {
    payload: data.data,
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
        dispatch(authSuccess({ user, password, type }));
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
        dispatch(authSuccess({ user, type }));
      } else {
        dispatch(errorMsg(response.data.message));
      }
    });
  };
}

export function loadData (data) {
  return loadSuccess(data);
}

export function update (data) {
  return dispatch => {
    axios.post('/users/update', data).then(response => {
      if (response.status === 200 && response.data.code === 0) {
        dispatch(authSuccess(response.data.data));
      } else {
        dispatch(errorMsg(response.data.message));
      }
    });
  };
}

