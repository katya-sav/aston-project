import { configureStore } from '@reduxjs/toolkit';

import { animeApi } from '../api/anime-api';
import { authUserReducer } from './slices/auth-user';
import { favoritesReducer } from './slices/favorites';
import { historyReducer } from './slices/history';

export const store = configureStore({
  reducer: {
    user: authUserReducer,
    favorites: favoritesReducer,
    history: historyReducer,
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
