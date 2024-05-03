import { AnimeShow } from '../AnimeShow';

import { Anime } from '../../types';
import styles from './AnimeList.module.css';

type Props = {
  anime: Anime[];
};
export const AnimeList = ({ anime }: Props) => {
  return (
    <div className={styles.list}>
      {anime.map((item) => (
        <AnimeShow key={item.id} anime={item} />
      ))}
    </div>
  );
};
