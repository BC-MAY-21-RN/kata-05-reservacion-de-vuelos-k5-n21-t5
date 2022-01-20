import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './Reducers';
import userData from './dataReducer';

const rootReducer = combineReducers({ userReducer, userData });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
