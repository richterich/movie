import type {YearsFilter as YearsFilterProps} from '../../model';

interface Props {
  min: string;
  max: string;
  years: YearsFilterProps | null;
  setFilter: (values: YearsFilterProps) => void;
  clearFilter: () => void;
}

export const YearsFilter = ({min, max, years, setFilter, clearFilter}: Props) => {
  const onValueChange = (currentMin: string, currentMax: string) => {
    if (currentMin === min && currentMax === max) clearFilter();
    else setFilter({min: currentMin, max: currentMax});
  };

  return (
    <>
      <div className="flex items-center">
        <input
          className="form-input flex-1 rounded-md border-white/30 focus:border-fuchsia-700 focus:ring-fuchsia-700 dark:bg-[#111] dark:text-slate-200"
          type="number"
          min={min}
          max={max}
          step="1"
          name="from-year"
          id="from-year"
          placeholder={min}
          value={years?.min}
          onChange={({currentTarget}) => onValueChange(currentTarget.value, years?.max || max)}
        />
        <span className="mx-2">to</span>
        <input
          className="form-input flex-1 rounded-md border-white/30 focus:border-fuchsia-700 focus:ring-fuchsia-700 dark:bg-[#111] dark:text-slate-200"
          type="number"
          min={min}
          max={max}
          step="1"
          name="to-year"
          id="to-year"
          placeholder={max}
          value={years?.max}
          onChange={({currentTarget}) => onValueChange(years?.min || min, currentTarget.value)}
        />
      </div>
    </>
  );
};
