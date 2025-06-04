import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

import storage from "redux-persist/lib/storage";
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

const persistConfig = {
  key: "contactsList",
  storage,
  //   whitelist: ["items"],
};

const persistedContactReducer = persistReducer(persistConfig, contactsReducer);

const localStoreReducer = combineReducers({
  contacts: persistedContactReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: localStoreReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
