import {describe, expect, test} from '@jest/globals';
import {falsifiedAppState} from '~/shared/__test-utils__';
import {selectKeywordFilter} from '../selectors';

describe('[features/filters/selectors] keywords filter', () => {
  test('should handle case when keywords filter is empty', () => {
    const state = falsifiedAppState({
      filters: {genres: [], keywords: [], popularity: null, rating: null, years: null},
    });
    expect(selectKeywordFilter(state)).toEqual([]);
  });

  test('should handle case when keywords filter has values', () => {
    const state = falsifiedAppState({
      filters: {genres: [], keywords: ['batman', 'super hero'], popularity: null, rating: null, years: null},
    });
    expect(selectKeywordFilter(state)).toEqual(['batman', 'super hero']);
  });
});
