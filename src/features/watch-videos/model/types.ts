export type VideoType =
  | 'Trailer'
  | 'Teaser'
  | 'Featurette'
  | 'Bloopers'
  | 'BehindTheScenes'
  | 'OpeningCredits'
  | 'Clip';

export interface VideosAttributes {
  cinematicId: Id;
  videosTypes: VideoType[] | null | undefined;
}
