import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { fetchMovieDetails } from '../../slices/movieDetailsSlice';
import { RootState, AppDispatch } from '../../store';
import Container from '../Container';
import styles from './MovieDetails.module.scss';
import Button from '../Button';
import Error from '../Error';
import LoadingSpinner from '../LoadingSpinner';

const MovieDetails: React.FC = () => {
  const { id } = useParams<Record<string, string>>();
  const dispatch = useDispatch<AppDispatch>();
  const { movieDetails, loading, error } = useSelector(
    (state: RootState) => state.movieDetails,
  );

  useEffect(() => {
    if (id && !movieDetails[id]) {
      dispatch(fetchMovieDetails(id));
    }
  }, [dispatch, id, movieDetails]);

  if (!id) {
    return <p>Invalid movie ID</p>;
  }

  if (loading && !movieDetails[id]) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const movie = movieDetails[id];

  if (!movie) {
    return (
      <Error message="Movie details could not be found. Please try again later." />
    );
  }
  return (
    <Container>
      <div className={styles.movieDetails}>
        <div className={styles.content}>
          <img
            src={movie?.Poster}
            alt={movie.Title}
            className={styles.poster}
          />
          <div className={styles.info}>
            <h4>{movie?.Title}</h4>

            <p>
              <strong>Year:</strong> {movie?.Year}
            </p>
            <p>
              <strong>Genre:</strong> {movie?.Genre}
            </p>
            <p>
              <strong>Director:</strong> {movie?.Director}
            </p>
            <p>
              <strong>Cast:</strong> {movie?.Actors}
            </p>
            <p>
              <strong>Plot:</strong> {movie?.Plot}
            </p>
            <p>
              <strong>IMDb Rating:</strong> {movie?.imdbRating}
            </p>
            <Link to="/">
              <Button>Back to Movie List</Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MovieDetails;
