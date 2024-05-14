import { useCallback } from 'react';

import { historyActions, useHistory } from '../store/slices/history';
import { useAppDispatch } from '../store';

export const useSearchHistory = () => {
  const dispatch = useAppDispatch();

  const history = useHistory();

  const addToHistory = useCallback(
    (query: string) => {
      dispatch(historyActions.addToHistory(query));
    },
    [dispatch],
  );

  const removeFromHistory = useCallback(
    (id: string) => {
      dispatch(historyActions.removeFromHistory(id));
    },
    [dispatch],
  );

  const clearHistory = useCallback(() => {
    dispatch(historyActions.clearHistory());
  }, [dispatch]);

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
  };
};
