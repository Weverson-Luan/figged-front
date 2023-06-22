/**
 * IMPORTS
 */
import {
	persistReducer,
	persistStore,
	type PersistConfig,
} from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { user } from "../features/user";

/**
 * Eu configuro um armazenamento redux persistente.
 */
const persistConfig: PersistConfig<unknown> = {
	key: "figged-frontend",
	storage,
	whitelist: [user.name],
};

/**
 * EXPORTS
 */
export { persistConfig, persistReducer, persistStore };
