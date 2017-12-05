import { REGISTER_SUCCESS, ERROR_MSG } from './actionTypes';

const initState = {
  message: '',
  isAuth: false,
  user:'',
  password:'',
  type:''
};

export function user(state = initState, action){
  switch(action.type){
  case REGISTER_SUCCESS:
    return { ...state, message:'', isAuth:true, ...action.payload };
  case ERROR_MSG:
    return { ...state, isAuth:false, message: action.message };
  default:
    return state;
  }
}