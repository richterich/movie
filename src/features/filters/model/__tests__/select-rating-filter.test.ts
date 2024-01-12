import {describe, expect, test} from '@jest/globals';
import {falsifiedAppState} from '~/shared/__test-utils__';
import {selectRatingFilter} from '../selectors';

describe('[features/filters/selectors] rating filter', () => {
  test('should handle case when rating filter is empty', () => {
    const state = falsifiedAppState({
      filters: {genres: [], keywords: [], popularity: null, rating: null, years: null},
    });
    expect(selectRatingFilter(state)).toBeNull();
  });

  test('should handle case when rating filter has max value but not min', () => {
    const state = falsifiedAppState({
      filters: {genres: [], keywords: [], popularity: null, rating: {max: 10}, years: null},
    });
    expect(selectRatingFilter(state)).toEqual({max: 10});
  });

  test('should handle case when rating filter has not max value but min', () => {
    const state = falsifiedAppState({
      filters: {genres: [], keywords: [], popularity: null, rating: {min: 1}, years: null},
    });
    expect(selectRatingFilter(state)).toEqual({min: 1});
  });

  test('should handle case when rating filter has both max and min values', () => {
    const state = falsifiedAppState({
      filters: {genres: [], keywords: [], popularity: null, rating: {max: 10, min: 10}, years: null},
    });
    expect(selectRatingFilter(state)).toEqual({max: 10, min: 10});
  });
});
