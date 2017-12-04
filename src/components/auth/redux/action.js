import { LOGIN, LOGOUT }from './actionTypes';

export function login(){
  return { type:LOGIN };
}

export function logout(){
  return { type:LOGOUT };
}