import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {SortByOption, SortByOrder} from './types';
import type {SortByAttributes} from './types.slice';

const initialState: SortByAttributes = {
  option: null,
  order: null,
};

export const sortBySlice = createSlice({
  name: 'sortBy',
  initialState,
  reducers: {
    clearSortState: (state) => {
      state.option = initialState.option;
      state.order = initialState.order;
    },
    setSortAttributes: (state, action: PayloadAction<SortByAttributes>) => {
      state.option = action.payload.option;
      state.order = action.payload.order;
    },
    setSortOption: (state, action: PayloadAction<SortByOption>) => {
      state.option = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<SortByOrder>) => {
      state.order = action.payload;
    },
  },
});

export const {clearSortState, setSortAttributes, setSortOption, setSortOrder} = sortBySlice.actions;
