import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import theme from '../../styles/theme';

const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: 60vh;
  min-height: 400px;
  margin-bottom: ${theme.spacing.xl};
  overflow: hidden;
  border-radius: 0 0 20px 20px;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${theme.transitions.slow};
  transform: scale(1.1);
  
  &.loaded {
    transform: scale(1);
  }
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(223, 40, 146, 0.2) 100%
  );
`;

const BannerContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${theme.spacing.xl} ${theme.spacing.md} ${theme.spacing.lg};
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  color: ${theme.colors.text.primary};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg} ${theme.spacing.md};
  }
`;

const BannerTitle = styled.h1`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: bold;
  margin: 0 0 ${theme.spacing.md} 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  background: ${theme.gradients.logo};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @supports not (-webkit-background-clip: text) {
    color: ${theme.colors.text.primary};
  }
`;

const BannerDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 ${theme.spacing.lg} 0;
  max-width: 600px;
  color: ${theme.colors.text.primary};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

const BannerActions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: ${theme.colors.brand.primary};
  color: ${theme.colors.text.primary};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.primary};
  cursor: pointer;
  transition: ${theme.transitions.normal};
  box-shadow: ${theme.elevation.low};
  
  &:hover {
    background: ${theme.colors.brand.light};
    transform: translateY(-2px);
    box-shadow: ${theme.elevation.medium};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: ${theme.colors.text.primary};
  border: 2px solid ${theme.colors.brand.primary};
  padding: calc(${theme.spacing.md} - 2px) calc(${theme.spacing.xl} - 2px);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  font-family: ${theme.fonts.primary};
  cursor: pointer;
  transition: ${theme.transitions.normal};
  
  &:hover {
    background: ${theme.colors.brand.primary};
    transform: translateY(-2px);
    box-shadow: ${theme.elevation.medium};
  }
`;

const BannerIndicators = styled.div`
  position: absolute;
  bottom: ${theme.spacing.md};
  right: ${theme.spacing.md};
  display: flex;
  gap: ${theme.spacing.sm};
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? theme.colors.brand.primary : 'rgba(255, 255, 255, 0.4)'};
  cursor: pointer;
  transition: ${theme.transitions.fast};
  
  &:hover {
    background: ${theme.colors.brand.light};
    transform: scale(1.2);
  }
`;

function HeroBanner({ banners = [] }) {
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Banners de ejemplo si no se proporcionan
  const defaultBanners = [
    {
      id: 1,
      title: "Bienvenido a JOJO-FLIX",
      description: "Disfruta de miles de películas y series en alta calidad. Tu plataforma de streaming favorita ahora disponible en Windows.",
      image: "/assets/images/bocchi_the_Rock_Banner.jpg",
      action: "Explorar Catálogo"
    },
    {
      id: 2,
      title: "Últimos Estrenos",
      description: "Descubre las películas y series más recientes. Contenido actualizado semanalmente para que nunca te quedes sin opciones.",
      image: "/assets/images/beck_bg.jpg",
      action: "Ver Estrenos"
    },
    {
      id: 3,
      title: "Series Populares",
      description: "Las series más vistas por nuestra comunidad. Encuentra tu próxima obsesión televisiva aquí.",
      image: "/assets/images/Berserkbanner.jpg",
      action: "Ver Series"
    }
  ];

  const displayBanners = banners.length > 0 ? banners : defaultBanners;
  const current = displayBanners[currentBanner];

  // Auto-rotate banners
  useEffect(() => {
    if (displayBanners.length > 1) {
      const interval = setInterval(() => {
        setCurrentBanner(prev => (prev + 1) % displayBanners.length);
        setImageLoaded(false);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [displayBanners.length]);

  const handleAction = () => {
    if (current.action === "Explorar Catálogo") {
      navigate("/movies");
    } else if (current.action === "Ver Estrenos") {
      navigate("/movies");
    } else if (current.action === "Ver Series") {
      navigate("/series");
    }
  };

  const handleMoreInfo = () => {
    navigate(`/player/${current.id}`);
  };

  return (
    <BannerContainer>
      <BannerImage 
        src={current.image}
        alt={current.title}
        className={imageLoaded ? 'loaded' : ''}
        onLoad={() => setImageLoaded(true)}
        onError={(e) => {
          e.target.src = "/assets/images/adaptive-icon.png";
        }}
      />
      <BannerOverlay />
      
      <BannerContent>
        <BannerTitle>{current.title}</BannerTitle>
        <BannerDescription>{current.description}</BannerDescription>
        
        <BannerActions>
          <PrimaryButton onClick={handleAction}>
            ▶ {current.action}
          </PrimaryButton>
          <SecondaryButton onClick={handleMoreInfo}>
            ℹ Más información
          </SecondaryButton>
        </BannerActions>
      </BannerContent>

      {displayBanners.length > 1 && (
        <BannerIndicators>
          {displayBanners.map((_, index) => (
            <Indicator
              key={index}
              active={index === currentBanner}
              onClick={() => {
                setCurrentBanner(index);
                setImageLoaded(false);
              }}
            />
          ))}
        </BannerIndicators>
      )}
    </BannerContainer>
  );
}

export default HeroBanner;