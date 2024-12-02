import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slices/searchSlice';
import moviesReducer from '../slices/moviesSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
