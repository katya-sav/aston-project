import { useSelector } from 'react-redux';

import { selectIsAnimeInFavorites } from './selectors';
import type { RootState } from '../../store';

export const useFavoritesUser = () =>
  useSelector((state: RootState) => state.favorites.favorites);

export const useIsFavorites = (malId: number | undefined) =>
  useSelector((state: RootState) => selectIsAnimeInFavorites(state, malId));
