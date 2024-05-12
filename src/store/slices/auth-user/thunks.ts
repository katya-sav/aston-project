import { firebaseApi } from '../../../api/firebase-api';

import { createThunk } from '../../create-thunk';
import { favoritesActions } from '../favorites';
import { historyActions } from '../history';
import type { AuthPayload } from './types';

export const getUser = createThunk('auth/getUser', async (_, { dispatch }) => {
  const user = await firebaseApi.getUser();

  if (!user) {
    return null;
  }

  dispatch(favoritesActions.getFavorites());
  dispatch(historyActions.getHistory());

  return {
    id: user.uid,
    email: user.email,
  };
});

export const signIn = createThunk(
  'auth/signIn',
  async ({ email, password }: AuthPayload, { dispatch }) => {
    const { user } = await firebaseApi.signIn(email, password);

    if (!user) {
      return null;
    }

    dispatch(favoritesActions.getFavorites());
    dispatch(historyActions.getHistory());

    return {
      id: user.uid,
      email: user.email,
    };
  },
);

export const signUp = createThunk(
  'auth/signUp',
  async ({ email, password }: AuthPayload) => {
    const { user } = await firebaseApi.signUp(email, password);

    if (!user) {
      return null;
    }

    return {
      id: user.uid,
      email: user.email,
    };
  },
);

export const signOut = createThunk('auth/signOut', async () => {
  await firebaseApi.signOut();
});
