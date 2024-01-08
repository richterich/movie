import {describe, expect, test} from '@jest/globals';
import {OptionSortParams} from '~/shared/lib';
import {SortOptions} from '~/shared/model';
import {sortOptionPreloadedState} from './sort-option-preloaded-state';

describe('[features/sort-by] option preloaded state', () => {
  test('should return null for empty URLSearchParams', () => {
    const searchParams = new URLSearchParams();
    expect(sortOptionPreloadedState(searchParams)).toBeNull();
  });

  test('should return null if sort option is not present in URLSearchParams', () => {
    const searchParams = new URLSearchParams('otherParam=value');
    expect(sortOptionPreloadedState(searchParams)).toBeNull();
  });

  test('should return the correct sort option from URLSearchParams', () => {
    const searchParams = new URLSearchParams(`sort.by=${OptionSortParams.PrimaryReleaseDate}`);
    expect(sortOptionPreloadedState(searchParams)).toBe(SortOptions.PrimaryReleaseDate);
  });

  test('should handle case-insensitive sort option from URLSearchParams', () => {
    const searchParams = new URLSearchParams(`sort.by=${OptionSortParams.PrimaryReleaseDate.toUpperCase()}`);
    expect(sortOptionPreloadedState(searchParams)).toBe(SortOptions.PrimaryReleaseDate);
  });

  test('should return null if sort option is invalid', () => {
    const searchParams = new URLSearchParams('sort.by=this_string_is_gte_16_characters');
    expect(sortOptionPreloadedState(searchParams)).toBeNull();
  });
});
