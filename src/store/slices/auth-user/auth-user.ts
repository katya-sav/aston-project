import { createSlice, type UnknownAction } from '@reduxjs/toolkit';

import { getUser, signIn, signOut, signUp } from './thunks';
import type { AuthUserSlice } from './types';
import { AuthStatus } from './types';

const initialState: AuthUserSlice = {
  user: null,
  authStatus: AuthStatus.signedOut,
  userChecked: false,
};

const authUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      const user = action.payload;
      state.user = user;

      state.authStatus = user ? AuthStatus.signedIn : AuthStatus.signedOut;
      state.userChecked = true;
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      const user = action.payload;
      state.user = user;

      state.authStatus = user ? AuthStatus.signedIn : AuthStatus.signedOut;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
      const user = action.payload;
      state.user = user;

      state.authStatus = user ? AuthStatus.signedIn : AuthStatus.signedOut;
    });

    builder.addCase(signOut.fulfilled, (state) => {
      state.user = null;
      state.authStatus = AuthStatus.signedOut;
    });

    builder.addMatcher(isAuthPending, (state) => {
      state.authStatus = AuthStatus.loading;
    });
  },
});

function isAuthPending(action: UnknownAction) {
  return (
    typeof action.type === 'string' &&
    action.type.endsWith('/pending') &&
    action.type.startsWith('auth/')
  );
}

export const authUserActions = {
  signIn,
  signUp,
  signOut,
  getUser,
};

export const authUserReducer = authUserSlice.reducer;
