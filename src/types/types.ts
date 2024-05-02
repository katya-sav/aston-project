export type Anime = {
  id: number;
  title: string;
  year: number | null;
  score: number | null;
  synopsis: string | null;
  episodes: number | null;
  rating: string | null;
  type: string | null;
  image: string | null;
};

export type AnimeRaw = {
  mal_id: number;
  title: string;
  year: number | null;
  score: number | null;
  synopsis: string | null;
  type: string | null;
  episodes: number | null;
  rating: string | null;
  images: AnimeImagesRaw;
};

export type AnimeImagesRaw = {
  jpg: {
    image_url: string | null;
    small_image_url: string | null;
    large_image_url: string | null;
  };
};
