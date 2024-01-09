import {createSelector} from '@reduxjs/toolkit';
import type {Genre} from './types';

export const selectGenres = (state: App.RootState) => state.genreLists.movies;

export const selectGenresIds = (_: App.RootState, ids: Id[]) => ids;

export const selectGenresNames = (_: App.RootState, names: string[]) => names;

export const selectGenresByIds = createSelector([selectGenres, selectGenresIds], (movieGenres, ids) => {
  const genres = new Array<Genre>(ids.length);
  if (movieGenres) {
    for (const id of ids) genres.push(movieGenres[id || 0]);
  }
  return genres;
});

export const selectGenresIdsByNames = createSelector([selectGenres, selectGenresNames], (movieGenres, names) => {
  const nameIdPair = new Map<string, string>();
  const genreIds = new Array<string>(names.length);
  if (movieGenres) {
    for (const genreId in movieGenres) {
      nameIdPair.set(movieGenres[genreId].name, genreId);
    }
    for (const name of names) {
      const genreId = nameIdPair.get(name);
      if (genreId) genreIds.push(genreId);
    }
  }
  return genreIds;
});
