import {combineReducers} from '@reduxjs/toolkit';
import {baseApi} from '~/shared/api';

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
});
