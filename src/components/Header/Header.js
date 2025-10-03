import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import theme from '../../styles/theme';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 56px;
  height: 80px;
  background-color: ${theme.colors.background.primary};
  box-shadow: ${theme.elevation.medium};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  z-index: 1000;
  font-family: ${theme.fonts.primary};
`;

const CenterLogo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${theme.spacing.sm};
`;

const Side = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 100px;
  gap: ${theme.spacing.sm};
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  color: ${theme.colors.text.primary};
  cursor: pointer;
  padding: ${theme.spacing.xs};
  margin-left: ${theme.spacing.sm};
  font-size: 26px;
  transition: ${theme.transitions.normal};
  
  &:hover {
    color: ${theme.colors.brand.primary};
    transform: scale(1.1);
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: ${theme.transitions.normal};
  
  &:hover {
    color: ${theme.colors.brand.primary};
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  min-width: 300px;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    min-width: 200px;
  }
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: ${theme.colors.text.primary};
  font-size: 16px;
  font-family: ${theme.fonts.primary};
  width: 100%;
  outline: none;
  
  &::placeholder {
    color: ${theme.colors.text.secondary};
  }
`;

const SearchButton = styled.button`
  background: transparent;
  border: none;
  color: ${theme.colors.text.primary};
  cursor: pointer;
  padding: 0;
  margin-left: ${theme.spacing.sm};
  font-size: 20px;
  transition: ${theme.transitions.normal};
  
  &:hover {
    color: ${theme.colors.brand.primary};
    transform: scale(1.1);
  }
`;

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <HeaderContainer>
      {/* Lado Izquierdo */}
      <Side>
        <IconButton title="Menú">
          ☰
        </IconButton>
        <IconButton title="Social">
          👥
        </IconButton>
      </Side>
      
      {/* Centro - Logo */}
      <CenterLogo>
        <Logo />
      </CenterLogo>
      
      {/* Lado Derecho */}
      <Side>
        <Navigation>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/movies">Películas</NavLink>
          <NavLink to="/series">Series</NavLink>
        </Navigation>
        
        <form onSubmit={handleSearch}>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Buscar películas y series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchButton type="submit" title="Buscar">
              🔍
            </SearchButton>
          </SearchContainer>
        </form>
        
        <IconButton title="Usuario">
          👤
        </IconButton>
      </Side>
    </HeaderContainer>
  );
}

export default Header;