import { useCallback } from 'react';

import {
  favoritesActions,
  useFavoritesUser,
  useIsFavorites,
} from '../store/slices/favorites';
import { useAppDispatch } from '../store';
import type { Anime } from '../types';

type Args = {
  malId?: number;
};

export const useFavorites = ({ malId }: Args = {}) => {
  const dispatch = useAppDispatch();

  const isFavorite = useIsFavorites(malId);

  const favorites = useFavoritesUser();

  const toggleFavoritesState = useCallback(
    (anime: Anime) => {
      if (isFavorite) {
        dispatch(favoritesActions.removeFromFavorites(anime.malId));
      } else {
        dispatch(favoritesActions.addToFavorites(anime));
      }
    },
    [isFavorite, dispatch],
  );

  return {
    isFavorite,
    toggleFavoritesState,
    favorites,
  };
};
