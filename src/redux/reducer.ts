/**
 * IMPORTS
 */
import { combineReducers } from "redux";
import { user } from "../features/user";

import { persistConfig, persistReducer } from "./persist";

/**
 * Eu crio um redutor de raiz.
 */
const reducer = combineReducers({
	[user.name]: user.reducer,
}) as any;

/**
 * Eu crio um redutor de raiz persistente..
 */
const persistedReducer = persistReducer(persistConfig, reducer);

/**
 * EXPORTS
 */
export { persistedReducer, reducer };
