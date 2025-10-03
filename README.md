# Jojo-flix Windows

Una aplicación de escritorio para streaming de películas y series, migrada desde la versión Android React Native a una aplicación Electron para Windows.

## 🚀 Características

- **Interfaz Moderna**: Diseño elegante y responsive optimizado para desktop
- **Navegación Intuitiva**: Fácil acceso a películas, series y búsqueda
- **Streaming de Alta Calidad**: Reproducción de video optimizada para desktop
- **Búsqueda Avanzada**: Encuentra tu contenido favorito rápidamente
- **Experiencia Sin Anuncios**: Disfruta sin interrupciones

## 🛠️ Tecnologías Utilizadas

- **Electron**: Framework para aplicaciones de escritorio multiplataforma
- **React**: Biblioteca de JavaScript para construir interfaces de usuario
- **React Router**: Navegación declarativa para React
- **Styled Components**: CSS-in-JS para estilizado de componentes
- **Node.js**: Entorno de ejecución para JavaScript

## 📋 Prerequisitos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16.0 o superior)
- [npm](https://www.npmjs.com/) (viene incluido con Node.js)

## ⚡ Instalación y Configuración

1. **Clona el repositorio**:
   ```bash
   git clone <repository-url>
   cd Jojo-flix_Windows
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Ejecuta la aplicación en modo desarrollo**:
   ```bash
   npm run electron-dev
   ```

## 🖥️ Scripts Disponibles

- `npm start`: Ejecuta la aplicación React en modo desarrollo
- `npm run build`: Construye la aplicación React para producción
- `npm run electron`: Ejecuta Electron (requiere build previo)
- `npm run electron-dev`: Ejecuta la aplicación completa en modo desarrollo
- `npm run build-electron`: Construye y empaqueta la aplicación Electron
- `npm run dist`: Crea el instalador para distribución

## 📁 Estructura del Proyecto

```
Jojo-flix_Windows/
├── public/
│   ├── electron.js          # Proceso principal de Electron
│   ├── index.html          # Template HTML
│   └── manifest.json       # Manifiesto de la aplicación
├── src/
│   ├── components/         # Componentes reutilizables
│   │   └── Header/         # Componente de navegación
│   ├── pages/             # Páginas principales
│   │   ├── HomePage/      # Página de inicio
│   │   ├── MoviesPage/    # Página de películas
│   │   ├── SeriesPage/    # Página de series
│   │   ├── SearchPage/    # Página de búsqueda
│   │   └── PlayerPage/    # Reproductor de video
│   ├── App.js             # Componente principal
│   ├── App.css            # Estilos globales
│   ├── index.js           # Punto de entrada
│   └── index.css          # Estilos base
├── package.json           # Configuración y dependencias
└── README.md             # Este archivo
```

## 🔄 Plan de Migración desde Android

### Fase 1: Estructura Base ✅
- [x] Configuración del proyecto Electron
- [x] Componentes de navegación básicos
- [x] Páginas principales
- [x] Enrutamiento

### Fase 2: Funcionalidades Core (En Progreso)
- [ ] Sistema de autenticación
- [ ] Catálogo de contenido
- [ ] Reproductor de video
- [ ] Sistema de búsqueda
- [ ] Gestión de favoritos

### Fase 3: Características Avanzadas
- [ ] Descarga de contenido offline
- [ ] Múltiples perfiles de usuario
- [ ] Recomendaciones personalizadas
- [ ] Configuraciones de calidad
- [ ] Subtítulos y audio

### Fase 4: Optimización y Distribución
- [ ] Optimización de rendimiento
- [ ] Pruebas automatizadas
- [ ] Empaquetado para distribución
- [ ] Instalador de Windows

## 🐛 Problemas Conocidos

- El proyecto está en fase inicial de migración
- Las páginas de contenido muestran placeholders
- El reproductor de video necesita implementación
- Falta integración con APIs de contenido

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Para preguntas o sugerencias sobre el proyecto, por favor abre un issue en el repositorio.

---

**Nota**: Este proyecto es una migración de la aplicación Android Jojo-flix a Windows usando Electron. El desarrollo está en progreso y se irán agregando funcionalidades gradualmente.