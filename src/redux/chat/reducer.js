import { MESSAGE_LIST, MESSAGE_READ, MESSAGE_RECV } from './actionTypes';
const initState = {
  chatMessage: [],
  unRead: 0
};

export function chat (state = initState, action) {
  switch (action.type) {
  case MESSAGE_LIST:
    const unReadCount = Array.prototype.filter.call(action.payload, item => 　!item.read).length;
    console.log(unReadCount);
    return { ...state, chatMessage: action.payload, unRead: unReadCount };
  // case MESSAGE_READ:
  case MESSAGE_RECV:
    //console.log(action.payload);
    const basicMessage = state.chatMessage ? state.chatMessage : [];
    return { ...state, chatMessage: [...basicMessage, action.payload], unRead: state.unRead + 1 };
  default:
    return state;
  }
}