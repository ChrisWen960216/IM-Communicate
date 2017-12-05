import { ERROR_MSG, REGISTER_SUCCESS, LOGIN_SUCCESS, LOAD_DATA } from './actionTypes';
import { getRedirectPath } from '../../util';

const initState = {
  redirectTo: '',
  message: '',
  isAuth: false,
  user: '',
  type: ''
};

export function user (state = initState, action) {
  switch (action.type) {
  case REGISTER_SUCCESS:
    return { ...state, message: '', isAuth: true, ...action.payload, redirectTo: getRedirectPath(action.payload) };
  case LOGIN_SUCCESS:
    return { ...state, message: '', isAuth: true, ...action.payload, redirectTo: getRedirectPath(action.payload) };
  case LOAD_DATA:
    return { ...state, message: '', isAuth: true, ...action.payload };
  case ERROR_MSG:
    return { ...state, isAuth: false, message: action.message };
  default:
    return state;
  }
}