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
  movieDetails: {
    [id: string]: MovieDetails;
  };
  loading: boolean;
  error: string | null;
}

const initialState: MovieDetailsState = {
  movieDetails: {},
  loading: false,
  error: null,
};

export const fetchMovieDetails = createAsyncThunk(
  'movieDetails/fetchMovieDetails',
  async (id: string, { getState }: any) => {
    const { movieDetails }: MovieDetailsState = getState().movieDetails;
    if (movieDetails[id]) return { id, data: movieDetails[id] };
    const response = await defaultAxios.get('', {
      params: { apikey: API_KEY, i: id },
    });
    return {
      id,
      data: response.data,
    };
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
        state.error = action.error.message || 'Failed to fetch movie details';
        state.loading = false;
      });
  },
});

export default movieDetailsSlice.reducer;