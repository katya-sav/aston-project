import type { Search } from '../../../types';

export enum HistoryStatus {
  init = 'Init',
  loading = 'Loading',
  success = 'Success',
}

export type HistorySlice = {
  history: Search[];
  status: HistoryStatus;
};
