import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const CarouselContainer = styled.section`
  margin-bottom: ${theme.spacing.xl};
  padding: 0 ${theme.spacing.md};
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
  font-family: ${theme.fonts.primary};
`;

const CarouselScroll = styled.div`
  display: flex;
  overflow-x: auto;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.sm} 0;
  scroll-behavior: smooth;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${theme.colors.background.card};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.brand.primary};
    border-radius: 4px;
    
    &:hover {
      background: ${theme.colors.brand.light};
    }
  }
`;

const ContentCard = styled.div`
  flex: 0 0 auto;
  width: 180px;
  height: 270px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: ${theme.transitions.normal};
  position: relative;
  background: ${theme.colors.background.card};
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: ${theme.elevation.high};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 140px;
    height: 210px;
  }
`;

const ContentImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${theme.transitions.normal};
  
  ${ContentCard}:hover & {
    filter: brightness(1.1);
  }
`;

const ContentOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  padding: ${theme.spacing.md};
  color: ${theme.colors.text.primary};
  transform: translateY(100%);
  transition: ${theme.transitions.normal};
  
  ${ContentCard}:hover & {
    transform: translateY(0);
  }
`;

const ContentTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: ${theme.colors.text.primary};
`;

const ContentMeta = styled.p`
  font-size: 12px;
  color: ${theme.colors.text.secondary};
  margin: ${theme.spacing.xs} 0 0 0;
`;

function ContentCarousel({ title, items = [], onItemClick }) {
  // Datos de ejemplo si no se proporcionan items
  const defaultItems = [
    { id: 1, title: "Contenido 1", image: "/assets/images/placeholder1.jpg", year: "2024" },
    { id: 2, title: "Contenido 2", image: "/assets/images/placeholder2.jpg", year: "2024" },
    { id: 3, title: "Contenido 3", image: "/assets/images/placeholder3.jpg", year: "2023" },
    { id: 4, title: "Contenido 4", image: "/assets/images/placeholder4.jpg", year: "2023" },
    { id: 5, title: "Contenido 5", image: "/assets/images/placeholder5.jpg", year: "2022" },
  ];
  
  const displayItems = items.length > 0 ? items : defaultItems;

  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <CarouselContainer>
      <SectionTitle>{title}</SectionTitle>
      <CarouselScroll>
        {displayItems.map((item) => (
          <ContentCard 
            key={item.id} 
            onClick={() => handleItemClick(item)}
          >
            <ContentImage 
              src={item.image || "/assets/images/adaptive-icon.png"} 
              alt={item.title}
              onError={(e) => {
                e.target.src = "/assets/images/adaptive-icon.png";
              }}
            />
            <ContentOverlay>
              <ContentTitle>{item.title}</ContentTitle>
              {item.year && <ContentMeta>{item.year}</ContentMeta>}
            </ContentOverlay>
          </ContentCard>
        ))}
      </CarouselScroll>
    </CarouselContainer>
  );
}

export default ContentCarousel;