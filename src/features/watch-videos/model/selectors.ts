import type {VideosAttributes} from './types';

export const selectCinematicId = (state: App.RootState): Id => {
  return state.watchVideos.cinematicId;
};

export const selectVideosTypes = (state: App.RootState) => {
  return state.watchVideos.videosTypes;
};

export const selectVideosAttributes = (state: App.RootState): VideosAttributes => {
  return state.watchVideos;
};
