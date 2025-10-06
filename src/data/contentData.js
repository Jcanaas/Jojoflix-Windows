// Normaliza cadenas: quita tildes, pasa a minúsculas y elimina signos
function normalizeString(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // quita tildes
    .replace(/[^a-z0-9 ]/g, ''); // quita signos
}

// Busca coincidencia exacta normalizada, si no encuentra busca coincidencia parcial
export function getBannersByNames(names = []) {
  if (!Array.isArray(names) || names.length === 0) return [];
  const normalizedData = contentData.map(item => ({
    ...item,
    _norm: item.nombre ? normalizeString(item.nombre) : ''
  }));
  const result = [];
  for (const name of names) {
    const normName = normalizeString(name);
    // 1. Coincidencia exacta
    let match = normalizedData.find(item => item._norm === normName);
    // 2. Si no hay exacta, busca parcial
    if (!match) {
      match = normalizedData.find(item => item._norm.includes(normName));
    }
    if (match && !result.includes(match)) result.push(match);
    if (result.length >= 5) break;
  }
  return result;
}

export const contentData = [
  {
    id: 'Beck: Mongolian Chop Squad',
    nombre: 'Beck: Mongolian Chop Squad',
    descripcion: 'Beck: Mongolian Chop Squad es un anime que sigue la historia de Yukio "Koyuki" Tanaka, un adolescente que descubre su pasión por la música y se une a una banda llamada Beck.',
    fondo: '/assets/images/beck_bg.jpg',
    logo: '/assets/images/beck_logo.png',
    categoria: ['Serie', 'Anime'],
  },
  {
    id: 'Monster',
    nombre: 'Monster',
    descripcion: 'Monster es un thriller psicológico que sigue al Dr. Kenzo Tenma, un talentoso neurocirujano que salva la vida de un niño, solo para descubrir años después que se ha convertido en un asesino en serie.',
    fondo: '/assets/images/monsterbanner.jpg',
    logo: '/assets/images/monsterlogo.png',
    categoria: ['Serie', 'Anime', 'Thriller'],
  },
  {
    id: 'Jojos Bizarre Adventure',
    nombre: 'Jojos Bizarre Adventure',
    descripcion: 'La bizarra aventura de Joaquin Joestrella, un joven con una extraña habilidad para detener el tiempo y que se embarca en una serie de aventuras épicas junto a sus amigos y enemigos.',
    fondo: '/assets/images/jojobaner2.jpg',
    logo: '/assets/images/jojologo.webp',
    categoria: ['Serie', 'Anime', 'Acción'],
  },
  {
    id: 'Aqui no hay quien viva',
    nombre: 'Aqui no hay quien viva',
    descripcion: 'Aquí no hay quien viva es una serie de televisión española que se emitió desde 2003 hasta 2006. La trama gira en torno a los vecinos de un edificio en Madrid, sus relaciones, conflictos y situaciones cómicas.',
    fondo: '/assets/images/Anhqv.jpg',
    logo: '/assets/images/AnhqvTitle.png',
    categoria: ['Serie', 'Comedia'],
  },
  {
    id: 'Coldwater',
    nombre: 'Coldwater',
    descripcion: 'Un joven delincuente es enviado a un campo de entrenamiento brutal dirigido por un exmarine sádico. Debe sobrevivir y enfrentarse a los abusos mientras busca una salida.',
    fondo: '/assets/images/coldwaterbanner.jpg',
    logo: '/assets/images/coldwaterlogo.png',
    categoria: ['Película', 'Drama', 'Thriller'],
  },
];
