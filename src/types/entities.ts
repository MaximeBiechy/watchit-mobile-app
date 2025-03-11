export interface Actor {
  id: number;
  name: string;
  character: string;
  profilePath: string;
}

export interface MovieDetails {
  posterPath: string;
  releaseDate: string;
  duration: number;
  genres: string[];
  director: string;
  backDropPath: string;
  voteAverage: number;
  overview: string;
  actors: Actor[];
  streamingProviders: string[];
}

export interface WatchlistItem {
  mediaId: number;
  type: string;
}

export interface SeenListItem {
  mediaId: number;
  type: string;
  rating?: number;
  watchedAt: string;
}
