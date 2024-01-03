import {describe, expect, test} from '@jest/globals';
import {ratingFilterPreloadedState} from './rating-preloaded-state';

describe('[features/filters] rating preloaded state', () => {
  test('should return null for empty search params', () => {
    const searchParams = new URLSearchParams();
    const result = ratingFilterPreloadedState(searchParams);
    expect(result).toBeNull();
  });

  test('should return null when both min and max are not present in URLSearchParams', () => {
    const searchParams = new URLSearchParams('otherParam=123');
    const result = ratingFilterPreloadedState(searchParams);
    expect(result).toBeNull();
  });

  test('should parse valid min and max values', () => {
    const searchParams = new URLSearchParams('rating.min=3&rating.max=7');
    const result = ratingFilterPreloadedState(searchParams);
    expect(result).toEqual({min: 3, max: 7});
  });

  test('should parse valid min value only', () => {
    const searchParams = new URLSearchParams('rating.min=4');
    const result = ratingFilterPreloadedState(searchParams);
    expect(result).toEqual({min: 4});
  });

  test('should parse valid max value only', () => {
    const searchParams = new URLSearchParams('rating.max=8');
    const result = ratingFilterPreloadedState(searchParams);
    expect(result).toEqual({max: 8});
  });

  test('should ignore invalid min and max values', () => {
    const searchParams = new URLSearchParams('rating.min=abc&rating.max=xyz');
    const result = ratingFilterPreloadedState(searchParams);
    expect(result).toBeNull();
  });

  test('should handle decimal values', () => {
    const searchParams = new URLSearchParams('rating.min=2.5&rating.max=6.75');
    const result = ratingFilterPreloadedState(searchParams);
    expect(result).toEqual({min: 2.5, max: 6.75});
  });

  test('should handle values with leading zeros', () => {
    const searchParams = new URLSearchParams('rating.min=01&rating.max=005');
    const result = ratingFilterPreloadedState(searchParams);
    expect(result).toEqual({min: 1, max: 5});
  });

  test('should handle values with trailing zeros', () => {
    const searchParams = new URLSearchParams('rating.min=3.0&rating.max=8.00');
    const result = ratingFilterPreloadedState(searchParams);
    expect(result).toEqual({min: 3, max: 8});
  });

  test('should return null for invalid rating values', () => {
    const searchParams = new URLSearchParams('rating.min=11&rating.max=15');
    const result = ratingFilterPreloadedState(searchParams);
    expect(result).toBeNull();
  });
});
