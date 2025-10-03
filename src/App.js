import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import SeriesPage from './pages/SeriesPage/SeriesPage';
import SearchPage from './pages/SearchPage/SearchPage';
import PlayerPage from './pages/PlayerPage/PlayerPage';
import theme from './styles/theme';
import './App.css';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${theme.gradients.background};
  color: ${theme.colors.text.primary};
  font-family: ${theme.fonts.primary};
`;

const MainContent = styled.main`
  padding-top: 80px; /* Account for fixed header */
  min-height: calc(100vh - 80px);
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/player/:id" element={<PlayerPage />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;