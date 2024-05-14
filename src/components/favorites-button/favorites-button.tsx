import PropTypes from 'prop-types';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '../../shared/ui';
import styles from './favorites-button.module.css';

//@ts-expect-error covered by prop types
export const FavoritesButton = ({ isFavorite, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    onClick();
  };
  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <Icon
        icon={isFavorite ? faHeartSolid : faHeart}
        size="xl"
        className={styles.icon}
      />
    </div>
  );
};

FavoritesButton.propTypes = {
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func,
};
