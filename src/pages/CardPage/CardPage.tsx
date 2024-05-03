import { useParams } from 'react-router-dom';

import { AnimeCard } from '../../components/AnimeCard';
import { useAnimeCard } from './hooks';

export const CardPage = () => {
  const { id } = useParams();
  const animeCard = useAnimeCard(id);

  if (!animeCard) {
    return null;
  }

  return (
    <div>
      <AnimeCard anime={animeCard.animeCard} />
    </div>
  );
};
