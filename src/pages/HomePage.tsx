import React from 'react';

import Container from '../components/Container';
import MovieList from '../components/MovieList/index';
import SearchArea from '../components/SearchArea';
import Title from '../components/Title';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Title text="Movie Search Engine" />
      <Title text="Movies List" variant="subTitle" />
      <SearchArea />
      <MovieList />
    </Container>
  );
};

export default HomePage;
