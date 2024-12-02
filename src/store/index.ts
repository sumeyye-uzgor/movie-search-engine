import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slices/searchSlice';
import moviesReducer from '../slices/moviesSlice';
import movieDetailsReducer from '../slices/movieDetailsSlice';

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
