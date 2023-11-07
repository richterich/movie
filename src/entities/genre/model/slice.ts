import {createSlice} from '@reduxjs/toolkit';
import {genresApi} from '../api';
import {type GenreList} from './types';

type GenreListState = GenreList;

const initialState: GenreListState = {
  genres: [],
};

export const genreSlice = createSlice({
  name: 'genreList',
  initialState,
  reducers: {
    clearGenreList: (state) => {
      state.genres = [];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(genresApi.endpoints.fetchGenreList.matchFulfilled, (state: GenreListState, {payload}) => {
      state.genres = Array.from(payload.genres);
    });
  },
});

export const {clearGenreList} = genreSlice.actions;
