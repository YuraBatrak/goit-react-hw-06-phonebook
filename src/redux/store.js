import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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
import contactReducer from "./reducers";
const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};
const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

const persistore = { store, persistor };

export default persistore;
