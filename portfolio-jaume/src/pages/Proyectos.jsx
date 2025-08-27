import '@/css/proyectos.css'
import Proyecto from '@/components/Proyecto';

const Proyectos = () => {

    const listaProyectos = [
        {
            id: 1,
            titulo: "App de Emergencias",
            descripcion: "Aplicación informativa sobre desastres y emergencias.",
            imagen: "/img/proyecto1.jpg",
        },
        {
            id: 2,
            titulo: "Restaurante Gourmet",
            descripcion: "Web ficticia de un restaurante con reservas y carta online.",
            imagen: "/img/proyecto2.jpg",
        },
        {
            id: 3,
            titulo: "Arquitectura Mediterránea",
            descripcion: "Proyecto educativo sobre el estilo moderno mediterráneo.",
            imagen: "/img/proyecto3.jpg",
        },
    ];


    return (
        <section className="ProyectosWrapper">
            <h1 className='Proyectos-h1'>Mis proyectos</h1>

            <div className='Proyectos-container'>

                {listaProyectos.map((proyecto) => (
                    <Proyecto
                        key={proyecto.id}
                        titulo={proyecto.titulo}
                        descripcion={proyecto.descripcion}
                        imagen={proyecto.imagen}
                    />
                ))}

            </div>
        </section>

    );
}

export default Proyectos;