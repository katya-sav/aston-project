import { useCallback } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

import { useSearchHistory } from '../../hooks';
import { HistoryItem } from '../history-item';
import type { Search } from '../../types';

import styles from './history-list.module.css';

type Props = {
  history: Search[];
};

export const HistoryList = ({ history }: Props) => {
  const navigate = useNavigate();
  const { removeFromHistory } = useSearchHistory();

  const navigateToSearch = useCallback(
    (searchQuery: string) => {
      navigate({
        pathname: `/search/${searchQuery}`,
        search: `?${createSearchParams({ page: '1' })}`,
      });
    },
    [navigate],
  );

  return (
    <div className={styles.list}>
      {history.map(({ id, query }) => (
        <HistoryItem
          key={id}
          id={id}
          value={query}
          onClick={navigateToSearch}
          onDeleteClick={removeFromHistory}
        />
      ))}
    </div>
  );
};
