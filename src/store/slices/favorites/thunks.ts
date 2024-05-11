import { firebaseApi } from '../../../api/firebase-api';

import { createThunk } from '../../create-thunk';
import type { Anime } from '../../../types';

export const addToFavorites = createThunk(
  'favorites/add',
  async (anime: Anime) => {
    await firebaseApi.addToFavorites(anime);

    return anime;
  },
);

export const removeFromFavorites = createThunk(
  'favorites/remove',
  async (id: number) => {
    await firebaseApi.removeFromFavorites(id);

    return id;
  },
);

export const getFavorites = createThunk('favorites/getList', async () => {
  const favorites = await firebaseApi.getFavorites();

  return favorites;
});
