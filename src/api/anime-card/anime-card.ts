import { mapAnimeCard } from './map-anime-card';

import { Anime } from '../../types';

type GetCardSuccess = {
  type: 'success';
  data: Anime;
};

type GetCardError = {
  type: 'error';
  error: unknown;
};

type GetCardResponse = GetCardSuccess | GetCardError;

export const getAnimeCard = async (
  animeId: string | undefined,
): Promise<GetCardResponse> => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`, {
      method: 'GET',
      headers: { accept: 'application/json' },
    });

    const results = await response.json();

    const data = mapAnimeCard(results.data);

    return { type: 'success', data };
  } catch (error) {
    return { type: 'error', error };
  }
};
