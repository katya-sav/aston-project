import { createSelector } from '../../create-selector';

export const selectIsAnimeInFavorites = createSelector(
  [(state) => state.favorites.favorites, (_, id?: number) => id],
  (favorites, id) =>
    id ? Boolean(favorites.find(({ malId }) => malId === id)) : false,
);
