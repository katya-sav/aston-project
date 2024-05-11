import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  selectIsAnimeInFavorites,
  favoritesActions,
} from '../store/slices/favorites';
import { useAppDispatch, type RootState } from '../store';
import type { Anime } from '../types';

type Args = {
  malId?: number;
};

export const useFavorites = ({ malId }: Args = {}) => {
  const dispatch = useAppDispatch();

  const isFavorite = useSelector((state: RootState) =>
    selectIsAnimeInFavorites(state, malId),
  );

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  );

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
