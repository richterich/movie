import {combineReducers} from '@reduxjs/toolkit';
import {genreSlice} from '~/entities/genre';
import {baseApi} from '~/shared/api';

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [genreSlice.name]: genreSlice.reducer,
});
