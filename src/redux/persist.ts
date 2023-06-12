/**
 * IMPORTS
 */
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import { user } from '../features/user';


/**
 * I configure a persisted redux store.
 */
const persistConfig: PersistConfig<unknown> = {
  key: 'figged-frontend',
  storage,
  whitelist: [user.name]
};


/**
 * EXPORTS
 */
export { persistConfig, persistReducer, persistStore };
