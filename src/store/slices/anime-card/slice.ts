import { createSlice } from '@reduxjs/toolkit';

import { createThunk } from '../../create-thunk';
import { getAnimeCard } from '../../../api/anime-card';

import { AnimeCardSlice } from './types';

export const fetchAnimeCard = createThunk(
  'anime/animeCard',
  async (animeId: string | undefined) => {
    const response = await getAnimeCard(animeId);

    if (response.type === 'success') {
      return response.data;
    }

    throw response.error;
  },
);

const initialState: AnimeCardSlice = {
  animeCard: {},
  error: null,
  state: 'init',
};

const animeCardSlice = createSlice({
  name: 'animeCard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnimeCard.pending, (state) => {
      state.state = 'loading';
    });
    {
      builder.addCase(fetchAnimeCard.fulfilled, (state, action) => {
        state.animeCard[action.payload.id] = action.payload;
        state.state = 'success';
      });
    }
    {
      builder.addCase(fetchAnimeCard.rejected, (state, action) => {
        state.error = action.error;
        state.state = 'failure';
      });
    }
  },
});

export const animeCardReducer = animeCardSlice.reducer;
