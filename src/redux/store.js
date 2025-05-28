import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filter/filtersSlice";
import { contactReducer } from "./contact/contactsSlice";
import { authReducer } from "./auth/sliceOuth";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "token",
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistedauthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedauthReducer,
    contacts: contactReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
