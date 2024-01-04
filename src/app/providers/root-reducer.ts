import {combineReducers} from '@reduxjs/toolkit';
import {filtersSlice} from '~/features/filters';
import {sortBySlice} from '~/features/sort-by';
import {watchVideosSlice} from '~/features/watch-videos';
import {genreSlice} from '~/entities/genre';
import {baseApi} from '~/shared/api';

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [genreSlice.name]: genreSlice.reducer,
  [watchVideosSlice.name]: watchVideosSlice.reducer,
  [filtersSlice.name]: filtersSlice.reducer,
  [sortBySlice.name]: sortBySlice.reducer,
});
