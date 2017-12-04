import { LOGIN, LOGOUT, USER_DATA }from './actionTypes';
import axios from 'axios';

export function login(){
  return { type:LOGIN };
}

export function logout(){
  return { type:LOGOUT };
}

export function userData(data){
  console.log(data);
  return {
    type: USER_DATA,
    payload: data
  };
}