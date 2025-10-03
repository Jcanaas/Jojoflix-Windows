import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ContentCarousel from '../../components/ContentCarousel/ContentCarousel';
import { contentData, getTopRated, getRecentlyAdded, getContentByCategory } from '../../data/contentData';

const PageContainer = styled.div`
  min-height: calc(100vh - 80px);
  background: ${props => props.theme.colors.background.primary};
  padding-bottom: 60px;
`;

const ContentSection = styled.section`
  padding: 0;
  max-width: 1400px;
  margin: 0 auto;
`;

const WelcomeSection = styled.div`
  padding: 40px 60px;
  text-align: center;
  background: linear-gradient(
    135deg,
    rgba(223, 40, 146, 0.1) 0%,
    rgba(255, 95, 162, 0.05) 100%
  );
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    padding: 30px 40px;
  }
`;

const WelcomeTitle = styled.h2`
  font-family: ${props => props.theme.fonts.primary};
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 16px;
  
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const WelcomeDescription = styled.p`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: clamp(16px, 2.5vw, 20px);
  color: ${props => props.theme.colors.text.secondary};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-family: ${props => props.theme.fonts.primary};
  font-size: 32px;
  font-weight: 900;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 14px;
  color: ${props => props.theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

function HomePage() {
  const navigate = useNavigate();

  // Obtener diferentes categorías de contenido
  const topRatedContent = getTopRated(8);
  const recentContent = getRecentlyAdded(8);
  const animeContent = getContentByCategory('anime').slice(0, 8);
  const seriesContent = getContentByCategory('series').slice(0, 8);
  const moviesContent = getContentByCategory('peliculas').slice(0, 8);

  const handleItemClick = (item) => {
    console.log('Content clicked:', item);
    navigate(`/player/${item.id}`);
  };

  const handlePlayContent = (contentId) => {
    console.log('Play content:', contentId);
    navigate(`/player/${contentId}`);
  };

  const handleExploreCategory = (category) => {
    console.log('Explore category:', category);
    if (category === 'anime') {
      navigate('/anime');
    } else if (category === 'series') {
      navigate('/series');
    } else if (category === 'movies') {
      navigate('/movies');
    } else {
      navigate('/movies'); // Default
    }
  };

  const handleViewAll = (category) => {
    if (category === 'anime') {
      navigate('/anime');
    } else if (category === 'series') {
      navigate('/series');
    } else {
      navigate('/movies');
    }
  };

  return (
    <PageContainer>
      <HeroBanner 
        onPlayContent={handlePlayContent}
        onExploreCategory={() => handleExploreCategory()}
      />
      
      <WelcomeSection>
        <WelcomeTitle>Bienvenido a JOJO-FLIX</WelcomeTitle>
        <WelcomeDescription>
          Tu plataforma personal de streaming con la mejor selección de películas, series y anime. 
          Disfruta de contenido en alta calidad sin límites.
        </WelcomeDescription>
        <StatsContainer>
          <StatItem>
            <StatNumber>{contentData.length}</StatNumber>
            <StatLabel>Títulos</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{getContentByCategory('peliculas').length}</StatNumber>
            <StatLabel>Películas</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{getContentByCategory('series').length}</StatNumber>
            <StatLabel>Series</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{getContentByCategory('anime').length}</StatNumber>
            <StatLabel>Anime</StatLabel>
          </StatItem>
        </StatsContainer>
      </WelcomeSection>
      
      <ContentSection>
        <ContentCarousel 
          title="⭐ Mejor Valoradas" 
          items={topRatedContent}
          onItemClick={handleItemClick}
          onViewAll={() => handleViewAll('movies')}
        />
        
        <ContentCarousel 
          title="🆕 Recién Agregadas" 
          items={recentContent}
          onItemClick={handleItemClick}
          onViewAll={() => handleViewAll('movies')}
        />
        
        <ContentCarousel 
          title="🎌 Anime" 
          items={animeContent}
          onItemClick={handleItemClick}
          onViewAll={() => handleViewAll('anime')}
        />
        
        <ContentCarousel 
          title="📺 Series" 
          items={seriesContent}
          onItemClick={handleItemClick}
          onViewAll={() => handleViewAll('series')}
        />
        
        <ContentCarousel 
          title="🎬 Películas" 
          items={moviesContent}
          onItemClick={handleItemClick}
          onViewAll={() => handleViewAll('movies')}
        />
      </ContentSection>
    </PageContainer>
  );
}

export default HomePage;