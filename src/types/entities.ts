export interface Actor {
  id: number;
  name: string;
  character: string;
  profilePath: string;
}

export interface MovieDetails {
  title: string;
  posterPath: string;
  releaseDate: string;
  duration: number;
  genres: string[];
  director: string;
  backDropPath: string;
  voteAverage: number;
  overview: string;
  actors: Actor[];
  streamingProviders: { name: string; id: number; logo: string }[];
}

export interface MediaItem {
  mediaId: number;
  mediaType: 'movie' | 'tv';
  mediaTitle: string;
}

export interface SeenMedia extends MediaItem {
  rating?: number;
}
