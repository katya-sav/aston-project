import { createSlice } from '@reduxjs/toolkit';

import {
  addToHistory,
  removeFromHistory,
  clearHistory,
  getHistory,
} from './thunks';
import type { HistorySlice } from './types';
import { HistoryStatus } from './types';

const initialState: HistorySlice = {
  history: [],
  status: HistoryStatus.init,
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToHistory.fulfilled, (state, action) => {
      state.history = [action.payload, ...state.history];
    });

    builder.addCase(removeFromHistory.fulfilled, (state, action) => {
      state.history = state.history.filter(({ id }) => id !== action.payload);
    });

    builder.addCase(clearHistory.fulfilled, (state) => {
      state.history = [];
    });

    builder.addCase(getHistory.pending, (state) => {
      state.status = HistoryStatus.loading;
    });

    builder.addCase(getHistory.fulfilled, (state, action) => {
      state.history = action.payload;
      state.status = HistoryStatus.success;
    });
  },
});

export const historyActions = {
  addToHistory,
  removeFromHistory,
  clearHistory,
  getHistory,
};

export const historyReducer = historySlice.reducer;
