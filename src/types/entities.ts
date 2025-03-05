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
  voteAverage: number;
  overview: string;
  actors: Actor[];
  streamingProviders: string[];
}
