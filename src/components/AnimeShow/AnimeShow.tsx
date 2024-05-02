import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { Text, Icon } from '../../shared/ui';
import { getValidateText } from '../../utils';
import type { Anime } from '../../types';

import styles from './AnimeShow.module.css';

type Props = {
  anime: Anime;
};

export const AnimeShow = ({ anime }: Props) => {
  const { id, title, year, image, synopsis } = anime;
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(`/card/${id}`, { replace: false });
  }, [navigate, id]);

  return (
    <div className={styles.wrapper} onClick={handleNavigate}>
      <div className={styles.leftSide}>
        <img src={image ?? undefined} />
      </div>
      <div className={styles.rightSide}>
        <div>
          <Text block size="xl" weight={500}>
            {title}
          </Text>
          <Text block>Year: {getValidateText(year)}</Text>
          <Text block>Sypopsis: {getValidateText(synopsis)}</Text>
        </div>
        <Icon icon={faHeart} size="xl" />
      </div>
    </div>
  );
};
