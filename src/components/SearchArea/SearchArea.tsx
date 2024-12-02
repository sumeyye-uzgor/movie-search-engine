import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { setSearchTerm, setReleaseYear } from '../../slices/searchSlice';
import { fetchMovies } from '../../slices/moviesSlice';
import Input from '../Input';
import Button from '../Button';
import styles from './SearchArea.module.scss';

const SearchArea: React.FC = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchTerm, releaseYear } = useSelector(
    (state: RootState) => state.search,
  );

  const handleSearch = () => {
    dispatch(fetchMovies({ searchTerm, releaseYear, page: 1 }));
  };

  return (
    <div className={styles.searchArea}>
      <Input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <Input
        type="number"
        placeholder="Filter by year"
        value={releaseYear}
        onChange={(e) => dispatch(setReleaseYear(e.target.value))}
      />
      <Button onClick={handleSearch} variant="default">
        Search
      </Button>
    </div>
  );
};

export default SearchArea;
