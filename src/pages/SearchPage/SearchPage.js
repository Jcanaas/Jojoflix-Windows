import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #ffffff;
`;

const SearchInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const SearchQuery = styled.span`
  color: #e50914;
  font-weight: bold;
`;

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <PageContainer>
      <Title>Resultados de Búsqueda</Title>
      {query && (
        <SearchInfo>
          <p style={{color: 'rgba(255,255,255,0.8)'}}>
            Resultados para: <SearchQuery>"{query}"</SearchQuery>
          </p>
        </SearchInfo>
      )}
      <p style={{textAlign: 'center', color: 'rgba(255,255,255,0.7)'}}>
        Esta página mostrará los resultados de búsqueda. 
        Se implementará durante la migración del contenido desde la versión Android.
      </p>
    </PageContainer>
  );
}

export default SearchPage;