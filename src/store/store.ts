import { configureStore } from '@reduxjs/toolkit';

import { animeReducer } from './slices/anime-list';
import { animeCardReducer } from './slices/anime-card/slice';

export const store = configureStore({
  reducer: {
    anime: animeReducer,
    animeCard: animeCardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
