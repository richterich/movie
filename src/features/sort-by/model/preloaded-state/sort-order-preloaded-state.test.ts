import {describe, expect, test} from '@jest/globals';
import {OrderSortParams} from '~/shared/lib';
import {SortOrders} from '~/shared/model';
import {sortOrderPreloadedState} from './sort-order-preloaded-state';

describe('[features/sort-by] order preloaded state', () => {
  test('should return default SortByAttributes when no URLSearchParams are provided', () => {
    const searchParams = new URLSearchParams();
    const result = sortOrderPreloadedState(searchParams);
    expect(result).toBeNull();
  });

  it('should return null if sort option is not present in URLSearchParams', () => {
    const searchParams = new URLSearchParams('otherParam=value');
    const result = sortOrderPreloadedState(searchParams);
    expect(result).toBeNull();
  });

  test('should correctly parse sort order from URLSearchParams', () => {
    const searchParams = new URLSearchParams(`sort.order=${OrderSortParams.Ascending}`);
    const result = sortOrderPreloadedState(searchParams);
    expect(result).toEqual(SortOrders.Ascending);
  });

  test('should handle case-insensitive sort order from URLSearchParams', () => {
    const searchParams = new URLSearchParams(`sort.order=${OrderSortParams.Ascending.toUpperCase()}`);
    const result = sortOrderPreloadedState(searchParams);
    expect(result).toEqual(SortOrders.Ascending);
  });

  test('should handle invalid sort order values', () => {
    const searchParams = new URLSearchParams('sort.order=xyz');
    const result = sortOrderPreloadedState(searchParams);
    expect(result).toBeNull();
  });
});
