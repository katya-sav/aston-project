import { useParams } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { Text, Icon } from '../../shared/ui';
import { useAnimeCard } from './hooks';
import { getValidateText } from '../../utils';

import styles from './AnimeCard.module.css';

export const AnimeCard = () => {
  const { id } = useParams();
  const { item } = useAnimeCard(id);

  if (!item) {
    return null;
  }

  const { title, year, image, synopsis, score, rating, episodes, type } = item;

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
