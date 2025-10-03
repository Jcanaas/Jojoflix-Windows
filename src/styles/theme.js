// Sistema de temas basado en el manual de estilos JOJO-FLIX
export const theme = {
  colors: {
    // Colores Primarios
    brand: {
      primary: '#DF2892',
      light: '#FF5FA2',
      gradient: '#FF7EB3',
      accent: '#E91E63',
      error: '#FF1744'
    },
    
    // Fondos
    background: {
      primary: '#181818',
      secondary: '#1a1a1a',
      elevated: '#222',
      card: '#2a2a2a',
      interactive: '#333',
      gradient: '#2d2d2d',
      disabled: '#666'
    },
    
    // Texto
    text: {
      primary: '#fff',
      secondary: '#888',
      tertiary: '#ccc',
      success: '#4CAF50',
      warning: '#FF6B35',
      special: '#9C27B0'
    }
  },
  
  // Fuentes según el manual
  fonts: {
    primary: "'BN', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    logo: "'Minercraftory', 'BN', sans-serif",
    mono: "'SpaceMono', 'Courier New', monospace",
    special: "'GameofThrones', serif"
  },
  
  // Espaciado (múltiplos de 8px)
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  },
  
  // Elevaciones
  elevation: {
    low: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    medium: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
    high: '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)',
    highest: '0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)'
  },
  
  // Transiciones estándar
  transitions: {
    fast: '150ms ease-out',
    normal: '250ms ease-in-out',
    slow: '400ms ease-in-out'
  },
  
  // Gradientes corporativos según el manual
  gradients: {
    primary: 'linear-gradient(135deg, #FF7EB3 0%, #DF2892 50%, #18181b 100%)',
    logo: 'linear-gradient(135deg, #ff5fa2 0%, #fff 100%)',
    subtle: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
    background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)'
  },
  
  // Breakpoints responsive
  breakpoints: {
    mobile: '700px',
    tablet: '900px',
    desktop: '1200px'
  }
};

export default theme;