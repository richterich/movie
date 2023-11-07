import {genresApi} from '../api';

export const genreListLoader = (dispatch: App.AppDispatch) => {
  const loader = dispatch(genresApi.endpoints.fetchGenreList.initiate({language: 'en'}));

  try {
    return loader.unwrap();
  } catch (error) {
    console.error(error);
  } finally {
    loader.unsubscribe();
  }
};
