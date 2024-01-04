import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './root-reducer';
import {storeMiddleware} from './store-middleware';
import {storePreloadedState} from './store-preloaded-state';

export const store = configureStore({
  reducer,
  preloadedState: storePreloadedState(),
  middleware: storeMiddleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducer>;
