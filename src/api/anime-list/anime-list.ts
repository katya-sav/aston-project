import { mapAnimeList } from './map-anime-list';

import { Anime } from '../../types';

type GetAnimeSuccess = {
  type: 'success';
  data: Anime[];
};

type GetAnimeError = {
  type: 'error';
  error: unknown;
};

type GetAnimeResponse = GetAnimeSuccess | GetAnimeError;

export const getAnimeList = async (): Promise<GetAnimeResponse> => {
  try {
    const response = await fetch('https://api.jikan.moe/v4/anime?limit=10', {
      method: 'GET',
      headers: { accept: 'application/json' },
    });

    const results = await response.json();

    const data = mapAnimeList(results.data);

    return { type: 'success', data };
  } catch (error) {
    return { type: 'error', error };
  }
};
