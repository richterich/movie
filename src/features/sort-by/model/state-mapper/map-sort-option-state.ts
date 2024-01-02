import {bindActionCreators} from '@reduxjs/toolkit';
import type {PropsWithChildren} from 'react';
import {selectSortByOption} from '../selectors';
import {setSortOption} from '../slice';

export interface Props {
  title: string;
}

export const mapSortOptionState = (state: App.RootState, {title, children}: PropsWithChildren<Props>) => {
  const sortOption = selectSortByOption(state);
  return {title, sortOption, children};
};

export const mapSortOptionDispatch = (dispatch: App.BaseDispatch) => {
  return bindActionCreators({setSortOption}, dispatch);
};
