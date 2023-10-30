export interface Movie {
  id: Id;
  title: string;
  poster?: string;
  rating: number;
  releaseDate?: string;
}

export interface MovieList {
  page: number;
  totalPages: number;
  totalMovies: number;
  movies: Movie[];
}
