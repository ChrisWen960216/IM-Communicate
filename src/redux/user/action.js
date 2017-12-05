import axios from 'axios';
import { REGISTER_SUCCESS,ERROR_MSG } from './actionTypes';

function errorMsg(message){
  console.log(message);
  return {
    message,
    type: ERROR_MSG
  };
}

function registerSuccess(data){
  console.log(data);
  return {
    payload: data,
    type: REGISTER_SUCCESS
  };
}

export function register({ user, password, repeatPassword,type }){
  if(!user || !password || !type){
    return errorMsg('用户名Or密码不能为空');
  }
  if(password !== repeatPassword){
    return errorMsg('两次密码不一致！');
  }
  return dispatch => {axios.post('/user/register', { user,password,type }).then(response=>{
    if(response.status === 200 && response.data.code === 0){
      dispatch(registerSuccess({ user,password,type }));
    }else{
      dispatch(errorMsg(response.data.message));
    }
  });
  };
}