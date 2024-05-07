import { AnimeShow } from '../anime-show';

import type { Anime } from '../../types';

import styles from './anime-list.module.css';

type Props = {
  anime: Anime[];
  searchQuery?: string;
};

export const AnimeList = ({ anime, searchQuery }: Props) => {
  return (
    <div className={styles.list}>
      <h1>{searchQuery}</h1>
      {anime.map((item) => (
        <AnimeShow key={item.malId} anime={item} />
      ))}
    </div>
  );
};
