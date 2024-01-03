import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {RatingFilter, PopularityFilter, YearsFilter} from './types';
import type {FiltersAttributes} from './types.slice';

const initialState: FiltersAttributes = {
  genres: [],
  years: null,
  rating: null,
  popularity: null,
  keywords: [],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    clearFiltersAttributes: (state) => {
      state.genres = initialState.genres;
      state.years = initialState.years;
      state.rating = initialState.rating;
      state.popularity = initialState.popularity;
      state.keywords = initialState.keywords;
    },
    setGenresFilter: (state, action: PayloadAction<string[]>) => {
      state.genres = action.payload;
    },
    clearGenresFilter: (state) => {
      state.genres = initialState.genres;
    },
    setYearsFilter: (state, action: PayloadAction<YearsFilter>) => {
      state.years = action.payload;
    },
    clearYearsFilter: (state) => {
      state.years = initialState.years;
    },
    setRatingFilter: (state, action: PayloadAction<RatingFilter>) => {
      state.rating = action.payload;
    },
    clearRatingFilter: (state) => {
      state.rating = initialState.rating;
    },
    setPopularityFilter: (state, action: PayloadAction<PopularityFilter>) => {
      state.popularity = action.payload;
    },
    clearPopularityFilter: (state) => {
      state.popularity = initialState.popularity;
    },
    setKeywordsFilter: (state, action: PayloadAction<string[]>) => {
      state.keywords = action.payload;
    },
    clearKeywordsFilter: (state) => {
      state.keywords = initialState.keywords;
    },
  },
});

export const {
  clearFiltersAttributes,
  setGenresFilter,
  clearGenresFilter,
  setYearsFilter,
  clearYearsFilter,
  setRatingFilter,
  clearRatingFilter,
  setPopularityFilter,
  clearPopularityFilter,
  setKeywordsFilter,
  clearKeywordsFilter,
} = filtersSlice.actions;
