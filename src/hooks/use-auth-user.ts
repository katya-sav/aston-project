import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { firebaseApi } from '../api/firebase-api';
import { RootState, useAppDispatch } from '../store/index';
import type { User, AuthStatus } from '../store/slices/auth-user/types';

import { slice } from '../store/slices/auth-user';

type useAuthUserResult = {
  user: User;
  authStatus: AuthStatus;
  signUpUser: (email: string, password: string) => Promise<void>;
  signInUser: (email: string, password: string) => Promise<void>;
  signOutUser: () => Promise<void>;
  authChecked: () => Promise<void>;
};

export const useAuthUser = (): useAuthUserResult => {
  const { signUp, signIn, signOut, getUser } = firebaseApi;
  const dispatch = useAppDispatch();

  const user = useSelector((state: RootState) => {
    return state.user.user;
  });

  const authStatus = useSelector((state: RootState) => {
    return state.user.authStatus;
  });

  const signUpUser = useCallback(
    async (email: string, password: string): Promise<void> => {
      try {
        const userCredential = await signUp(email, password);
        const user = {
          id: userCredential.user.uid,
          email: userCredential.user.email || '',
        };
        dispatch(slice.userSignedUp(user));
      } catch (e) {
        throw Error;
      }
    },
    [dispatch, signUp],
  );

  const signInUser = useCallback(
    async (email: string, password: string): Promise<void> => {
      try {
        const userCredential = await signIn(email, password);
        const user = {
          id: userCredential.user.uid,
          email: userCredential.user.email || '',
        };
        dispatch(slice.userSignedIn(user));
      } catch (e) {
        throw Error;
      }
    },
    [dispatch, signIn],
  );

  const signOutUser = useCallback(async (): Promise<void> => {
    try {
      await signOut();
      dispatch(slice.userSignedOut());
    } catch (e) {
      throw Error;
    }
  }, [dispatch, signOut]);

  const authChecked = useCallback(async (): Promise<void> => {
    try {
      const data = await getUser();
      if (!data) {
        dispatch(slice.userSignedOut());
        return;
      }
      const user = { email: data.email ?? '', id: data.uid };
      dispatch(slice.userSignedIn(user));
    } catch (e) {
      dispatch(slice.userSignedOut());
      throw Error;
    }
  }, [dispatch, getUser]);

  return {
    user,
    authStatus,
    signUpUser,
    signInUser,
    signOutUser,
    authChecked,
  };
};
