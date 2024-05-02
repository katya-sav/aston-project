import { useState, useEffect } from 'react';

import { getAnimeCard } from '../../../api/anime-card/anime-card';

import { Anime } from '../../../types';

export const useAnimeCard = (id: string | undefined) => {
  const [item, setItem] = useState<Anime>();

  useEffect(() => {
    if (id) {
      getAnimeCard(id).then((res) => {
        setItem(res);
      });
    }
  }, [id]);

  return { item };
};
