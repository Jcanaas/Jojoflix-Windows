import React from 'react';
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

function SeriesPage() {
  return (
    <PageContainer>
      <Title>Series</Title>
      <p style={{textAlign: 'center', color: 'rgba(255,255,255,0.7)'}}>
        Esta página mostrará el catálogo de series. 
        Se implementará durante la migración del contenido desde la versión Android.
      </p>
    </PageContainer>
  );
}

export default SeriesPage;