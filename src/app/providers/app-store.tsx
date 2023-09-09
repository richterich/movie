import {type ReactNode} from 'react';
import {Provider} from 'react-redux';
import {store} from './app-store.config';

export const AppStore = (component: () => ReactNode) => {
  const Store = () => <Provider store={store}>{component()}</Provider>;
  return Store;
};
