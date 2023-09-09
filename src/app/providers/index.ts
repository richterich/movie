import compose from 'compose-function';
import {AppRouter} from './app-router';
import {AppStore} from './app-store';

export const build = compose(AppStore, AppRouter);
