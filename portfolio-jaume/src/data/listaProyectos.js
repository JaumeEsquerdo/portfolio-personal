const listaProyectos = [
  {
    id: 1,
    numero: "01",
    titulo: "findJob",
    subtitulo:
      "Dashboard de Empleo Tech con visualización de datos en tiempo real",
    detalles: {
      problema:
        "Analizar el mercado laboral tecnológico es tedioso; las ofertas están dispersas y es difícil detectar de un vistazo qué tecnologías se piden más o cuáles son los salarios reales.",
      solucion:
        "Esta plataforma transforma ese caos de datos en un panel visual intuitivo. El foco principal es la claridad: los gráficos se actualizan para mostrar lo que realmente importa, permitiendo que cualquier profesional entienda el mercado de un vistazo gracias a una estructura técnica que prioriza la limpieza y velocidad de la información.",
    },
    herramientas: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Recharts",
      "Zod",
      "Framer Motion",
      "API Routes",
    ],
    stack: "Fullstack",
    imagen: "/img/portada-findJob.png",
    enlace: [
      {
        tipo: "Fullstack",
        url: "https://github.com/JaumeEsquerdo/dashboard-findJob",
      },
    ],
    deploy: "https://find-job-dashboard.vercel.app/",
  },
  {
    id: 2,
    numero: "02",
    titulo: "COSTERETA n1",
    subtitulo:
      "Landing page de alto rendimiento y embudo SEO para alojamiento turístico",
    detalles: {
      problema:
        "En las plataformas de reserva, los alojamientos pierden su esencia y se ven todos iguales. Es difícil transmitir los detalles y el encanto que hacen especial a un lugar cuando dependes de un formato estándar.",
      solucion:
        "Una web independiente que destaca la personalidad única del alojamiento a través de una narrativa visual cuidada. La web funciona como un puente: permite al huésped conocer cada rincón con detalle para luego redirigirlo, mediante botones de reserva, al portal de gestión oficial de forma fluida.",
    },
    herramientas: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Framer Motion",
      "SEO Técnico",
      "Custom Hooks",
    ],
    stack: "Frontend",
    imagen: "/img/portada-costereta.webp",
    enlace: [
      {
        tipo: "Frontend",
        url: "https://github.com/JaumeEsquerdo/costera-n1",
      },
    ],
    deploy: "https://costera-n1.vercel.app/es",
  },
  {
    id: 3,
    numero: "03",
    titulo: "Hotel Six Senses",
    subtitulo: "Rediseño web y flujo de experiencia de reserva",
    detalles: {
      problema:
        "Las webs hoteleras suelen ser plantillas rígidas y visualmente genéricas que no logran transmitir la exclusividad del alojamiento ni facilitan un proceso de reserva fluido.",
      solucion:
        "La experiencia de usuario se eleva mediante una navegación inmersiva que organiza el contenido de forma elegante. El sistema de reservas funciona como un asistente silencioso que calcula costes y gestiona fechas sin recargas de página, logrando que el salto entre la exploración de habitaciones y la confirmación sea instantáneo y natural.",
    },
    herramientas: [
      "React (Vite)",
      "TypeScript",
      "React Router DOM",
      "Context API",
      "CSS (SUIT CSS)",
      "React Datepicker",
      "Testing (Vitest)",
      "JSON Data Management",
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
  },
  {
    id: 4,
    numero: "04",
    titulo: "BEARS",
    subtitulo: "Experiencia web interactiva sobre ética y vida salvaje",
    detalles: {
      problema:
        "La divulgación ética y ambiental suele pecar de ser demasiado estática, perdiendo la oportunidad de conectar emocionalmente con el usuario a través de la narrativa digital.",
      solucion:
        "El resultado es una experiencia interactiva que divide el contenido en dos partes: un relato reflexivo y una guía educativa. Para que el usuario se sienta dentro de la historia, implementé un sistema de 'puertas' animadas y transiciones suaves que cargan al instante, permitiendo navegar entre la filosofía y los datos científicos de forma fluida, sin interrupciones y con un ritmo visual constante.",
    },
    herramientas: [
      "React (Vite)",
      "TypeScript",
      "TailwindCSS v4",
      "Framer Motion",
      "React Router",
      "Context API",
      "Custom Hooks (Preload)",
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
  },
  {
    id: 5,
    numero: "05",
    titulo: "LA (2) SILLA",
    subtitulo: "Digitalización y Sistema de Reservas para peluquería local",
    detalles: {
      problema:
        "Las peluquerías dependen casi siempre de desarrollos externos de reservas donde, además de pagar comisiones, se sacrifica por completo la identidad visual y la trascendencia de marca.",
      solucion:
        "Esta plataforma recupera el control total del negocio y su imagen. La prioridad es una web mobile-first que no solo elimina intermediarios, sino que ofrece una navegación ultra rápida y fluida. Al optimizar cada recurso visual, se consigue que exista una unión entre lo que transmite la propia web de la peluquería como el proceso de reservar una cita.",
    },
    herramientas: [
      "React 18 (Vite)",
      "React Router v6",
      "CSS3 Vanilla",
      "Framer Motion",
      "Context API",
      "WebP / Lazy Loading",
      "Responsive Design (Mobile-first)",
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
  },

  {
    id: 6,
    numero: "06",
    titulo: "Turistea Villajoyosa",
    subtitulo: "Planificador de Itinerarios Turísticos",
    detalles: {
      problema:
        "La mayoría de guías turísticas son informativas pero no funcionales, obligando al viajero a usar herramientas externas para planificar su estancia y fragmentando su experiencia.",
      solucion:
        "La clave aquí es la centralización: un planificador inteligente que permite guardar itinerarios tanto predeterminados como propios personalizados que persisten en el tiempo. El sistema gestiona con seguridad tanto el acceso de los turistas como un panel de control para que los administradores mantengan la oferta cultural actualizada en tiempo real sin complicaciones técnicas.",
    },
    herramientas: [
      "MongoDB & Mongoose",
      "Express",
      "React (Vite)",
      "Node.js",
      "JWT Authentication",
      "React Calendar",
      "SUIT CSS",
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
  },
  // {
  //   id: 6,
  //   numero: "06",
  //   titulo: "Sushiro",
  //   subtitulo: "Carta de restaurante interactiva",
  //   descripcion:
  //     "Aplicación para un restaurante con selector de mesa, menú interactivo, carrito y zona admin para login y subida de imágenes. Proyecto Fullstack completo con cliente sin login basado en mesa y sesión.",
  //   herramientas: [
  //     "React (Vite)",
  //     "Node.js",
  //     "CSS (SUIT CSS)",
  //     "React Router DOM",
  //     "Framer Motion",
  //     "Express",
  //     "MongoDB/Mongoose",
  //     "JWT",
  //     "Multer",
  //     "dotenv",
  //     "CORS",
  //   ],
  //   stack: "Fullstack",
  //   imagen: "/img/portada-sushiro.png",
  //   enlace: [
  //     {
  //       tipo: "Frontend",
  //       url: "https://github.com/JaumeEsquerdo/Sushiro-frontend",
  //     },
  //     {
  //       tipo: "Backend",
  //       url: "https://github.com/JaumeEsquerdo/Sushiro-backend",
  //     },
  //   ],
  //   deploy: "https://sushiro-frontend.vercel.app/",
  //   destacado:
  //     "Fullstack con login en mesa e integración de API para la relación con los productos/compras.",
  // },

  {
    id: 7,
    numero: "07",
    titulo: "Brava",
    subtitulo: "Diseño UX/UI de E-commerce de Bebidas Funcionales",
    detalles: {
      problema:
        "El sector de las bebidas saludables a menudo presenta interfaces genéricas que no logran comunicar el equilibrio entre el bienestar y un estilo de vida activo, fallando en generar confianza.",
      solucion:
        "El diseño nace de un proceso de investigación con usuarios para garantizar que cada elemento visual aporte claridad. El prototipo final prioriza la transparencia de los ingredientes y una arquitectura de compra simplificada, logrando una estética mediterránea que se siente premium pero que resulta extremadamente fácil de usar.",
    },
    herramientas: [
      "Figma",
      "UX Research",
      "Prototipado Interactivo",
      "User Testing",
      "Design Systems",
      "Arquitectura de Información",
    ],
    stack: "UX/UI Design",
    imagen: "/img/portada-brava.png",
    deploy:
      "https://dribbble.com/shots/26962652-Brava-Dise-o-UX-UI-para-Refrescos-Saludables-App-M-vil",
  },
  {
    id: 8,
    numero: "08",
    titulo: "Modernidad Mediterránea",
    subtitulo: "Revista digital interactiva de arquitectura",
    detalles: {
      problema:
        "Las revistas de arquitectura digital a menudo sacrifican la estética editorial en favor de layouts web genéricos, perdiendo la esencia visual y el ritmo de lectura que caracteriza a las publicaciones de diseño premium.",
      solucion:
        "El proyecto traslada la esencia del papel al entorno digital mediante una maquetación limpia y equilibrada. La estructura permite que el contenido visual respire, logrando una experiencia de lectura pausada donde la jerarquía tipográfica y la organización de los materiales imitan la calidad de una publicación de lujo de forma nativa y ágil.",
    },
    herramientas: ["HTML5", "CSS3 (SUIT CSS)", "JavaScript (Vanilla)"],
    stack: "Frontend",
    imagen: "/img/portada-modernidad.png",
    enlace:
      "https://github.com/JaumeEsquerdo/Modernidad-Mediterranea---revista",
    deploy:
      "https://jaumeesquerdo.github.io/Modernidad-Mediterranea---revista/index.html",
  },
];

export default listaProyectos;
