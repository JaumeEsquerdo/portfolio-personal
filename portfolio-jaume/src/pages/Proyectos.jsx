import '@/css/proyectos.css'
import { FramerMagnetic } from '@/components/FramerMagnetic';

const Proyectos = () => {
    return (



        <div className="ProyectosWrapper">
            <h1 className='Proyectos-h1'>Proyectos página</h1>

            <div className='Proyectos-container'>

                <FramerMagnetic>
                    <div className='Proyecto'>
                        <h2>Proyecto titulo 1</h2>
                        <button>Link al proyecto</button>
                    </div>
                </FramerMagnetic>

                <FramerMagnetic>

                    <div className='Proyecto'>
                        <h2>Proyecto titulo 2</h2>
                        <button>Link al proyecto</button>
                    </div>
                </FramerMagnetic>

                <FramerMagnetic>
                    <div className='Proyecto'>
                        <h2>Proyecto titulo 3</h2>
                        <button>Link al proyecto</button>
                    </div>
                </FramerMagnetic>
            </div>
        </div>

    );
}

export default Proyectos;