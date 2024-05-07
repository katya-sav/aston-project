import type { Anime } from '../../types';

import styles from './suggest-item.module.css';

type Props = {
  anime: Anime;
  onClick: (id: number) => void;
};

export const SuggestItem = ({ anime, onClick }: Props) => {
  return (
    <div className={styles.wrapper} onClick={() => onClick(anime.malId)}>
      {anime.title}
    </div>
  );
};
