import '@/css/proyectos.css'
import Proyecto from '@/components/Proyecto';

const Proyectos = () => {

    // Ejemplo de JSON
    const listaProyectos = [
        {
            id: 1,
            numero: "01",
            titulo: "Modernidad Mediterránea – Revista",
            descripcion:
                "Página estilo blog interactivo para inspirar el uso del diseño moderno mediterráneo, creada como proyecto final del bootcamp.",
            tecnologias: ["HTML", "CSS", "JavaScript (vanilla)"],
            metodologia: "SUITCSS (CSS modular)", // campo opcional
            stack: "Frontend",
            imagen: "/img/modernidad-mediterranea.png",
            enlace: "https://github.com/JaumeEsquerdo/Modernidad-Mediterranea---revista",
        }, ,
        {
            id: 2,
            numero: "02",
            titulo: "Restaurante Gourmet",
            descripcion: "Web ficticia de un restaurante con reservas y carta online.",
            imagen: "/img/proyecto2.jpg",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            tipo: "frontend"
        },
        {
            id: 3,
            numero: "03",
            titulo: "Arquitectura Mediterránea",
            descripcion: "Proyecto educativo sobre el estilo moderno mediterráneo.",
            imagen: "/img/proyecto3.jpg",
            tecnologias: ["React", "Tailwind", "Node.js"],
            tipo: "frontend y backend"
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
                        tipo={proyecto.tipo}
                        tecnologias={proyecto.tecnologias}
                        enlace={proyecto.enlace}
                    />
                ))}

            </div>
        </section>

    );
}

export default Proyectos;