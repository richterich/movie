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

export const MovieListTypes = {
  Popular: 'Popular',
  Upcoming: 'Upcoming',
  TopRated: 'TopRated',
  NowPlaying: 'NowPlaying',
} as const;

export const VideoTypes = {
  Trailer: 'Trailer',
  Teaser: 'Teaser',
  Featurette: 'Featurette',
  Bloopers: 'Bloopers',
  BehindTheScenes: 'BehindTheScenes',
  OpeningCredits: 'OpeningCredits',
  Clip: 'Clip',
} as const;

export interface Video {
  name: string;
  key: string;
  size: number;
  publicationDate?: string;
  type: KeyOf<typeof VideoTypes>;
  isOfficial: boolean;
}

export interface VideoList {
  id: Id;
  videos: Video[];
}
