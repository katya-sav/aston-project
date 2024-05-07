import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { Text, Icon } from '../../shared/ui';
import { getValidateText } from '../../utils';
import type { Anime } from '../../types';

import styles from './anime-card.module.css';

type Props = {
  anime: Anime;
};

export const AnimeCard = ({ anime }: Props) => {
  const { title, year, images, synopsis, score, rating, episodes, type } =
    anime;

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <img src={images.imageUrl ?? undefined} />
        <Icon icon={faHeart} size="2xl" className={styles.icon} />
      </div>
      <div>
        <Text block size="xl" weight={600}>
          {title}
        </Text>
        <Text block>Sypopsis: {getValidateText(synopsis)}</Text>
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
