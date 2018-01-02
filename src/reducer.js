/** Created By ChrisWen
 *  17/12/04 
 *  Reducer
 */

import { combineReducers } from 'redux';
import { user } from './redux/user/reducer';
import { chatUser } from './redux/chatUser/reducer';
import { chat } from './redux/chat/reducer';

const Reducer = combineReducers({
  user: user,
  chat: chat,
  chatUser: chatUser
});

export default Reducer;