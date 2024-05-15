import { Text } from '../../shared/ui';

import styles from './search-not-found.module.css';

type TSearchNotFoundProps = {
  searchQuery?: string;
};

export const SearchNotFound = ({ searchQuery }: TSearchNotFoundProps) => (
  <div className={styles.wrapper}>
    <Text size="xl" weight={500}>
      No results for &quot;{searchQuery}&quot;
    </Text>
    <Text className={styles.text} size="l" weight={500}>
      Please try again
    </Text>
  </div>
);
