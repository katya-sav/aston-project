import { createListenerMiddleware } from '@reduxjs/toolkit';

import { authUserActions } from './slices/auth-user';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: authUserActions.signIn.fulfilled,
  effect: (action) => {
    // eslint-disable-next-line no-console
    console.log(`User signed in. Email: ${action.payload?.email}`);
  },
});
