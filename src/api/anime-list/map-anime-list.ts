import { Anime, AnimeRaw } from '../../types';

export const mapAnimeList = (data: AnimeRaw[]): Anime[] =>
  data.map((item) => ({
    id: item.mal_id,
    title: item.title,
    year: item.year,
    score: item.score,
    synopsis: item.synopsis,
    rating: item.rating,
    episodes: item.episodes,
    type: item.type,
    image: item.images.jpg.image_url,
  }));
