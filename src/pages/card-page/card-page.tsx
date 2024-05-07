import { useParams } from 'react-router-dom';

import { AnimeCard } from '../../components/anime-card';
import { useGetAnimeCardQuery } from '../../api/anime-api';

export const CardPage = () => {
  const { id } = useParams();
  const { data: animeCard } = useGetAnimeCardQuery(Number(id));

  if (!animeCard) {
    return null;
  }

  return (
    <div>
      <AnimeCard anime={animeCard} />
    </div>
  );
};
