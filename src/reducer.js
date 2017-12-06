/** Created By ChrisWen
 *  17/12/04 
 *  Reducer
 */

import { combineReducers } from 'redux';
import { user } from './redux/user/reducer';

const Reducer = combineReducers({
  user: user
});

export default Reducer;