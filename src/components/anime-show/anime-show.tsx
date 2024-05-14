import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Text } from '../../shared/ui';

import { FavoritesButton } from '../favorites-button';
import { getValidateText } from '../../utils';
import type { Anime } from '../../types';
import { useFavorites } from '../../hooks';
import { useUser } from '../../store/slices/auth-user';

import styles from './anime-show.module.css';

type Props = {
  anime: Anime;
};

export const AnimeShow = ({ anime }: Props) => {
  const { malId, title, year, images, synopsis } = anime;
  const navigate = useNavigate();

  const { isFavorite, toggleFavoritesState } = useFavorites({ malId });

  const user = useUser();

  const handleNavigate = useCallback(() => {
    navigate(`/card/${malId}`, { replace: false });
  }, [navigate, malId]);

  const handleFavoriteClick = useCallback(() => {
    toggleFavoritesState(anime);
  }, [toggleFavoritesState, anime]);

  return (
    <div className={styles.wrapper} onClick={handleNavigate}>
      <div className={styles.leftSide}>
        <img src={images.imageUrl ?? undefined} alt={title} />
      </div>
      <div className={styles.rightSide}>
        <div>
          <Text block size="xl" weight={500}>
            {title}
          </Text>
          <Text block>Year: {getValidateText(year)}</Text>
          <Text block>Sypopsis: {getValidateText(synopsis)}</Text>
        </div>
        {user ? (
          <FavoritesButton
            isFavorite={isFavorite}
            onClick={handleFavoriteClick}
          />
        ) : null}
      </div>
    </div>
  );
};
