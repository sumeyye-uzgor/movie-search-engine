import React from 'react';

import Container from '../components/Container';
import NotFound from '../components/NotFound';
import Title from '../components/Title';

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <Title text="Movie Search Engine" />
      <NotFound />
    </Container>
  );
};

export default NotFoundPage;
