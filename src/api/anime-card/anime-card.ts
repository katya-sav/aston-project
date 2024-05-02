import { mapAnimeCard } from './map-anime-card';

export const getAnimeCard = async (animeId: string) => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`, {
      method: 'GET',
      headers: { accept: 'application/json' },
    });

    const results = await response.json();

    const res = mapAnimeCard(results.data);

    return res;
  } catch (error) {
    throw error;
  }
};
