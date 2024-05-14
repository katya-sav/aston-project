import { useFavorites } from '../../hooks';
import { AnimeList } from '../../components/anime-list';
import { Text } from '../../shared/ui';

import styles from './favorites-page.module.css';

export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  const hasfavorites = favorites.length > 0;

  return (
    <div className={styles.wrapper}>
      <Text className={styles.title} block size="xl" weight={600}>
        Favorites
      </Text>
      {hasfavorites ? (
        <AnimeList anime={favorites} />
      ) : (
        <Text size="l" weight={400} className={styles.text}>
          There is no favorites yet :(
        </Text>
      )}
    </div>
  );
};
