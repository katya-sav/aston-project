import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Text, Icon } from '../../shared/ui';

import styles from './loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <Text size="xl" weight={500} className={styles.text}>
        Loading...
      </Text>
      <Icon icon={faSpinner} size="2xl" className={styles.spinner}></Icon>
    </div>
  );
};
