/** Created By ChrisWen
 *  17/12/04 
 *  Reducer
 */

import { ADD_GUNS,DEL_GUNS } from '../actions/actionTypes';

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