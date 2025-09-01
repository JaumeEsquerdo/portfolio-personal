import '@/css/contacto.css'

const Contacto = () => {
    return (<>

        <main className="Contacto">
            <div className="Contacto-block">
                <h3 className="Contacto-title">Contacto</h3>
                <a className='Contacto-link' href="mailto:tuemail@example.com">tuemail@example.com</a>
                <a className='Contacto-link' href="tel:+34600000000">+34 600 000 000</a>
                <p className='Contacto-p'>Villajoyosa, Alicante</p>
            </div>

            <div className="Contacto-block">
                <h3 className="Contacto-title">Enlaces</h3>
                <a className='Contacto-link' href="https://github.com/tuusuario" target="_blank">GitHub</a>
                <a className='Contacto-link' href="https://linkedin.com/in/tuusuario" target="_blank">LinkedIn</a>
                <a className='Contacto-link' href="/cv.pdf" target="_blank">Ver CV</a>
            </div>
        </main>

    </>);
}

export default Contacto;