import { Anime, AnimeRaw } from '../../types';

export const mapAnimeCard = (data: AnimeRaw): Anime => ({
  id: data.mal_id,
  title: data.title,
  year: data.year,
  score: data.score,
  synopsis: data.synopsis,
  rating: data.rating,
  episodes: data.episodes,
  type: data.type,
  image: data.images.jpg.large_image_url,
});
