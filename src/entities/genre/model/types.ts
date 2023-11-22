export interface Genre {
  id: Id;
  name: string;
}

export type GenreList = MapOf<Genre>;
