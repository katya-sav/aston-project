import type { Anime } from '../../../types';

export enum FavoritesStatus {
  init = 'Init',
  loading = 'Loading',
  success = 'Success',
}

export type FavoritesSlice = {
  favorites: Anime[];
  status: FavoritesStatus;
};
