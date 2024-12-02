import React from 'react';
import './App.css';
import MovieList from './components/MovieList/index';
import SearchArea from './components/SearchArea';
import Container from './components/Container';
import Title from './components/Title';

function App() {
  return (
    <Container>
      <Title text="Movie Search Engine" />
      <SearchArea />
      <MovieList />
    </Container>
  );
}

export default App;
