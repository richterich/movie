import {createSelector} from '@reduxjs/toolkit';
import type {Genre} from './types';

export const selectGenres = (state: App.RootState) => state.genreLists.movies;

export const selectGenresIds = (_: App.RootState, ids: Id[]) => ids;

export const selectGenresByIds = createSelector([selectGenres, selectGenresIds], (movieGenres, ids) => {
  const genres = new Array<Genre>(ids.length);
  if (movieGenres) {
    for (const id of ids) genres.push(movieGenres[id || 0]);
  }
  return genres;
});
