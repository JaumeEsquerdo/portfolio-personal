const listaProyectos = [
  {
    id: 1,
    numero: "01",
    titulo: "Hotel Six Senses",
    subtitulo: "Rediseño web y experiencia de reserva",
    descripcion:
      "Rediseño conceptual de la web de un hotel vacacional inspirado en Six Senses Ibiza. La aplicación simula una experiencia completa de reserva: exploración de habitaciones e instalaciones, detalle individual, selección de fechas y formulario de reserva con cálculo dinámico, priorizando una UI minimalista, responsive y orientada a experiencia de usuario.",
    herramientas: [
      "React (Vite)",
      "TypeScript",
      "Node.js",
      "CSS (SUIT CSS)",
      "React Router DOM",
      "React Datepicker",
      "Testing unitario con Vitest",
      "JSON local como fuente de datos",
    ],
    stack: "Frontend",
    imagen: "/img/portada-hotel.png",
    enlace: [
      {
        tipo: "Frontend",
        url: "https://github.com/JaumeEsquerdo/hotel-six-senses-typescript",
      },
    ],
    deploy: "https://hotel-six-senses.vercel.app/",
    destacado: "Rediseño visual minimalista inspirado en efecto Masonry",
  },
  {
    id: 2,
    numero: "02",
    titulo: "LA (2) SILLA",
    subtitulo: "Digitalización y Sistema de Reservas para Peluquería",
    descripcion:
      "Proyecto desarrollado para una peluquería local en Valencia con el fin de digitalizar su sistema de reservas. Se implementó una SPA (Single Page Application) que prioriza la experiencia de usuario joven, con animaciones fluidas, diseño mobile-first y una lógica de navegación que sincroniza el router con el scroll de forma eficiente.",
    herramientas: [
      "React 18",
      "Vite",
      "CSS3",
      "React Router v6",
      "Responsive Design",
      "WebP/Lazy Loading",
    ],
    stack: "Frontend",
    imagen: "/img/portada-la2silla.png",
    enlace: [
      {
        tipo: "Frontend",
        url: "https://github.com/JaumeEsquerdo/peluqueria-la-silla-2",
      },
    ],
    deploy: "https://la-2-silla.vercel.app/",
    destacado:
      "Proyecto colaborativo enfocado en el alto rendimiento visual mediante animaciones y una arquitectura de navegación fluida entre secciones y página de reservas.",
  },
  {
    id: 3,
    numero: "03",
    titulo: "Turistea Villajoyosa",
    subtitulo: "Planificador de Actividades Turísticas",
    descripcion:
      "Desarrollé una arquitectura robusta que permite a los usuarios personalizar itinerarios sobre su estancia en Villajoyosa mediante un calendario dinámico y a los administradores gestionar contenidos en tiempo real. Enfocado en la escalabilidad del código y una navegación fluida, integrando lógica de backend",
    herramientas: [
      "React (Vite)",
      "Node.js",
      "CSS (SUIT CSS)",
      "React Router DOM",
      "Express",
      "MongoDB",
      "React Calendar",
    ],
    stack: "Fullstack",
    imagen: "/img/portada-turistea.png",
    enlace: [
      {
        tipo: "Frontend",
        url: "https://github.com/JaumeEsquerdo/front-proyecto-final-fullstack",
      },
      {
        tipo: "Backend",
        url: "https://github.com/JaumeEsquerdo/backend-proyecto-final-fullstack",
      },
    ],
    deploy: "https://turistea-villajoyosa.vercel.app/",
    destacado:
      "Proyecto de mayor complejidad técnica con integración completa de API REST y base de datos",
  },

  {
    id: 4,
    numero: "04",
    titulo: "BEARS",
    subtitulo: "Experiencia web sobre ética y vida salvaje",
    descripcion:
      "Navegación conceptual que reflexiona sobre los límites éticos entre humanos y vida salvaje. Inspirada en encuentros reales documentados en Grizzly Man y Bear-Like, la aplicación propone un recorrido narrativo y educativo dividido en dos capas: Historia (relato filosófico) y Sobre Ellos (información estructurada sobre el oso grizzly).",
    herramientas: [
      "React (Vite)",
      "TypeScript",
      "TailwindCSS v4",
      "React Router",
      "Framer Motion",
      "Context API",
      "Custom hooks (preload)",
    ],
    stack: "Frontend",
    imagen: "/img/portada-bears.png",
    enlace: [
      {
        tipo: "Frontend",
        url: "https://github.com/JaumeEsquerdo/bears-web",
      },
    ],
    deploy: "https://bears-conceptual.vercel.app/",
    destacado:
      "Proyecto conceptual centrado en animación, narrativa interactiva y reflexión ética: precarga de imágenes, puertas animadas y navegación por secciones con transiciones fluidas.",
  },

  {
    id: 5,
    numero: "05",
    titulo: "Sushiro",
    subtitulo: "Carta de restaurante interactiva",
    descripcion:
      "Aplicación para un restaurante con selector de mesa, menú interactivo, carrito y zona admin para login y subida de imágenes. Proyecto Fullstack completo con cliente sin login basado en mesa y sesión.",
    herramientas: [
      "React (Vite)",
      "Node.js",
      "CSS (SUIT CSS)",
      "React Router DOM",
      "Framer Motion",
      "Express",
      "MongoDB/Mongoose",
      "JWT",
      "Multer",
      "dotenv",
      "CORS",
    ],
    stack: "Fullstack",
    imagen: "/img/portada-sushiro.png",
    enlace: [
      {
        tipo: "Frontend",
        url: "https://github.com/JaumeEsquerdo/Sushiro-frontend",
      },
      {
        tipo: "Backend",
        url: "https://github.com/JaumeEsquerdo/Sushiro-backend",
      },
    ],
    deploy: "https://sushiro-frontend.vercel.app/",
    destacado:
      "Fullstack con login en mesa e integración de API para la relación con los productos/compras.",
  },

  {
    id: 6,
    numero: "06",
    titulo: "Modernidad Mediterránea",
    subtitulo: "Revista digital de arquitectura",
    descripcion:
      "Revista digital interactiva sobre arquitectura moderna mediterránea, desarrollada como proyecto final del módulo de Diseño Web con HTML, CSS y JS en CEI Valencia. La web simula una experiencia editorial, con secciones dedicadas a casas, materiales y referencias visuales, priorizando un diseño limpio, estructurado y orientado a contenido.",
    herramientas: ["HTML", "CSS (SUIT CSS)", "JavaScript (vanilla)"],
    stack: "Frontend",
    imagen: "/img/portada-modernidad.png",
    enlace:
      "https://github.com/JaumeEsquerdo/Modernidad-Mediterranea---revista",
    deploy:
      "https://jaumeesquerdo.github.io/Modernidad-Mediterranea---revista/index.html",
    destacado: "Primer proyecto desplegado",
  },
  {
    id: 7,
    numero: "07",
    titulo: "Brava",
    subtitulo: "Diseño UX/UI de E-commerce de Bebidas Funcionales",
    descripcion:
      "Diseño integral de una plataforma móvil para una marca de bebidas saludables, desarrollada como Trabajo Final de Máster (TFM). El proyecto destaca por un proceso profundo de UX Research, validando una propuesta visual inspirada en la esencia mediterránea de Valencia que equilibra bienestar, transparencia y un estilo de vida activo.",
    herramientas: [
      "Figma",
      "UX Research",
      "User Testing",
      "Prototipado Interactivo",
    ],
    stack: "UX/UI Design",
    imagen: "/img/portada-brava.png",
    deploy:
      "https://dribbble.com/shots/26962652-Brava-Dise-o-UX-UI-para-Refrescos-Saludables-App-M-vil",
    destacado: "Proyecto final del módulo UX/UI de CEI Valencia",
  },
];

export default listaProyectos;
