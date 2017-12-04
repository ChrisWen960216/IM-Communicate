/** Created By ChrisWen
 *  17/12/04 
 *  Reducer
 */

import { ADD_GUNS,DEL_GUNS } from '../actions/actionTypes';
import { combineReducers } from 'react-redux';
import { counter }from './components/app/redux/reducer';
import { auth } from './components/auth/redux/reducer';

const reducer = combineReducers({
  counter: counter,
  auth: auth
});

export default reducer;