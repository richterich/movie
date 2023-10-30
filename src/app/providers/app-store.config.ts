import {configureStore} from '@reduxjs/toolkit';
import {baseApi} from '~/shared/api';
import {reducer} from './root-reducer';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
