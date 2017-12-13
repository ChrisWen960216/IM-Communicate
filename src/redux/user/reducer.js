import { ERROR_MSG, LOAD_DATA, AUTH_SUCCESS, LOG_OUT } from './actionTypes';
import { getRedirectPath } from '../../util';

const initState = {
  redirectTo: '',
  message: '',
  user: '',
  type: ''
};

export function user (state = initState, action) {
  switch (action.type) {
  case AUTH_SUCCESS:
    return { ...state, message: '', ...action.payload, redirectTo: getRedirectPath(action.payload) };
  case LOAD_DATA:
    return { ...state, message: '', ...action.payload };
  case ERROR_MSG:
    return { ...state, message: action.message };
  case LOG_OUT:
    console.log({ ...initState, redirectTo: '/login' });
    return { ...initState, redirectTo: '/login' };
  default:
    return state;
  }
}