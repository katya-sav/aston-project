import { Anime, FetchingState } from '../../../types';

export type AnimeSliceState = {
  anime: Anime[];
  error: unknown;
  state: FetchingState;
};
