import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ContentCarousel from '../../components/ContentCarousel/ContentCarousel';
import theme from '../../styles/theme';

const PageContainer = styled.div`
  min-height: calc(100vh - 80px);
  background: ${theme.colors.background.primary};
  padding-bottom: ${theme.spacing.xxl};
`;

const ContentSection = styled.section`
  padding: 0 ${theme.spacing.md};
  max-width: 1400px;
  margin: 0 auto;
`;

function HomePage() {
  const navigate = useNavigate();

  // Datos de ejemplo para los carruseles
  const continueWatching = [
    { id: 1, title: "Berserk", image: "/assets/images/A_Berserk.webp", year: "2016" },
    { id: 2, title: "Bocchi the Rock!", image: "/assets/images/bocchi_the_rock_re-639827727-large.jpg", year: "2022" },
    { id: 3, title: "Beck", image: "/assets/images/beck_bg.jpg", year: "2004" },
    { id: 4, title: "Arthur Morgan", image: "/assets/images/arthurmorgan.webp", year: "2024" },
  ];

  const movies = [
    { id: 5, title: "28 Weeks Later", image: "/assets/images/28_weeks_later.jpg", year: "2007" },
    { id: 6, title: "Brokeback Mountain", image: "/assets/images/13140BROKEBACK-MOUNTAIN_banner_1.jpg", year: "2005" },
    { id: 7, title: "Carol", image: "/assets/images/carolverticalbanner.jpg", year: "2015" },
    { id: 8, title: "Another Round", image: "/assets/images/anotherround.webp", year: "2020" },
  ];

  const series = [
    { id: 9, title: "Dexter", image: "/assets/images/dexterbanner.webp", year: "2006" },
    { id: 10, title: "Aquí no hay quien viva", image: "/assets/images/aqui_no_hay_quien_viva-150319925-mmed.jpg", year: "2003" },
    { id: 11, title: "Cyberpunk Edgerunners", image: "/assets/images/cyberpunkedgerunersbanner.jpg", year: "2022" },
  ];

  const handleItemClick = (item) => {
    navigate(`/player/${item.id}`);
  };

  return (
    <PageContainer>
      {/* Banner Principal */}
      <HeroBanner />
      
      <ContentSection>
        {/* Continuar Viendo */}
        <ContentCarousel 
          title="Continuar viendo"
          items={continueWatching}
          onItemClick={handleItemClick}
        />

        {/* Películas Destacadas */}
        <ContentCarousel 
          title="Películas populares"
          items={movies}
          onItemClick={handleItemClick}
        />

        {/* Series Destacadas */}
        <ContentCarousel 
          title="Series recomendadas"
          items={series}
          onItemClick={handleItemClick}
        />

        {/* Últimos Estrenos */}
        <ContentCarousel 
          title="Últimos estrenos"
          items={[...movies.slice(0, 2), ...series.slice(0, 2), ...continueWatching.slice(0, 2)]}
          onItemClick={handleItemClick}
        />

        {/* Mejor Valoradas */}
        <ContentCarousel 
          title="Mejor valoradas"
          items={[continueWatching[1], movies[1], series[0], movies[2], continueWatching[2]]}
          onItemClick={handleItemClick}
        />
      </ContentSection>
    </PageContainer>
  );
}

export default HomePage;