import '@/css/contacto.css'

const Contacto = () => {
    return (<>

        <main className="Contacto">
            <div className="Contacto-block">
                <h2 className="Contacto-title">Contacto</h2>
                <a className='Contacto-link' href="mailto:jaume.esquerdo@hotmail.com">jaume.esquerdo@hotmail.com</a>
                <a className='Contacto-link' href="tel:+34676097535">+34 676 09 75 35</a>
                <p className='Contacto-p'>Villajoyosa, Alicante</p>
            </div>

            <div className="Contacto-block">
                <h2 className="Contacto-title">Enlaces</h2>
                <a className='Contacto-link' href="https://github.com/JaumeEsquerdo" target="_blank" rel="noopener noreferrer"
                >GitHub</a>
                <a className='Contacto-link' href="https://www.linkedin.com/in/jaume-esquerdo/" target="_blank" rel="noopener noreferrer"
                >LinkedIn</a>
                <a className='Contacto-link' href="/CV-jaume.pdf" target="_blank" rel="noopener noreferrer"
                >Ver CV</a>
            </div>
        </main>

    </>);
}

export default Contacto;