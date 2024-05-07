import { SuggestItem } from '../suggest-item';

import type { Anime } from '../../types';

import styles from './suggest-list.module.css';

type Props = {
  anime: Anime[];
  onClick: (id: number) => void;
};

export const SuggestList = ({ anime, onClick }: Props) => {
  return (
    <div className={styles.wrapper}>
      {anime.map((item) => (
        <SuggestItem key={item.malId} anime={item} onClick={onClick} />
      ))}
    </div>
  );
};
