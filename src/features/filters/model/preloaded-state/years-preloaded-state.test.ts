import {describe, expect, test} from '@jest/globals';
import {yearsFilterPreloadedState} from './years-preloaded-state';

describe('[features/filters] years preloaded state', () => {
  test('should return null when searchParams are empty', () => {
    const searchParams = new URLSearchParams();
    const result = yearsFilterPreloadedState(searchParams);
    expect(result).toBeNull();
  });

  test('should return null when both min and max are not present in URLSearchParams', () => {
    const searchParams = new URLSearchParams('otherParam=1234');
    const result = yearsFilterPreloadedState(searchParams);
    expect(result).toBeNull();
  });

  test('should return filter object when valid min and max are present in URLSearchParams', () => {
    const searchParams = new URLSearchParams('years.min=1000&years.max=2000');
    const result = yearsFilterPreloadedState(searchParams);
    expect(result).toEqual({min: '1000', max: '2000'});
  });

  test('should return filter object when only min is present in URLSearchParams', () => {
    const searchParams = new URLSearchParams('years.min=1000');
    const result = yearsFilterPreloadedState(searchParams);
    expect(result).toEqual({min: '1000'});
  });

  test('should return filter object when only max is present in URLSearchParams', () => {
    const searchParams = new URLSearchParams('years.max=2000');
    const result = yearsFilterPreloadedState(searchParams);
    expect(result).toEqual({max: '2000'});
  });

  test('should ignore invalid min and max values in URLSearchParams', () => {
    const searchParams = new URLSearchParams('years.min=abc&years.max=xyz');
    const result = yearsFilterPreloadedState(searchParams);
    expect(result).toBeNull();
  });
});
