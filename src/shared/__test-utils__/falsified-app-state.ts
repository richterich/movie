export function falsifiedAppState(state: Partial<App.RootState>): App.RootState {
  const falsifiedState: App.RootState = {
    api: {
      config: {
        focused: false,
        middlewareRegistered: false,
        online: false,
        reducerPath: 'api',
        keepUnusedDataFor: 0,
        refetchOnFocus: false,
        refetchOnMountOrArgChange: false,
        refetchOnReconnect: false,
      },
      mutations: {},
      provided: {},
      queries: {},
      subscriptions: {},
    },
    filters: {genres: [], keywords: [], popularity: null, rating: null, years: null},
    genreLists: {movies: null},
    sortBy: {option: null, order: null},
    watchVideos: {cinematicId: null, videosTypes: null},
  };

  return {...falsifiedState, ...state};
}
