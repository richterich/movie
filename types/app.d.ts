declare global {
  declare namespace App {
    declare type AppDispatch = import('~/app/providers/app-store.config').AppDispatch;
    declare type RootState = import('~/app/providers/app-store.config').RootState;
  }
}

export {};
