import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import defaultAxios, { API_KEY } from '../utils/api';

interface MovieDetails {
  Title: string;
  Year?: string;
  Genre?: string;
  Director?: string;
  Actors?: string;
  Plot?: string;
  Poster?: string;
  imdbRating?: string;
}

interface MovieDetailsState {
  movieDetails: Record<string, MovieDetails>;
  loading: boolean;
  error: string | null;
}

interface RootState {
  movieDetails: MovieDetailsState;
}

const initialState: MovieDetailsState = {
  movieDetails: {},
  loading: false,
  error: null,
};

export const fetchMovieDetails = createAsyncThunk<
  { id: string; data: MovieDetails },
  string,
  { state: RootState }
>(
  'movieDetails/fetchMovieDetails',
  async (id, { getState, rejectWithValue }) => {
    const { movieDetails } = getState().movieDetails;

    if (movieDetails[id]) {
      return { id, data: movieDetails[id] };
    }

    try {
      const response = await defaultAxios.get('', {
        params: { apikey: API_KEY, i: id },
      });

      if (response.data.Response === 'False') {
        return rejectWithValue(
          response.data.Error || 'Failed to fetch movie details',
        );
      }

      return {
        id,
        data: response.data,
      };
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unknown error occurred.');
    }
  },
);

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        const { id, data } = action.payload;
        state.movieDetails[id] = data;
        state.loading = false;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.error =
          (action.payload as string) || 'Failed to fetch movie details.';
        state.loading = false;
      });
  },
});

export default movieDetailsSlice.reducer;
