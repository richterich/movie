import {createSlice} from '@reduxjs/toolkit';
import {genresApi} from '../api';
import type {GenresState} from './types.slice';

const initialState: GenresState = {
  movies: null,
};

export const genreSlice = createSlice({
  name: 'genreLists',
  initialState,
  reducers: {
    clearGenreList: (state) => {
      state.movies = initialState.movies;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(genresApi.endpoints.fetchGenreList.matchFulfilled, (state, {payload}) => {
      state.movies = payload;
    });
  },
});

export const {clearGenreList} = genreSlice.actions;
