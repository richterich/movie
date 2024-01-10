import type {Paginated, PaginatedWindow} from './types';

const MIN_SIBLING = 1; // min sibling allows a user to navigate through pages

export interface UsePaginationParams {
  paginated: Paginated;
  window: PaginatedWindow;
}

export const usePagination = ({paginated, window}: UsePaginationParams) => {
  const {page, totalPages} = paginated;
  const sibling = window.sibling > MIN_SIBLING ? window.sibling : MIN_SIBLING;
  const length = sibling >= totalPages - 1 ? totalPages - 1 : sibling << 1;
  const start = page - length;
  const positiveOffset = start + sibling;
  const negativeOffset = totalPages - length;
  const overStart = start < 0;
  const overEnd = positiveOffset >= negativeOffset;
  const startPage = overEnd ? negativeOffset : overStart ? 1 : positiveOffset;
  return Array.from({length: length + 1}, (_, i) => i + startPage);
};
