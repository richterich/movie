import {bindActionCreators} from '@reduxjs/toolkit';
import type {GenreFilterItem} from '~/entities/genre';
import {selectGenreFilter} from '../selectors';
import {setGenresFilter, clearGenresFilter} from '../slice';

export interface Props {
  cinematicType: 'movies';
}

export const mapGenresFilterState = (state: App.RootState, {cinematicType}: Props) => {
  const genres = state.genreLists[cinematicType]; // TODO: replace with redux selector
  const filterValues = selectGenreFilter(state);
  const genreFilterItems = new Map<string, GenreFilterItem>();
  for (const id in genres) {
    const name = genres[id].name;
    genreFilterItems.set(name, {name, isSelected: false});
  }
  for (const name of filterValues) {
    const genre = genreFilterItems.get(name);
    if (genre) genre.isSelected = true;
  }
  return {genres: Array.from(genreFilterItems.values())};
};

export const mapGenresFilterDispatch = (dispatch: App.BaseDispatch) => {
  return bindActionCreators({setFilter: setGenresFilter, clearFilter: clearGenresFilter}, dispatch);
};
