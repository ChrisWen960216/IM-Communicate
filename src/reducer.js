/** Created By ChrisWen
 *  17/12/04 
 *  Reducer
 */

import { combineReducers } from 'redux';
import { counter }from './components/app/redux/reducer';
import { auth } from './components/auth/redux/reducer';

const Reducer = combineReducers({
  counter: counter,
  auth: auth
});

export default Reducer;