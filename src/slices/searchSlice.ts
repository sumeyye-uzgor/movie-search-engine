import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchTerm: string;
  releaseYear: string;
}

const initialState: SearchState = {
  searchTerm: 'Pokemon',
  releaseYear: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    setReleaseYear(state, action: PayloadAction<string>) {
      state.releaseYear = action.payload;
    },
  },
});

export const { setSearchTerm, setReleaseYear } = searchSlice.actions;
export default searchSlice.reducer;
