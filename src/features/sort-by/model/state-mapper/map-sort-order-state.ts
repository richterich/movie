import {bindActionCreators} from '@reduxjs/toolkit';
import {selectSortByOrder} from '../selectors';
import {setSortOrder} from '../slice';

export interface Props {
  title?: string;
}

export const mapSortOrderState = (state: App.RootState, {title}: Props) => {
  const sortOrder = selectSortByOrder(state);
  return {title, sortOrder};
};

export const mapSortOrderDispatch = (dispatch: App.BaseDispatch) => {
  return bindActionCreators({setSortOrder}, dispatch);
};
