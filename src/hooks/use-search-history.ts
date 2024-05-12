import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { historyActions } from '../store/slices/history';
import { useAppDispatch, type RootState } from '../store';

export const useSearchHistory = () => {
  const dispatch = useAppDispatch();

  const history = useSelector((state: RootState) => state.history.history);

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
