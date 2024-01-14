import {describe, expect, test} from '@jest/globals';
import {falsifiedAppState} from '~/shared/__test-utils__';
import {filtersSlice, clearGenresFilter} from '../slice';

describe('[features/filters/actions] clear genres filter', () => {
  test('should clear genres filter values when filter is empty', () => {
    const {reducer} = filtersSlice;
    const state = falsifiedAppState({
      filters: {
        genres: [],
        years: null,
        rating: null,
        popularity: null,
        keywords: [],
      },
    });
    expect(reducer(state.filters, clearGenresFilter())).toEqual({
      genres: [],
      years: null,
      rating: null,
      popularity: null,
      keywords: [],
    });
  });

  test('should clear genres filter values when filter has values', () => {
    const {reducer} = filtersSlice;
    const state = falsifiedAppState({
      filters: {
        genres: ['Action', 'Comedy'],
        years: null,
        rating: null,
        popularity: null,
        keywords: [],
      },
    });
    expect(reducer(state.filters, clearGenresFilter())).toEqual({
      genres: [],
      years: null,
      rating: null,
      popularity: null,
      keywords: [],
    });
  });

  test('should not modify other filter values when clearing genres filter', () => {
    const {reducer} = filtersSlice;
    const state = falsifiedAppState({
      filters: {
        genres: ['Action', 'Comedy'],
        years: {min: '1990', max: '2000'},
        rating: {min: 1, max: 10},
        popularity: {min: 1000, max: 5000},
        keywords: ['super hero', 'power'],
      },
    });
    expect(reducer(state.filters, clearGenresFilter())).toEqual({
      genres: [],
      years: {min: '1990', max: '2000'},
      rating: {min: 1, max: 10},
      popularity: {min: 1000, max: 5000},
      keywords: ['super hero', 'power'],
    });
  });
});
