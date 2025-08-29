import '@/css/proyectos.css'
import Proyecto from '@/components/Proyecto';

const Proyectos = () => {

    // Ejemplo de JSON
    const listaProyectos = [
        {
            id: 1,
            numero: "01",
            titulo: "Sushiro – Fullstack",
            descripcion:
                "Aplicación para un restaurante con selector de mesa, menú interactivo, carrito y zona admin para login y subida de imágenes. Proyecto Fullstack completo con cliente sin login basado en mesa y sesión.",
            herramientas: [
                "React (Vite)",
                "Framer Motion",
                "CSS (SUIT CSS)",
                "Node.js",
                "Express",
                "MongoDB/Mongoose",
                "JWT",
                "Multer",
                "dotenv",
                "CORS"
            ],
            stack: "Fullstack",
            imagen: "/img/sushiro-fullstack.png",
            enlace: [
                {
                    tipo: "Frontend",
                    url: "https://github.com/JaumeEsquerdo/Sushiro-frontend"
                },
                {
                    tipo: "Backend",
                    url: "https://github.com/JaumeEsquerdo/Sushiro-backend"
                }
            ],
            deploy: "https://sushiro-frontend.vercel.app/",
            destacado: "Fullstack con login en mesa e integración de API para la relación con los productos/compras."
        },
        {
            id: 2,
            numero: "02",
            titulo: "Hotel Six Senses – Rediseño Frontend",
            descripcion:
                "Rediseño minimalista de una página web para hotel vacacional, con estética refinada, navegación intuitiva y responsive layout, simulando una experiencia visual limpia y elegante.",
            herramientas: [
                "React",
                "Vite",
                "CSS (SUIT CSS)",
                "React Router DOM",
                "React Datepicker",
                "JSON local como fuente de datos"
            ],
            stack: "Frontend",
            imagen: "/img/hotel-six-senses.png",
            enlace: [
                {
                    tipo: "Frontend",
                    url: "https://github.com/JaumeEsquerdo/proyecto-hotel-six-senses"
                }
            ],
            deploy: "https://hotel-six-senses.vercel.app/",  // actualízalo si ya está desplegado
            destacado: "Rediseño visual minimalista con React + Vite, navegación y datos locales"
        }

        ,

        {
            "id": 3,
            "numero": "03",
            "titulo": "Turistea Villajoyosa – Fullstack",
            "descripcion": "Aplicación web fullstack que permite a los visitantes descubrir Villajoyosa a través de rutas turísticas, puntos de interés y experiencias locales. Incluye un panel administrador para la gestión de contenidos y un flujo de reservas. Proyecto final del módulo FullStack en CEI Valencia.",
            "herramientas": ["React", "Node.js", "Express", "MongoDB", "Vite", "CSS Modules"],
            "stack": "Fullstack",
            "imagen": "/img/turistea-villajoyosa.png",
            "enlace": [
                { "tipo": "Frontend", "url": "https://github.com/JaumeEsquerdo/front-proyecto-final-fullstack" },
                { "tipo": "Backend", "url": "https://github.com/JaumeEsquerdo/backend-proyecto-final-fullstack" }
            ],
            "deploy": "https://turistea-villajoyosa.vercel.app/",
            "destacado": "Proyecto final del módulo FullStack de CEI Valencia"
        },
        {
            id: 4,
            numero: "04",
            titulo: "Modernidad Mediterránea – Revista",
            descripcion:
                "Página estilo blog interactivo para inspirar el uso del diseño moderno mediterráneo, creada como proyecto final del bootcamp y desplegada online como mi primer proyecto publicado.",
            herramientas: ["HTML", "CSS", "JavaScript (vanilla)", "SUITCSS (CSS modular)"],
            stack: "Frontend",
            imagen: "/img/modernidad-mediterranea.png",
            enlace: "https://github.com/JaumeEsquerdo/Modernidad-Mediterranea---revista",
            deploy: "https://jaumeesquerdo.github.io/Modernidad-Mediterranea---revista/index.html",
            destacado: "Primer proyecto desplegado",
        },
    ];


    return (
        <section className="ProyectosWrapper">
            <header className='Proyectos-header'>

                <h2 className='Proyectos-h2'>Mis proyectos</h2>
                <h3 className='Proyectos-h3'>Estos proyectos han sido diseñados y desarrollados por mí, en algunos casos utilizando imágenes o fragmentos de contenido como referencia, pero siempre creando el layout, la estructura y, cuando ha sido necesario, también el backend desde cero.</h3>
            </header>

            <div className='Proyectos-container'>

                {listaProyectos.map((proyecto) => (
                    <Proyecto
                        key={proyecto.id}
                        numero={proyecto.numero}
                        titulo={proyecto.titulo}
                        descripcion={proyecto.descripcion}
                        imagen={proyecto.imagen}
                        stack={proyecto.stack}
                        herramientas={proyecto.herramientas}
                        enlace={proyecto.enlace}
                        destacado={proyecto.destacado}
                        deploy={proyecto.deploy}
                    />
                ))}

            </div>
        </section>

    );
}

export default Proyectos;