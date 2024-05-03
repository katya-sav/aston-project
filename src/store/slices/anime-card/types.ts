import { Anime, FetchingState } from '../../../types';

export type AnimeCardSlice = {
  animeCard: { [id: string]: Anime | null };
  error: unknown;
  state: FetchingState;
};
