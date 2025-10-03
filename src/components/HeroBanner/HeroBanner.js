import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { heroBanners } from '../../data/contentData';
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

const BannerSlide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 1.2s ease-in-out;
`;

const BannerImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(223, 40, 146, 0.15) 40%,
    rgba(255, 95, 162, 0.1) 60%,
    rgba(0, 0, 0, 0.9) 100%
  );
`;

const BannerContent = styled.div`
  position: absolute;
  bottom: 80px;
  left: 60px;
  right: 60px;
  z-index: 2;
  color: white;
  
  @media (max-width: 768px) {
    left: 30px;
    right: 30px;
    bottom: 60px;
  }
`;

const BannerLogo = styled.img`
  max-height: 120px;
  max-width: 400px;
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.8));
  
  @media (max-width: 768px) {
    max-height: 80px;
    max-width: 300px;
  }
`;

const BannerTitle = styled.h1`
  color: ${theme.colors.text.primary};
  font-family: ${theme.fonts.primary};
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 900;
  margin-bottom: 16px;
  text-shadow: 3px 3px 12px rgba(0, 0, 0, 0.9);
  line-height: 1.1;
  
  background: ${theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @supports not (-webkit-background-clip: text) {
    color: white;
  }
`;

const BannerSubtitle = styled.h2`
  font-family: ${theme.fonts.secondary};
  font-size: clamp(20px, 3.5vw, 28px);
  font-weight: 600;
  margin-bottom: 16px;
  color: ${theme.colors.accent};
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

const BannerDescription = styled.p`
  font-family: ${theme.fonts.secondary};
  font-size: clamp(16px, 2.2vw, 20px);
  line-height: 1.6;
  max-width: 700px;
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.8);
`;

const BannerActions = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
`;

const ActionButton = styled.button`
  padding: 16px 32px;
  border: none;
  border-radius: 30px;
  font-family: ${theme.fonts.primary};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-transform: uppercase;
  letter-spacing: 1.2px;
  position: relative;
  overflow: hidden;
  
  ${props => props.primary ? `
    background: ${theme.gradients.primary};
    color: white;
    box-shadow: 0 12px 30px rgba(223, 40, 146, 0.4);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }
    
    &:hover {
      transform: translateY(-4px) scale(1.06);
      box-shadow: 0 16px 40px rgba(223, 40, 146, 0.5);
      
      &::before {
        left: 100%;
      }
    }
  ` : `
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(15px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.6);
      transform: translateY(-4px) scale(1.04);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
    }
  `}
  
  &:active {
    transform: translateY(-2px) scale(1.02);
  }
`;

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  z-index: 3;
`;

const Indicator = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  
  ${props => props.active ? `
    background: ${theme.colors.primary};
    box-shadow: 0 0 16px rgba(223, 40, 146, 0.8);
    transform: scale(1.3);
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
      border: 2px solid rgba(223, 40, 146, 0.3);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
    }
  ` : `
    background: rgba(255, 255, 255, 0.5);
    
    &:hover {
      background: rgba(255, 255, 255, 0.8);
      transform: scale(1.2);
    }
  `}
`;

const NavigationArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(223, 40, 146, 0.8);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 4;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${theme.colors.primary};
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 12px 30px rgba(223, 40, 146, 0.5);
  }
  
  ${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'}
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
`;

const HeroBanner = ({ onPlayContent, onExploreCategory }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrimaryAction = () => {
    const currentBanner = heroBanners[currentSlide];
    if (currentBanner.contentId && onPlayContent) {
      onPlayContent(currentBanner.contentId);
    } else if (onExploreCategory) {
      onExploreCategory();
    }
    console.log('Primary action:', currentBanner.action);
  };

  const handleSecondaryAction = () => {
    const currentBanner = heroBanners[currentSlide];
    if (onExploreCategory) {
      onExploreCategory();
    }
    console.log('Secondary action for:', currentBanner.title);
  };

  return (
    <BannerContainer>
      {heroBanners.map((banner, index) => (
        <BannerSlide key={banner.id} active={index === currentSlide}>
          <BannerImage image={banner.image}>
            <BannerOverlay />
            <BannerContent>
              {banner.logo && (
                <BannerLogo src={banner.logo} alt={banner.title} />
              )}
              <BannerTitle>{banner.title}</BannerTitle>
              {banner.subtitle && (
                <BannerSubtitle>{banner.subtitle}</BannerSubtitle>
              )}
              <BannerDescription>{banner.description}</BannerDescription>
              <BannerActions>
                <ActionButton primary onClick={handlePrimaryAction}>
                  {banner.action}
                </ActionButton>
                <ActionButton onClick={handleSecondaryAction}>
                  Más Info
                </ActionButton>
              </BannerActions>
            </BannerContent>
          </BannerImage>
        </BannerSlide>
      ))}
      
      <NavigationArrow direction="left" onClick={handlePrevSlide}>
        ‹
      </NavigationArrow>
      
      <NavigationArrow direction="right" onClick={handleNextSlide}>
        ›
      </NavigationArrow>
      
      <IndicatorContainer>
        {heroBanners.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentSlide}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </IndicatorContainer>
    </BannerContainer>
  );
};

export default HeroBanner;