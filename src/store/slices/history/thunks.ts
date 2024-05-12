import { nanoid } from 'nanoid';

import { firebaseApi } from '../../../api/firebase-api';

import { createThunk } from '../../create-thunk';

export const addToHistory = createThunk(
  'history/add',
  async (query: string) => {
    const id = nanoid();
    const payload = { query, id };

    await firebaseApi.addToHistory(payload);

    return payload;
  },
);

export const removeFromHistory = createThunk(
  'history/remove',
  async (id: string) => {
    await firebaseApi.removeFromHistory(id);

    return id;
  },
);

export const clearHistory = createThunk('history/clear', async () => {
  await firebaseApi.clearHistory();
});

export const getHistory = createThunk('history/getList', async () => {
  const history = await firebaseApi.getHistory();

  return history;
});
