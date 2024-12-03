import React from 'react';

import Container from '../components/Container';
import MovieDetails from '../components/MovieDetails';
import Title from '../components/Title';

const DetailsPage: React.FC = () => {
  return (
    <Container>
      <Title text="Movie Search Engine" />
      <Title text="Movie Details" variant="subTitle" />
      <MovieDetails />
    </Container>
  );
};

export default DetailsPage;
