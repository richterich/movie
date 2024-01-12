import {describe, expect, test} from '@jest/globals';
import {falsifiedAppState} from '~/shared/__test-utils__';
import {selectGenreFilter} from '../selectors';

describe('[features/filters/selectors] genres filter', () => {
  test('should handle case when genres filter is empty', () => {
    const state = falsifiedAppState({
      filters: {genres: [], keywords: [], popularity: null, rating: null, years: null},
    });
    expect(selectGenreFilter(state)).toEqual([]);
  });

  test('should handle case when genres filter has values', () => {
    const state = falsifiedAppState({
      filters: {genres: ['Action', 'Comedy'], keywords: [], popularity: null, rating: null, years: null},
    });
    expect(selectGenreFilter(state)).toEqual(['Action', 'Comedy']);
  });
});
