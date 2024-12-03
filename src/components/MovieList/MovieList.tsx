import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './MovieList.module.scss';
import { fetchMovies } from '../../slices/moviesSlice';
import { AppDispatch, RootState } from '../../store';
import Error from '../Error';
import LoadingSpinner from '../LoadingSpinner';
import Pagination from '../Pagination/index';

const MovieList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { movies, totalPages, loading, error } = useSelector(
    (state: RootState) => state.movies,
  );
  const { searchTerm, releaseYear } = useSelector(
    (state: RootState) => state.search,
  );

  useEffect(() => {
    dispatch(fetchMovies({ searchTerm, releaseYear, page: currentPage }));
  }, [dispatch, searchTerm, releaseYear, currentPage]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const handleRowClick = (imdbID: string) => {
    navigate(`/details/${imdbID}`);
  };

  return (
    <div className={styles['table-container']}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Release Date</th>
            <th>IMDb ID</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr
              key={movie.imdbID}
              onClick={() => handleRowClick(movie.imdbID)}
              className={styles['clickable-row']}
            >
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.imdbID}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default MovieList;
