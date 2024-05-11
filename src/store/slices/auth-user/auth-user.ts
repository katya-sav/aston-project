import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { AuthStatus, type User, AuthUserlice } from './types';

const initialState: AuthUserlice = {
  user: { id: '', email: '' },
  authStatus: AuthStatus.loading,
};

const authUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userSignedUp(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.authStatus = AuthStatus.signedUp;
    },
    userSignedIn(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.authStatus = AuthStatus.signedIn;
    },
    userSignedOut(state) {
      state.user = initialState.user;
      state.authStatus = AuthStatus.signedOut;
    },
  },
});

const { userSignedUp, userSignedIn, userSignedOut } = authUserSlice.actions;

export const slice = { userSignedUp, userSignedIn, userSignedOut };

export const authUserReducer = authUserSlice.reducer;
