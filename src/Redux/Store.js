import { configureStore } from '@reduxjs/toolkit';
import user from './Slice/user';

const reducer = { user };
const preloadedState = {};
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  enhancers: (defaultEnhancers) => [...defaultEnhancers],
});

export default store;
