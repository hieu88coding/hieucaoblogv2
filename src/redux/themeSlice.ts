// src/features/theme/themeSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  mode: 'light',  // Chế độ mặc định
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleMode, setMode } = themeSlice.actions;

export default themeSlice.reducer;
