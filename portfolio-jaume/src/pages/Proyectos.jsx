import '@/css/proyectos.css'
import Proyecto from '@/components/Proyecto';
import listaProyectos from '@/data/listaProyectos';

const Proyectos = () => {

    return (
        <section className="ProyectosWrapper">
            <header className='Proyectos-header'>

                <h2 className='Proyectos-h2'>Proyectos</h2>
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