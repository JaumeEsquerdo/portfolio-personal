const listaProyectos = [
  {
    id: 1,
    numero: "01",
    titulo: "Sushiro – Fullstack",
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
    imagen: "/img/sushiro-fondo.png",
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
    id: 2,
    numero: "02",
    titulo: "Hotel Six Senses – Rediseño Frontend",
    descripcion:
      "Rediseño minimalista de una página web para hotel vacacional, con estética refinada, navegación intuitiva y responsive layout, simulando una experiencia visual limpia y elegante.",
    herramientas: [
      "React (Vite)",
      "TypeScript",
      "Node.js",
      "CSS (SUIT CSS)",
      "React Router DOM",
      "React Datepicker",
      "JSON local como fuente de datos",
    ],
    stack: "Frontend",
    imagen: "/img/hotel-sixSenses-fondo.png",
    enlace: [
      {
        tipo: "Frontend",
        url: "https://github.com/JaumeEsquerdo/hotel-six-senses-typescript",
      },
    ],
    deploy: "https://hotel-six-senses.vercel.app/",
    destacado:
      "Rediseño visual minimalista con React (Vite) + TypeScript, navegación y datos locales",
  },

  {
    id: 3,
    numero: "03",
    titulo: "Turistea Villajoyosa – Fullstack",
    descripcion:
      "Aplicación web fullstack que permite a los visitantes descubrir Villajoyosa a través de rutas turísticas, puntos de interés y experiencias locales. Incluye un panel administrador para la gestión de contenidos y un flujo de reservas. Proyecto final del módulo FullStack en CEI Valencia.",
    herramientas: [
      "React (Vite)",
      "Node.js",
      "CSS (SUIT CSS)",
      "React Router DOM",
      "Express",
      "MongoDB",
      "Vite",
      "React Calendar",
    ],
    stack: "Fullstack",
    imagen: "/img/turistea-bg.png",
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
    deploy: "https://front-proyecto-final-fullstack.vercel.app/",
    destacado: "Proyecto final del módulo FullStack de CEI Valencia",
  },
  {
    id: 4,
    numero: "04",
    titulo: "Brava – E-commerce de Bebidas Funcionales",
    descripcion:
      "Diseño integral de una plataforma móvil para una marca de bebidas saludables, desarrollada como Trabajo Final de Máster (TFM). El proyecto destaca por un proceso profundo de UX Research, validando una propuesta visual inspirada en la esencia mediterránea de Valencia que equilibra bienestar, transparencia y un estilo de vida activo.",
    herramientas: [
      "Figma",
      "UX Research",
      "User Testing",
      "Prototipado Interactivo",
    ],
    stack: "UX/UI Design",
    imagen: "/img/brava-bebidas.png",
    deploy:
      "https://dribbble.com/shots/26962652-Brava-Dise-o-UX-UI-para-Refrescos-Saludables-App-M-vil",
    destacado: "Proyecto final del módulo UX/UI de CEI Valencia",
  },
  {
    id: 5,
    numero: "05",
    titulo: "Modernidad Mediterránea – Revista",
    descripcion:
      "Página estilo blog interactivo para inspirar el uso del diseño moderno mediterráneo, creada como proyecto final del bootcamp y desplegada online como mi primer proyecto publicado.",
    herramientas: ["HTML", "CSS (SUIT CSS)", "JavaScript (vanilla)"],
    stack: "Frontend",
    imagen: "/img/modernidad-mediterranea.png",
    enlace:
      "https://github.com/JaumeEsquerdo/Modernidad-Mediterranea---revista",
    deploy:
      "https://jaumeesquerdo.github.io/Modernidad-Mediterranea---revista/index.html",
    destacado: "Primer proyecto desplegado",
  },
];

export default listaProyectos;
