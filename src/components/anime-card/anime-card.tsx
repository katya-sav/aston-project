import { useCallback } from 'react';

import { Text } from '../../shared/ui';
import { FavoritesButton } from '../favorites-button';
import { getValidateText } from '../../utils';
import type { Anime } from '../../types';
import { useFavorites } from '../../hooks';
import { useUser } from '../../store/slices/auth-user';

import styles from './anime-card.module.css';

type Props = {
  anime: Anime;
};

export const AnimeCard = ({ anime }: Props) => {
  const {
    title,
    year,
    images,
    synopsis,
    score,
    rating,
    episodes,
    type,
    malId,
  } = anime;

  const { isFavorite, toggleFavoritesState } = useFavorites({ malId });

  const user = useUser();

  const handleFavoriteClick = useCallback(() => {
    toggleFavoritesState(anime);
  }, [toggleFavoritesState, anime]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <img src={images.imageUrl ?? undefined} />
      </div>
      <div>
        <Text block size="xl" weight={600} className={styles.title}>
          {title}
        </Text>
        <Text block>Sypopsis: {getValidateText(synopsis)}</Text>
        <div className={styles.info}>
          <Text block size="l" weight={600}>
            Info
          </Text>
          <Text block>Year: {getValidateText(year)}</Text>
          <Text block>Type: {getValidateText(type)}</Text>
          <Text block>Score: {getValidateText(score)}</Text>
          <Text block>Rating: {getValidateText(rating)}</Text>
          <Text block>Episodes: {getValidateText(episodes)}</Text>
        </div>
        {user ? (
          <div className={styles.button}>
            <FavoritesButton
              isFavorite={isFavorite}
              onClick={handleFavoriteClick}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
