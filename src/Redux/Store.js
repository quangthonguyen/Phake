import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import rootReducer from "./Slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        thunk: {
          extraArgument: "",
          immutableCheck: true,
          serializableCheck: true,
        },
      }),
    devTools: false,
    preloadedState,
    enhancers: (defaultEnhancers) => [...defaultEnhancers],
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./Slice", () => store.replaceReducer(rootReducer));
  }

  return store;
}
