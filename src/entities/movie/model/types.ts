export interface Movie {
  id: Id;
  title: string;
  poster?: string;
  backdrop?: string;
  genreIds?: number[];
  rating: number;
  releaseDate?: string;
  isAdult: boolean;
}

export interface MovieList {
  page: number;
  totalPages: number;
  totalMovies: number;
  movies: Movie[];
}
