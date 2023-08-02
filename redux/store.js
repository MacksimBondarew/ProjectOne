import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authSlice } from './auth/authSlice';
import { comentSlice } from './coments/comentSlice';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducerUser = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer : {
    auth: reducerUser,
    coment: comentSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);