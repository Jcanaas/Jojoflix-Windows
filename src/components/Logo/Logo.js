import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';

const LogoContainer = styled(Link)`
  font-family: ${theme.fonts.logo};
  font-size: clamp(24px, 4vw, 48px);
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: ${theme.gradients.logo};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: ${theme.colors.brand.primary}; /* Fallback */
  transition: ${theme.transitions.normal};
  text-shadow: none;
  
  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
  
  /* Fallback para navegadores que no soporten background-clip */
  @supports not (-webkit-background-clip: text) {
    color: ${theme.colors.brand.primary};
    background: none;
  }
`;

const Logo = ({ to = "/", ...props }) => {
  return (
    <LogoContainer to={to} {...props}>
      JOJO-FLIX
    </LogoContainer>
  );
};

export default Logo;