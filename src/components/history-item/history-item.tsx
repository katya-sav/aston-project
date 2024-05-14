import PropTypes from 'prop-types';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

import { Text, Button } from '../../shared/ui';

import styles from './history-item.module.css';

// @ts-expect-error covered by prop types
export const HistoryItem = ({ id, value, onClick, onDeleteClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    onClick(value);
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    onDeleteClick(id);
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <Text>{value}</Text>
      <Button
        onClick={handleDeleteClick}
        className={styles.button}
        outline={false}
        icon={faXmarkCircle}
        iconCn={styles.buttonIcon}
        iconSize="xl"
      />
    </div>
  );
};

HistoryItem.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
};
