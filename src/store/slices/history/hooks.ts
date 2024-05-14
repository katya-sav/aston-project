import { useSelector } from 'react-redux';

import type { RootState } from '../../store';

export const useHistory = () =>
  useSelector((state: RootState) => state.history.history);
