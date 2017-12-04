import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { counter } from '../reducer/index';

const store = createStore(counter, compose(applyMiddleware(thunk), window.devToolsExtension?window.devToolsExtension():f=>f));
export default store;