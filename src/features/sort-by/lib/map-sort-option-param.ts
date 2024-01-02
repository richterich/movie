/**
 * TODO: write in generics
 */
import {OptionSortParams} from '~/shared/lib';
import {SortOptions} from '~/shared/model';
import {SortByOption} from '../model';

export const mapSortByOption = (value: string): SortByOption | null => {
  function is(param: ValueOf<typeof OptionSortParams>) {
    return 0 === param.localeCompare(value, 'en', {sensitivity: 'base'});
  }

  if (is(OptionSortParams.Popularity)) return SortOptions.Popularity;
  if (is(OptionSortParams.Rating)) return SortOptions.Rating;
  if (is(OptionSortParams.ReleaseDate)) return SortOptions.ReleaseDate;
  if (is(OptionSortParams.Title)) return SortOptions.Title;

  return null;
};

export const mapSortByOptionParam = (
  value: SortByOption | null | undefined
): ValueOf<typeof OptionSortParams> | null => {
  let optionParam = null;
  if (value && OptionSortParams[value]) optionParam = OptionSortParams[value];
  return optionParam;
};
