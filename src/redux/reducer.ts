/**
 * IMPORTS
 */
import { combineReducers } from 'redux';
import { user } from '../features/user';

import { persistConfig, persistReducer } from './persist';


/**
 * I create a root reducer.
 */
const reducer = combineReducers({
  [user.name]: user.reducer,
  
}) as any;


/**
 * I create a persisted root reducer.
 */
const persistedReducer = persistReducer(persistConfig, reducer);


/**
 * EXPORTS
 */
export { persistedReducer, reducer };
