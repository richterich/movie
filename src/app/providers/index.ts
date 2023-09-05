import compose from 'compose-function';
import {AppRouter} from './app-router';

export const build = compose(AppRouter);
