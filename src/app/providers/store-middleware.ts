import type {CurriedGetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {baseApi} from '~/shared/api';
import {baseListener} from '~/shared/model';

export const storeMiddleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
  return getDefaultMiddleware().prepend(baseListener.middleware).concat(baseApi.middleware);
};
