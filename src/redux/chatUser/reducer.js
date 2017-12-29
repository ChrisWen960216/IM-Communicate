import { USER_LIST } from './actionTypes';


const initState = {
  userList: []
};

export function chatUser (state = initState, action) {
  switch (action.type) {
  case USER_LIST:
    return { ...state, userList: action.payload };
  default:
    return state;
  }
}