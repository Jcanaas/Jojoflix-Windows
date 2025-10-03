import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const CarouselSection = styled.section`
  margin: 40px 0;
  position: relative;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: ${theme.colors.text.primary};
  font-family: ${theme.fonts.primary};
  font-size: 28px;
  font-weight: 700;
  margin: 0;
  
  background: ${props => props.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  text-shadow: 0 2px 4px rgba(223, 40, 146, 0.3);
`;

const ViewAllButton = styled.button`
  background: transparent;
  border: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.primary};
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(223, 40, 146, 0.3);
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 0 40px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(223, 40, 146, 0.9);
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 20px rgba(223, 40, 146, 0.4);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%);
  }
  
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
`;

const ContentCard = styled.div`
  min-width: 180px;
  width: 180px;
  height: 270px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  background: ${theme.colors.surface.primary};
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.08) translateY(-12px);
    box-shadow: 
      0 25px 50px rgba(223, 40, 146, 0.4),
      0 0 0 2px rgba(223, 40, 146, 0.3);
    z-index: 5;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
  
  ${ContentCard}:hover & {
    filter: brightness(1.1) contrast(1.1);
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    transparent 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
  padding: 16px 12px 12px;
  transform: translateY(calc(100% - 40px));
  transition: transform 0.4s ease;
  
  ${ContentCard}:hover & {
    transform: translateY(0);
  }
`;

const CardTitle = styled.h3`
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 4px 0;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const CardYear = styled.span`
  color: ${props => props.theme.colors.text.secondary};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 13px;
  font-weight: 500;
`;

const CardRating = styled.span`
  color: ${theme.colors.accent};
  font-family: ${theme.fonts.secondary};
  font-size: 13px;
  font-weight: 600;
  
  &:before {
    content: "⭐ ";
    color: #ffd700;
  }
`;

const CardGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
`;

const GenreTag = styled.span`
  background: rgba(223, 40, 146, 0.8);
  color: white;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 10px;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 270px;
  color: ${props => props.theme.colors.text.secondary};
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 16px;
  padding: 0 40px;
`;

const ContentCarousel = ({ title, items = [], showViewAll = true, onViewAll, onItemClick }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    } else {
      console.log('Selected item:', item);
    }
  };

  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    } else {
      console.log('View all:', title);
    }
  };

  if (!items || items.length === 0) {
    return (
      <CarouselSection>
        <SectionHeader>
          <SectionTitle>{title}</SectionTitle>
        </SectionHeader>
        <EmptyState>
          No hay contenido disponible en esta categoría
        </EmptyState>
      </CarouselSection>
    );
  }

  return (
    <CarouselSection>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {showViewAll && (
          <ViewAllButton onClick={handleViewAll}>
            Ver Todo
          </ViewAllButton>
        )}
      </SectionHeader>
      
      <CarouselWrapper>
        <NavigationButton 
          direction="left" 
          onClick={() => scroll('left')}
          aria-label="Anterior"
        >
          ‹
        </NavigationButton>
        
        <CarouselContainer ref={carouselRef}>
          {items.map((item, index) => (
            <ContentCard key={item.id || index} onClick={() => handleItemClick(item)}>
              <CardImage 
                src={item.verticalbanner || item.image || '/assets/images/placeholder.jpg'} 
                alt={item.nombre || item.title || 'Contenido'}
                onError={(e) => {
                  e.target.src = '/assets/images/adaptive-icon.png';
                }}
              />
              <CardOverlay>
                <CardTitle>{item.nombre || item.title}</CardTitle>
                <CardDetails>
                  <CardYear>{item.year}</CardYear>
                  {item.calificacion && (
                    <CardRating>{item.calificacion}</CardRating>
                  )}
                </CardDetails>
                {item.generos && item.generos.length > 0 && (
                  <CardGenres>
                    {item.generos.slice(0, 2).map((genero, idx) => (
                      <GenreTag key={idx}>{genero}</GenreTag>
                    ))}
                  </CardGenres>
                )}
              </CardOverlay>
            </ContentCard>
          ))}
        </CarouselContainer>
        
        <NavigationButton 
          direction="right" 
          onClick={() => scroll('right')}
          aria-label="Siguiente"
        >
          ›
        </NavigationButton>
      </CarouselWrapper>
    </CarouselSection>
  );
};

export default ContentCarousel;