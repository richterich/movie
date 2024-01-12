import {describe, expect, test} from '@jest/globals';
import {usePagination} from './use-pagination';

describe('[features/pagination] use-pagination', () => {
  test('should generate correct pagination array when not over start, and not over end', () => {
    const paginated = {page: 5, totalPages: 10};
    const window = {sibling: 2};
    const result = usePagination({paginated, window});

    expect(result).toEqual([3, 4, 5, 6, 7]);
  });

  test('should generate correct pagination array when over start and not over end', () => {
    const paginated = {page: 2, totalPages: 10};
    const window = {sibling: 2};
    const result = usePagination({paginated, window});

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should generate correct pagination array when not over start and over end', () => {
    const paginated = {page: 8, totalPages: 10};
    const window = {sibling: 2};
    const result = usePagination({paginated, window});

    expect(result).toEqual([6, 7, 8, 9, 10]);
  });

  test('should handle case when when sibling is equals to zero', () => {
    const paginated = {page: 2, totalPages: 2};
    const window = {sibling: 0};
    const result = usePagination({paginated, window});

    expect(result).toEqual([1, 2]);
  });

  test('should handle case when sibling is equals total pages', () => {
    const paginated = {page: 2, totalPages: 2};
    const window = {sibling: 2};
    const result = usePagination({paginated, window});

    expect(result).toEqual([1, 2]);
  });

  test('should handle case when sibling is greeter then total pages', () => {
    const paginated = {page: 2, totalPages: 2};
    const window = {sibling: 3};
    const result = usePagination({paginated, window});

    expect(result).toEqual([1, 2]);
  });

  test('should handle case when total pages is equals to zero', () => {
    const paginated = {page: 2, totalPages: 0};
    const window = {sibling: 3};
    const result = usePagination({paginated, window});

    expect(result).toEqual([]);
  });
});
