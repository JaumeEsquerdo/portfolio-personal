import '@/css/proyectos.css'
import Proyecto from '@/components/Proyecto';

const Proyectos = () => {

    // Ejemplo de JSON
    const listaProyectos = [
        {
            id: 1,
            numero: "01",
            titulo: "App de Emergencias",
            descripcion: "Aplicación informativa sobre desastres y emergencias.",
            imagen: "/img/proyecto1.jpg",
            tecnologias: ["React", "CSS", "API REST"],
            tipo: "frontend y backend"
        },
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
            <h1 className='Proyectos-h1'>Mis proyectos</h1>

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