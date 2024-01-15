import type {HTMLInputTypeAttribute} from 'react';
import type {MinMaxFilter as FilterValues} from '../../model';

interface Props<T> {
  instance: (value: string) => T;
  min: T;
  max: T;
  fromName?: string;
  fromId?: string;
  toName?: string;
  toId?: string;
  inputType?: HTMLInputTypeAttribute;
  step?: string | number;
  filter: FilterValues<T> | null;
  setFilter: (values: FilterValues<T>) => void;
  clearFilter: () => void;
}

export const MinMaxFilter = <T extends string | number>({
  instance,
  min,
  max,
  fromName,
  fromId,
  toName,
  toId,
  inputType,
  step,
  filter,
  setFilter,
  clearFilter,
}: Props<T>) => {
  const onValueChange = (currentMin: T, currentMax: T) => {
    if (currentMin === min && currentMax === max) clearFilter();
    else setFilter({min: currentMin, max: currentMax});
  };

  const minValue = filter && filter.min ? filter.min : '';
  const maxValue = filter && filter.max ? filter.max : '';

  return (
    <div className="flex items-center">
      <input
        className="form-input flex-1 rounded-md border-white/30 focus:border-fuchsia-700 focus:ring-fuchsia-700 dark:bg-[#111] dark:text-slate-200"
        type={inputType}
        min={min}
        max={max}
        step={step}
        name={fromName}
        id={fromId}
        placeholder={min.toString()}
        value={minValue}
        onChange={({currentTarget}) => onValueChange(instance(currentTarget.value), filter?.max || max)}
      />
      <span className="mx-2">to</span>
      <input
        className="form-input flex-1 rounded-md border-white/30 focus:border-fuchsia-700 focus:ring-fuchsia-700 dark:bg-[#111] dark:text-slate-200"
        type={inputType}
        min={min}
        max={max}
        step={step}
        name={toName}
        id={toId}
        placeholder={max.toString()}
        value={maxValue}
        onChange={({currentTarget}) => onValueChange(filter?.min || min, instance(currentTarget.value))}
      />
    </div>
  );
};
