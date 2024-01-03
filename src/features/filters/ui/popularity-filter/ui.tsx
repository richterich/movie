import type {PopularityFilter as PopularityFilterProps} from '../../model';

interface Props {
  label: string;
  min: number;
  max: number;
  popularity: PopularityFilterProps | null;
  setFilter: (values: PopularityFilterProps) => void;
  clearFilter: () => void;
}

export const PopularityFilter = ({label, min, max, popularity, setFilter, clearFilter}: Props) => {
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
          name="from-votes"
          id="from-votes"
          placeholder={`${min}`}
          value={popularity?.min}
          onChange={({currentTarget}) => onValueChange(currentTarget.valueAsNumber, popularity?.max || max)}
        />
        <span className="mx-2">to</span>
        <input
          className="form-input flex-1 rounded-md border-white/30 focus:border-fuchsia-700 focus:ring-fuchsia-700 dark:bg-[#111] dark:text-slate-200"
          type="number"
          min={min}
          max={max}
          step="1"
          name="to-votes"
          id="to-votes"
          placeholder={`${max}`}
          value={popularity?.max}
          onChange={({currentTarget}) => onValueChange(popularity?.min || min, currentTarget.valueAsNumber)}
        />
      </div>
    </>
  );
};
