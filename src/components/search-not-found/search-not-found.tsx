import { Text } from '../../shared/ui';

import styles from './search-not-found.module.css';

type TSearchNotFoundProps = {
  searchQuery?: string;
};

export const SearchNotFound = ({ searchQuery }: TSearchNotFoundProps) => (
  <Text className={styles.text} size="xl" weight={500}>
    No results for &quot;{searchQuery}&quot;. Please try again
  </Text>
);
