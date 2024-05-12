import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

import { Text, Button } from '../../shared/ui';

import styles from './history-item.module.css';

type Props = {
  value: string;
  id: string;
  onClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
};

export const HistoryItem = ({ id, value, onClick, onDeleteClick }: Props) => {
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
