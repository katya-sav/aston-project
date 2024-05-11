import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch, type RootState } from '../store';

import { authUserActions, type AuthPayload } from '../store/slices/auth-user';

export const useAuthUser = () => {
  const dispatch = useAppDispatch();

  const user = useSelector((state: RootState) => {
    return state.user.user;
  });

  const authStatus = useSelector((state: RootState) => {
    return state.user.authStatus;
  });

  const userChecked = useSelector((state: RootState) => {
    return state.user.userChecked;
  });

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
    getUser,
    authStatus,
    signUpUser,
    signInUser,
    signOutUser,
  };
};
