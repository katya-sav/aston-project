import { useState, useEffect } from 'react';

import { getAnimeList } from '../../api/anime-list';
import { AnimeShow } from '../AnimeShow';

import { Anime } from '../../types';

import styles from './AnimeList.module.css';

export const AnimeList = () => {
  const [list, setList] = useState<Anime[]>([]);

  useEffect(() => {
    getAnimeList().then((res) => {
      setList(res);
    });
  }, []);

  return (
    <div className={styles.list}>
      {list.map((item) => (
        <AnimeShow key={item.id} anime={item} />
      ))}
    </div>
  );
};
