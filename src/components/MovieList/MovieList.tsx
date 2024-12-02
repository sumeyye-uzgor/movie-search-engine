import React, { useEffect, useState } from 'react';
import defaultAxios, { API_KEY } from '../../utils/api';
import styles from './MovieList.module.scss';
import Pagination from '../Pagination/index';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('Pokemon');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [releaseYear, setReleaseYear] = useState<string>('');

  useEffect(() => {
    fetchMovies(searchTerm, page);
  }, [searchTerm, page]);

  const fetchMovies = async (query: string, page: number) => {
    try {
      const params: any = {
        apikey: API_KEY,
        s: query,
        page: page,
      };
      if (releaseYear) {
        params.y = releaseYear; // Add the year filter if provided
      }
      const response = await defaultAxios.get('', {
        params,
      });
      if (response.data.Search) {
        setMovies(response.data.Search);
        const totalResults = parseInt(response.data.totalResults, 10);
        setTotalPages(Math.ceil(totalResults / 10));
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className={styles['table-container']}>
      <div className={styles['filter-container']}>
        <input
          type="text"
          placeholder="Search movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter release year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <button onClick={() => fetchMovies(searchTerm, page)}>Filter</button>
      </div>
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
            <tr key={movie.imdbID}>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.imdbID}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default MovieList;
