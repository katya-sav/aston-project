import { useSearchHistory } from '../../hooks';
import { HistoryList } from '../../components/history-list';
import { Text, Button } from '../../shared/ui';

import styles from './history-page.module.css';

export const HistoryPage = () => {
  const { history, clearHistory } = useSearchHistory();

  const hasHistory = history.length > 0;

  return (
    <div className={styles.wrapper}>
      <Text block className={styles.title} size="xl" weight={600}>
        History
      </Text>
      {hasHistory ? (
        <HistoryList history={history} />
      ) : (
        <Text size="l" weight={400}>
          There is no history yet :(
        </Text>
      )}
      {hasHistory && (
        <Button className={styles.clearButton} onClick={clearHistory}>
          Clear all history
        </Button>
      )}
    </div>
  );
};
