import { ADD_GUNS, DEL_GUNS }from './actionTypes';

export function counter(state = 0, action) {
  switch(action.type) {
  case ADD_GUNS:
    return state = state +1;
  case DEL_GUNS:
    return state = state-1;
  default:
    return state;
  }
}