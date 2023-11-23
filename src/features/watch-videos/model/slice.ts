import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {VideosAttributes} from './types';

const initialState: VideosAttributes = {
  cinematicId: null,
  videosTypes: null,
};

export const watchVideosSlice = createSlice({
  name: 'watchVideos',
  initialState,
  reducers: {
    clearVideosAttributes: (state) => {
      state.cinematicId = initialState.cinematicId;
      state.videosTypes = initialState.videosTypes;
    },
    setVideosAttributes: (state, action: PayloadAction<VideosAttributes>) => {
      state.cinematicId = action.payload.cinematicId;
      state.videosTypes = action.payload.videosTypes;
    },
  },
});

export const {clearVideosAttributes, setVideosAttributes} = watchVideosSlice.actions;
