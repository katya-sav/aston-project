import { mapAnimeList } from './map-anime-list';

export const getAnimeList = async () => {
  try {
    const response = await fetch('https://api.jikan.moe/v4/anime?limit=10', {
      method: 'GET',
      headers: { accept: 'application/json' },
    });

    const results = await response.json();

    const res = mapAnimeList(results.data);

    return res;
  } catch (error) {
    throw error;
  }
};
