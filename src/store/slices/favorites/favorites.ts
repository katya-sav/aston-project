import { createSlice } from '@reduxjs/toolkit';

import { getFavorites, addToFavorites, removeFromFavorites } from './thunks';
import type { FavoritesSlice } from './types';
import { FavoritesStatus } from './types';

const initialState: FavoritesSlice = {
  favorites: [],
  status: FavoritesStatus.init,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToFavorites.fulfilled, (state, action) => {
      state.favorites = [action.payload, ...state.favorites];
    });

    builder.addCase(removeFromFavorites.fulfilled, (state, action) => {
      state.favorites = state.favorites.filter(
        ({ malId }) => malId !== action.payload,
      );
    });

    builder.addCase(getFavorites.pending, (state) => {
      state.status = FavoritesStatus.loading;
    });

    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload;

      state.status = FavoritesStatus.success;
    });
  },
});

export const favoritesActions = {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
};

export const favoritesReducer = favoritesSlice.reducer;
