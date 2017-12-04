import { ADD_GUNS, DEL_GUNS }from './actionTypes';

export function addGuns() {
  return {
    type: ADD_GUNS
  };
}

export function delGuns() {
  return {
    type: DEL_GUNS
  };
}

export function addGunsAsync() {
  return dispatch => {
    return setTimeout(()=>{dispatch(addGuns());}, 2000);
  };
}