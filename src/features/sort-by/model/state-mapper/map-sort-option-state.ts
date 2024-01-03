import {bindActionCreators} from '@reduxjs/toolkit';
import type {PropsWithChildren} from 'react';
import {selectSortByOption} from '../selectors';
import {setSortOption} from '../slice';
import type {SortByOption} from '../types';

export interface Props {
  title?: string;
  getSortOptionName: (value: SortByOption | null) => string;
}

export const mapSortOptionState = (
  state: App.RootState,
  {title, children, getSortOptionName}: PropsWithChildren<Props>
) => {
  const sortOption = selectSortByOption(state);
  return {title, sortOption, children, getSortOptionName};
};

export const mapSortOptionDispatch = (dispatch: App.BaseDispatch) => {
  return bindActionCreators({setSortOption}, dispatch);
};
