import { MESSAGE_LIST, MESSAGE_READ, MESSAGE_RECV } from './actionTypes';
const initState = {
  chatMessage: [],
  unRead: 0
};

export function chat (state = initState, action) {
  switch (action.type) {
  case MESSAGE_LIST:
    const unReadCount = Array.prototype.filter.call(action.payload ? action.payload: [], item =>　!item.read).length;
    return { ...state, chatMessage: action.payload, unRead: unReadCount };
  // case MESSAGE_READ:
  // case MESSAGE_RECV:
  default:
    return state;
  }
}