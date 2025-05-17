import '@/css/proyectos.css'

const Proyectos = () => {
    return (



        <div className="ProyectosWrapper">
            <h1 className='Proyectos-h1'>Proyectos página</h1>

            <div className='Proyectos-container'>


                <div className='Proyecto'>
                    <h2>Proyecto titulo 1</h2>
                    <button>Link al proyecto</button>
                </div>


                <div className='Proyecto'>
                    <h2>Proyecto titulo 2</h2>
                    <button>Link al proyecto</button>
                </div>



                <div className='Proyecto'>
                    <h2>Proyecto titulo 3</h2>
                    <button>Link al proyecto</button>
                </div>

            </div>
        </div>

    );
}

export default Proyectos;