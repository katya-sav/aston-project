import { AnimeShow } from '../anime-show';
import type { Anime } from '../../types';

import { Text } from '../../shared/ui';
import styles from './anime-list.module.css';

type Props = {
  anime: Anime[];
  searchQuery?: string;
};

export const AnimeList = ({ anime, searchQuery }: Props) => {
  return (
    <div className={styles.list}>
      <Text size="xxl" weight={600} className={styles.title}>
        {searchQuery}
      </Text>
      {anime.map((item) => (
        <AnimeShow key={item.malId} anime={item} />
      ))}
    </div>
  );
};
