import type {Paginated} from '../../model';

const {ceil} = Math;

interface Props extends Paginated {
  totalItems: number;
}

export const ShowingResults = ({page, totalItems, totalPages}: Props) => {
  if (!page || !totalPages || !totalItems) {
    return (
      <div>
        <p>No results to show</p>
      </div>
    );
  }

  const perPage = ceil(totalItems / totalPages);

  const fromItem = (page - 1) * perPage + 1;
  const toItem = page * perPage;

  return (
    <div>
      <p>
        Showing&#160;
        <span className="font-medium">{fromItem}</span>
        &#160;to&#160;
        <span className="font-medium">{toItem}</span>
        &#160;of&#160;
        <span className="font-medium">{totalItems}</span>
        &#160;results
      </p>
    </div>
  );
};
