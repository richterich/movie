import {Link} from 'react-router-dom';
import {cm} from '~/shared/lib';
import {MaterialIcon} from '~/shared/ui/icon';
import type {Paginated, PaginatedWindow} from '../../model';
import {usePagination} from '../../model';

interface Props extends Paginated, PaginatedWindow {}

export const BoundaryPagination = ({page: currentPage, totalPages, sibling}: Props) => {
  const pageNumberList = usePagination({paginated: {page: currentPage, totalPages}, window: {sibling}});
  const searchParams = new URLSearchParams(location.search);

  if (!currentPage || !totalPages) {
    return (
      <div>
        <p>No results for pagination</p>
      </div>
    );
  }

  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

  const fSearchParams = new URLSearchParams(searchParams.toString());
  fSearchParams.set('page', '1');
  const lSearchParams = new URLSearchParams(searchParams.toString());
  lSearchParams.set('page', totalPages.toString());
  const pSearchParams = new URLSearchParams(searchParams.toString());
  pSearchParams.set('page', prevPage.toString());
  const nSearchParams = new URLSearchParams(searchParams.toString());
  nSearchParams.set('page', nextPage.toString());

  const isDisablePrevFirst = currentPage <= 1;
  const isDisableNextLast = currentPage >= totalPages;

  return (
    <nav className="rounded-md bg-[#111] font-semibold">
      <ul className="flex">
        <li className="rounded-l-md px-4 py-1 ring-1 ring-inset ring-[#1e1e1e]">
          <Link
            to={`?${fSearchParams.toString()}`}
            rel="first"
            className={cm('', {'pointer-events-none': isDisablePrevFirst})}>
            <MaterialIcon icon="first_page" className={cm('align-middle', {'text-gray-400': isDisablePrevFirst})} />
          </Link>
        </li>
        <li className="px-4 py-1 ring-1 ring-inset ring-[#1e1e1e]">
          <Link
            to={`?${pSearchParams.toString()}`}
            rel="prev"
            className={cm('', {'pointer-events-none': isDisablePrevFirst})}>
            <MaterialIcon
              icon="navigate_before"
              className={cm('align-middle', {'text-gray-400': isDisablePrevFirst})}
            />
          </Link>
        </li>

        {pageNumberList.map((page) => {
          const linkSearchParams = new URLSearchParams(searchParams.toString());
          linkSearchParams.set('page', page.toString());

          return (
            <li
              key={page}
              className={cm(
                'px-4 py-1 ring-1 ring-inset ring-[#1e1e1e]',
                page === currentPage ? 'bg-fuchsia-800' : ''
              )}>
              <Link to={`?${linkSearchParams.toString()}`}>{page}</Link>
            </li>
          );
        })}

        <li className="px-4 py-1 ring-1 ring-inset ring-[#1e1e1e]">
          <Link
            to={`?${nSearchParams.toString()}`}
            rel="next"
            className={cm('', {'pointer-events-none': isDisableNextLast})}>
            <MaterialIcon icon="navigate_next" className={cm('align-middle', {'text-gray-400': isDisableNextLast})} />
          </Link>
        </li>
        <li className="rounded-r-md px-4 py-1 ring-1 ring-inset ring-[#1e1e1e]">
          <Link
            to={`?${lSearchParams.toString()}`}
            rel="last"
            className={cm('', {'pointer-events-none': isDisableNextLast})}>
            <MaterialIcon icon="last_page" className={cm('align-middle', {'text-gray-400': isDisableNextLast})} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
