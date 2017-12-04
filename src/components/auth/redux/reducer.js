import { LOGIN, LOGOUT }from './actionTypes';

export function auth(state={ isAuth:false, user:'ChrisWen' }, action){
  switch(action.type){
  case LOGIN:
    return { ...state, isAuth: true };
  case LOGOUT:
    return { ...state, isAuth: false };
  default: return state;
  }
}