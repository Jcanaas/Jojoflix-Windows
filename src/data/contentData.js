// Base de datos de contenido para JOJO-FLIX Windows
// Migrado y adaptado desde la versión Android

// Datos principales de contenido
export const contentData = [
  // ANIME/SERIES
  {
    id: 1,
    nombre: "Berserk",
    year: 2016,
    categoria: "anime",
    generos: ["Acción", "Drama", "Fantasía", "Horror"],
    descripcion: "Guts, un guerrero solitario, se embarca en una búsqueda de venganza contra su antiguo mejor amigo Griffith.",
    calificacion: 7.5,
    verticalbanner: "/assets/images/A_Berserk.webp",
    horizontalbanner: "/assets/images/Berserkbanner.jpg",
    logo: "/assets/images/berserk1vericalbanner.jpg"
  },
  {
    id: 2,
    nombre: "Bocchi the Rock!",
    year: 2022,
    categoria: "anime",
    generos: ["Comedia", "Música", "Slice of Life"],
    descripcion: "Una chica tímida y antisocial que sueña con tocar en una banda de rock.",
    calificacion: 8.8,
    verticalbanner: "/assets/images/bocchi_the_rock_re-639827727-large.jpg",
    horizontalbanner: "/assets/images/bocchi_the_Rock_Banner.jpg",
    logo: "/assets/images/Bocchi_the_Rock_Logo.webp"
  },
  {
    id: 3,
    nombre: "Beck",
    year: 2004,
    categoria: "anime",
    generos: ["Música", "Drama", "Coming-of-age"],
    descripcion: "La historia de Yukio 'Koyuki' Tanaka y su entrada al mundo del rock.",
    calificacion: 8.3,
    verticalbanner: "/assets/images/beckverticalbanner.png",
    horizontalbanner: "/assets/images/beck_bg.jpg",
    logo: "/assets/images/beck_logo.png"
  },
  {
    id: 9,
    nombre: "Dexter",
    year: 2006,
    categoria: "series",
    generos: ["Drama", "Crimen", "Thriller"],
    descripcion: "Un analista forense especializado en patrones de salpicadura de sangre que lleva una doble vida como asesino en serie.",
    calificacion: 8.6,
    verticalbanner: "/assets/images/dexterbanner.webp",
    horizontalbanner: "/assets/images/dexter-plastic-wrap-carroll-koester.jpg"
  },
  {
    id: 10,
    nombre: "Aquí no hay quien viva",
    year: 2003,
    categoria: "series",
    generos: ["Comedia", "Sitcom"],
    descripcion: "Las divertidas situaciones de los vecinos de un edificio en Madrid.",
    calificacion: 8.9,
    verticalbanner: "/assets/images/aqui_no_hay_quien_viva-150319925-mmed.jpg"
  },
  {
    id: 11,
    nombre: "Cyberpunk: Edgerunners",
    year: 2022,
    categoria: "anime",
    generos: ["Acción", "Sci-Fi", "Cyberpunk"],
    descripcion: "En una distópica Night City, un joven busca sobrevivir como edgerunner.",
    calificacion: 8.3,
    verticalbanner: "/assets/images/cyberpunkedgerunersbanner.jpg"
  },

  // PELÍCULAS
  {
    id: 5,
    nombre: "28 Weeks Later",
    year: 2007,
    categoria: "peliculas",
    generos: ["Horror", "Thriller", "Sci-Fi"],
    descripcion: "Seis meses después del brote del virus Rage, Londres está siendo repoblado.",
    calificacion: 6.9,
    verticalbanner: "/assets/images/28_weeks_later.jpg",
    horizontalbanner: "/assets/images/28_weeks_later-892655817-mmed.jpg"
  },
  {
    id: 6,
    nombre: "Brokeback Mountain",
    year: 2005,
    categoria: "peliculas",
    generos: ["Romance", "Drama"],
    descripcion: "La historia de amor entre dos vaqueros en Wyoming durante las décadas de 1960 y 1970.",
    calificacion: 7.7,
    verticalbanner: "/assets/images/secreto-en-la-montana-cover.jpg",
    horizontalbanner: "/assets/images/13140BROKEBACK-MOUNTAIN_banner_1.jpg",
    logo: "/assets/images/brokeback-mountain-logo.png"
  },
  {
    id: 7,
    nombre: "Carol",
    year: 2015,
    categoria: "peliculas",
    generos: ["Romance", "Drama"],
    descripcion: "Una joven dependienta se enamora de una mujer mayor en el Nueva York de los años 50.",
    calificacion: 7.2,
    verticalbanner: "/assets/images/carolverticalbanner.jpg",
    horizontalbanner: "/assets/images/carolbanner.webp",
    logo: "/assets/images/carollogo.webp"
  },
  {
    id: 8,
    nombre: "Another Round",
    year: 2020,
    categoria: "peliculas",
    generos: ["Drama", "Comedia"],
    descripcion: "Cuatro profesores de secundaria prueban una teoría sobre mantener un nivel constante de alcohol en sangre.",
    calificacion: 7.7,
    verticalbanner: "/assets/images/anotherround.webp"
  },

  // STAR WARS SAGA
  {
    id: 12,
    nombre: "Star Wars: Episodio IV - Una Nueva Esperanza",
    year: 1977,
    categoria: "peliculas",
    generos: ["Sci-Fi", "Aventura", "Fantasía"],
    descripcion: "Luke Skywalker se une a la Rebelión para destruir la Estrella de la Muerte del Imperio.",
    calificacion: 8.6,
    verticalbanner: "/assets/images/starwars1v.jpg",
    horizontalbanner: "/assets/images/starwars1b.webp",
    logo: "/assets/images/Star-Wars-transparent-logo.png"
  },

  // THE LAST OF US
  {
    id: 13,
    nombre: "The Last of Us",
    year: 2023,
    categoria: "series",
    generos: ["Drama", "Horror", "Post-Apocalíptico"],
    descripcion: "Joel y Ellie navegan por un mundo post-apocalíptico devastado por una infección fúngica.",
    calificacion: 8.7,
    verticalbanner: "/assets/images/tlouverticalbanner.jpg",
    horizontalbanner: "/assets/images/tloubanner.jpg",
    logo: "/assets/images/The_Last_of_Us_logo.png"
  }
];

// Categorías organizadas
export const categories = [
  {
    id: "anime",
    nombre: "Anime",
    descripcion: "Las mejores series de anime japonés",
    items: contentData.filter(item => item.categoria === "anime")
  },
  {
    id: "series",
    nombre: "Series",
    descripcion: "Series de TV y streaming",
    items: contentData.filter(item => item.categoria === "series")
  },
  {
    id: "peliculas",
    nombre: "Películas",
    descripcion: "El mejor cine internacional",
    items: contentData.filter(item => item.categoria === "peliculas")
  }
];

// Funciones de utilidad
export const getContentById = (id) => {
  return contentData.find(item => item.id === id);
};

export const getContentByCategory = (categoria) => {
  return contentData.filter(item => item.categoria === categoria);
};

export const searchContent = (query) => {
  const searchTerm = query.toLowerCase();
  return contentData.filter(item => 
    item.nombre.toLowerCase().includes(searchTerm) ||
    item.generos.some(genero => genero.toLowerCase().includes(searchTerm)) ||
    item.descripcion.toLowerCase().includes(searchTerm)
  );
};

export const getTopRated = (limit = 10) => {
  return [...contentData]
    .sort((a, b) => b.calificacion - a.calificacion)
    .slice(0, limit);
};

export const getRecentlyAdded = (limit = 10) => {
  return [...contentData]
    .sort((a, b) => b.year - a.year)
    .slice(0, limit);
};

// Banners principales para el carrusel hero
export const heroBanners = [
  {
    id: 1,
    title: "JOJO-FLIX",
    subtitle: "Tu plataforma de streaming personal",
    description: "Disfruta de miles de películas, series y anime en alta calidad. Tu entretenimiento favorito ahora disponible en Windows.",
    image: "/assets/images/bocchi_the_Rock_Banner.jpg",
    logo: "/assets/images/Bocchi_the_Rock_Logo.webp",
    action: "Explorar Catálogo",
    contentId: 2
  },
  {
    id: 2,
    title: "Berserk",
    subtitle: "Nueva temporada disponible",
    description: "Sumérgete en la épica historia de Guts y su búsqueda de venganza. Una obra maestra del anime oscuro.",
    image: "/assets/images/Berserkbanner.jpg",
    action: "Ver Ahora",
    contentId: 1
  },
  {
    id: 3,
    title: "The Last of Us",
    subtitle: "Serie aclamada por la crítica",
    description: "Joel y Ellie navegan por un mundo post-apocalíptico. Una adaptación magistral del videojuego.",
    image: "/assets/images/tloubanner.jpg",
    logo: "/assets/images/The_Last_of_Us_logo.png",
    action: "Ver Series",
    contentId: 13
  }
];

export default contentData;