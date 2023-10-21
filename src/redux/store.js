
import storage from 'redux-persist/lib/storage';
import { sliceFilter } from './sliceFilters';
import { authReducer } from './auth/authSlice';
import { sliceContact } from 'redux/sliceContacts';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: sliceContact,
    filters: sliceFilter,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persist_Store = persistStore(store);
