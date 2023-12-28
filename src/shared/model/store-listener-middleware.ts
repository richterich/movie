import {createListenerMiddleware, addListener} from '@reduxjs/toolkit';
import type {TypedStartListening, TypedAddListener} from '@reduxjs/toolkit';

export const baseListener = createListenerMiddleware();

export type AppStartListening = TypedStartListening<App.RootState, App.AppDispatch>;

export const startAppListening = baseListener.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<App.RootState, App.AppDispatch>;
