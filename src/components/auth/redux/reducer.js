import { LOGIN, LOGOUT,USER_DATA }from './actionTypes';

const initState = {
  isAuth: false,
  user: 'ChrisWen',
  age: 21
};

export function auth(state=initState, action){
  switch(action.type){
  case LOGIN:
    return { ...state, isAuth: true };
  case LOGOUT:
    return { ...state, isAuth: false };
  case USER_DATA:
    return { ...state, ...action.payload };
  default: return state;
  }
}