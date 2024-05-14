import { useCallback } from 'react';

import { useAppDispatch } from '../store';
import {
  authUserActions,
  useUser,
  useAuthStatus,
  useUserChecked,
  useAuthErrors,
  type AuthPayload,
} from '../store/slices/auth-user';

export const useAuthUser = () => {
  const dispatch = useAppDispatch();

  const user = useUser();
  const authStatus = useAuthStatus();
  const userChecked = useUserChecked();
  const errors = useAuthErrors();

  const getUser = useCallback(() => {
    dispatch(authUserActions.getUser());
  }, [dispatch]);

  const signUpUser = useCallback(
    (user: AuthPayload) => {
      dispatch(authUserActions.signUp(user));
    },
    [dispatch],
  );

  const signInUser = useCallback(
    (user: AuthPayload) => {
      dispatch(authUserActions.signIn(user));
    },
    [dispatch],
  );

  const signOutUser = useCallback(() => {
    dispatch(authUserActions.signOut());
  }, [dispatch]);

  return {
    user,
    userChecked,
    errors,
    getUser,
    authStatus,
    signUpUser,
    signInUser,
    signOutUser,
  };
};
