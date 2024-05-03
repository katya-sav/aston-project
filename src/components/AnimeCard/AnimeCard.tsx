import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { Text, Icon } from '../../shared/ui';

import { getValidateText } from '../../utils';

import { Anime } from '../../types';
import styles from './AnimeCard.module.css';

type Props = {
  anime: Anime | null;
};

export const AnimeCard = ({ anime }: Props) => {
  if (!anime) {
    return null;
  }

  const { title, year, image, synopsis, score, rating, episodes, type } = anime;

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <img src={image ?? undefined} />
        <Icon icon={faHeart} size="2xl" className={styles.icon} />
      </div>
      <div>
        <Text block size="xl" weight={600}>
          {title}
        </Text>
        <Text block>Sypopsis: {synopsis ? synopsis : 'No data'}</Text>
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
      </div>
    </div>
  );
};
