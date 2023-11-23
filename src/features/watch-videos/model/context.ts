import {createContext} from 'react';
import type {VideosAttributes} from './types';

export const WatchVideosContext = createContext<VideosAttributes>({cinematicId: null, videosTypes: null});
