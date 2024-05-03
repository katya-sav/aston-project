import { createSlice } from '@reduxjs/toolkit';

import { createThunk } from '../../create-thunk';
import { getAnimeList } from '../../../api/anime-list';

import { AnimeSliceState } from './types';

export const fetchAnime = createThunk('anime/animeList', async () => {
  const response = await getAnimeList();

  if (response.type === 'success') {
    return { data: response.data };
  }

  throw response.error;
});

const initialState: AnimeSliceState = {
  anime: [],
  error: null,
  state: 'init',
};

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAnime.pending, (state) => {
      state.state = 'loading';
    });
    {
      builder.addCase(fetchAnime.fulfilled, (state, action) => {
        state.state = 'success';
        state.anime = action.payload.data;
      });
    }
    {
      builder.addCase(fetchAnime.rejected, (state, action) => {
        state.state = 'failure';
        state.error = action.error;
      });
    }
  },
});

export const animeReducer = animeSlice.reducer;
