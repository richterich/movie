import {describe, expect, test} from '@jest/globals';
import {usePagination} from './use-pagination';

describe('[features/pagination] use-pagination', () => {
  const window = {sibling: 1};
  const paginated = {page: 0, totalPages: 10};

  test('[hook] Total Pages: 10, Current Page: 1', () => {
    expect(usePagination({paginated: {...paginated, page: 1}, window})).toEqual([1, 2, 3, 4, 5]);
  });
  test('[hook] Total Pages: 10, Current Page: 2', () => {
    expect(usePagination({paginated: {...paginated, page: 2}, window})).toEqual([1, 2, 3, 4, 5]);
  });
  test('[hook] Total Pages: 10, Current Page: 3', () => {
    expect(usePagination({paginated: {...paginated, page: 3}, window})).toEqual([1, 2, 3, 4, 5]);
  });

  test('[hook] Total Pages: 10, Current Page: 4', () => {
    expect(usePagination({paginated: {...paginated, page: 4}, window})).toEqual([2, 3, 4, 5, 6]);
  });
  test('[hook] Total Pages: 10, Current Page: 5', () => {
    expect(usePagination({paginated: {...paginated, page: 5}, window})).toEqual([3, 4, 5, 6, 7]);
  });
  test('[hook] Total Pages: 10, Current Page: 6', () => {
    expect(usePagination({paginated: {...paginated, page: 6}, window})).toEqual([4, 5, 6, 7, 8]);
  });
  test('[hook] Total Pages: 10, Current Page: 7', () => {
    expect(usePagination({paginated: {...paginated, page: 7}, window})).toEqual([5, 6, 7, 8, 9]);
  });

  test('[hook] Total Pages: 10, Current Page: 8', () => {
    expect(usePagination({paginated: {...paginated, page: 8}, window})).toEqual([6, 7, 8, 9, 10]);
  });
  test('[hook] Total Pages: 10, Current Page: 9', () => {
    expect(usePagination({paginated: {...paginated, page: 9}, window})).toEqual([6, 7, 8, 9, 10]);
  });
  test('[hook] Total Pages: 10, Current Page: 10', () => {
    expect(usePagination({paginated: {...paginated, page: 10}, window})).toEqual([6, 7, 8, 9, 10]);
  });
});
