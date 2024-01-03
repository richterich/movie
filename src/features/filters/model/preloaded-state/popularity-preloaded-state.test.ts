import {describe, expect, test} from '@jest/globals';
import {popularityFilterPreloadedState} from './popularity-preloaded-state';

describe('[features/filters] popularity preloaded state', () => {
  test('should return null for empty URLSearchParams', () => {
    const searchParams = new URLSearchParams();
    const result = popularityFilterPreloadedState(searchParams);
    expect(result).toBeNull();
  });

  test('should return null when both min and max are not present in URLSearchParams', () => {
    const searchParams = new URLSearchParams('otherParam=123');
    const result = popularityFilterPreloadedState(searchParams);
    expect(result).toBeNull();
  });

  test('should parse min and max values from URLSearchParams', () => {
    const searchParams = new URLSearchParams('popularity.min=1.05&popularity.max=5.1');
    const result = popularityFilterPreloadedState(searchParams);
    expect(result).toEqual({min: 1.05, max: 5.1});
  });

  test('should handle values with leading zeros', () => {
    const searchParams = new URLSearchParams('popularity.min=01&popularity.max=005');
    const result = popularityFilterPreloadedState(searchParams);
    expect(result).toEqual({min: 1, max: 5});
  });

  test('should parse only min value when max is not present', () => {
    const searchParams = new URLSearchParams('popularity.min=3.55');
    const result = popularityFilterPreloadedState(searchParams);
    expect(result).toEqual({min: 3.55});
  });

  test('should parse only max value when min is not present', () => {
    const searchParams = new URLSearchParams('popularity.max=8.75');
    const result = popularityFilterPreloadedState(searchParams);
    expect(result).toEqual({max: 8.75});
  });

  test('should return null when popularity min and max values are invalid', () => {
    const searchParams = new URLSearchParams('popularity.min=abc&popularity.max=xyz');
    const result = popularityFilterPreloadedState(searchParams);
    expect(result).toBeNull();
  });

  test('should return null when popularity min and max parameters are present but empty', () => {
    const searchParams = new URLSearchParams('popularity.min=&popularity.max=');
    const result = popularityFilterPreloadedState(searchParams);
    expect(result).toBeNull();
  });
});
