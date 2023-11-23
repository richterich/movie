import {combineReducers} from '@reduxjs/toolkit';
import {watchVideosSlice} from '~/features/watch-videos';
import {genreSlice} from '~/entities/genre';
import {baseApi} from '~/shared/api';

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [genreSlice.name]: genreSlice.reducer,
  [watchVideosSlice.name]: watchVideosSlice.reducer,
});
