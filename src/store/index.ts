import { configureStore } from '@reduxjs/toolkit';

import movieDetailsReducer from '../slices/movieDetailsSlice';
import moviesReducer from '../slices/moviesSlice';
import searchReducer from '../slices/searchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
