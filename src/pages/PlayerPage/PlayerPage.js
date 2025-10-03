import React from 'react';
import { useParams } from 'react-router-dom';
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

const PlayerContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

function PlayerPage() {
  const { id } = useParams();

  return (
    <PageContainer>
      <Title>Reproductor de Video</Title>
      <PlayerContainer>
        <p style={{color: 'rgba(255,255,255,0.8)', marginBottom: '1rem'}}>
          ID del contenido: <span style={{color: '#e50914'}}>{id}</span>
        </p>
        <p style={{color: 'rgba(255,255,255,0.7)'}}>
          El reproductor de video se implementará durante la migración, 
          incluyendo controles de reproducción, calidad y subtítulos.
        </p>
      </PlayerContainer>
    </PageContainer>
  );
}

export default PlayerPage;