import {
  Anime,
  AnimeRaw,
  PaginationAnime,
  PaginationAnimeRaw,
} from '../../types';

export const transformAnimeData = (anime: AnimeRaw): Anime => {
  const {
    mal_id,
    title,
    year,
    synopsis,
    images,
    score,
    episodes,
    rating,
    type,
  } = anime;

  return {
    type,
    score,
    episodes,
    rating,
    year,
    synopsis,
    malId: mal_id,
    title,
    images: {
      imageUrl: images.jpg.image_url,
      largeImageUrl: images.jpg.large_image_url,
    },
  };
};

export const transformAnimePagination = (
  pagination: PaginationAnimeRaw,
): PaginationAnime => {
  const { last_visible_page, has_next_page, current_page } = pagination;

  return {
    lastVisiblePage: last_visible_page,
    hasNextPage: has_next_page,
    currentPage: current_page,
  };
};
