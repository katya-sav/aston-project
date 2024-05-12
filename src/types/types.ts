export type AnimeRaw = {
  mal_id: number;
  title: string;
  year: number | null;
  score: number | null;
  synopsis: string | null;
  type: string | null;
  episodes: number | null;
  rating: string | null;
  images: {
    jpg: AnimeImagesRaw;
    webp: AnimeImagesRaw;
  };
};

export type Anime = {
  malId: number;
  title: string;
  year: number | null;
  score: number | null;
  synopsis: string | null;
  episodes: number | null;
  rating: string | null;
  type: string | null;
  images: AnimeImages;
};

export type PaginationAnimeRaw = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
  };
};
export type PaginationAnime = {
  lastVisiblePage: number;
  hasNextPage: boolean;
  currentPage: number;
};

export type AnimeQuery = {
  data: Anime[];
  pagination: PaginationAnime;
};

export type AnimeOneQuery = Anime;

export type AnimeResponse = {
  data: AnimeRaw[];
  pagination: PaginationAnimeRaw;
};

export type AnimeOneResponse = {
  data: AnimeRaw;
};

export type AnimeImagesRaw = {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
};

export type AnimeImages = {
  imageUrl: string | null;
  largeImageUrl: string | null;
};

export type Search = {
  query: string;
  id: string;
};
