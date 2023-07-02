import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import {
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
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/authReducer";
import persistStore from "redux-persist/es/persistStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authPersist = {
  key: 'auth',
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
      auth: persistReducer(authPersist, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
