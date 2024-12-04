import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import defaultAxios, { API_KEY } from '../utils/api';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
}

interface MoviesState {
  movies: Movie[];
  totalPages: number;
  loading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  totalPages: 0,
  loading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk<
  { movies: Movie[]; totalResults: number },
  { searchTerm?: string; releaseYear?: string; page: number }
>('movies/fetchMovies', async ({ searchTerm, releaseYear, page }) => {
  const params: Record<string, string | number> = {
    apikey: `${API_KEY}`,
    s: searchTerm || 'Pokemon',
    page,
  };

  if (releaseYear) {
    params.y = releaseYear;
  }

  const response = await defaultAxios.get('', { params });
  return {
    movies: response.data.Search as Movie[],
    totalResults: parseInt(response.data.totalResults, 10),
  };
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.movies;
        state.totalPages = Math.ceil(action.payload.totalResults / 10);
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to fetch movies';
        state.loading = false;
      });
  },
});

export default moviesSlice.reducer;
