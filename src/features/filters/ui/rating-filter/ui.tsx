import type {RatingFilter as RatingFilterProps} from '../../model';

interface Props {
  label: string;
  min: number;
  max: number;
  rating: RatingFilterProps | null;
  setFilter: (values: RatingFilterProps) => void;
  clearFilter: () => void;
}

export const RatingFilter = ({label, min, max, rating, setFilter, clearFilter}: Props) => {
  const onValueChange = (currentMin: number, currentMax: number) => {
    if (currentMin === min && currentMax === max) clearFilter();
    else setFilter({min: currentMin, max: currentMax});
  };

  return (
    <>
      <h5 className="my-2 text-xs font-semibold uppercase">{label}</h5>
      <div className="flex items-center">
        <input
          className="form-input flex-1 rounded-md border-white/30 focus:border-fuchsia-700 focus:ring-fuchsia-700 dark:bg-[#111] dark:text-slate-200"
          type="number"
          min={min}
          max={max}
          step="1"
          name="from-rating"
          id="from-rating"
          placeholder={`${min}`}
          value={rating?.min}
          onChange={({currentTarget}) => onValueChange(currentTarget.valueAsNumber, rating?.max || max)}
        />
        <span className="mx-2">to</span>
        <input
          className="form-input flex-1 rounded-md border-white/30 focus:border-fuchsia-700 focus:ring-fuchsia-700 dark:bg-[#111] dark:text-slate-200"
          type="number"
          min={min}
          max={max}
          step="1"
          name="to-rating"
          id="to-rating"
          placeholder={`${max}`}
          value={rating?.max}
          onChange={({currentTarget}) => onValueChange(rating?.min || min, currentTarget.valueAsNumber)}
        />
      </div>
    </>
  );
};
