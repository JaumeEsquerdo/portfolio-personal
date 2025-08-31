import '@/css/sobreMi.css'

const SobreMi = () => {
    return (<>

        <section class="SobreMi">
            <img className='SobreMi-img' src="" alt="" />

            <div className='SobreMi-texto'>
                <p className="SobreMi-p">Con una base previa en turismo y marketing digital, decidí redirigir mi carrera hacia el <strong>desarrollo web fullstack</strong>, un campo donde he encontrado un reto creativo y técnico que me motiva cada día.</p>

                <p className="SobreMi-p">Desde que inicié mi formación en desarrollo web en 2024, he ido descubriendo lo que más me atrae del desarrollo: combinar la parte <strong>visual del frontend</strong> con la <strong>lógica</strong> que hay detrás para que todo funcione. Me siento especialmente cómodo trabajando con <strong>React</strong> y explorando nuevas herramientas como <strong>Framer Motion</strong>, que me ha permitido experimentar con animaciones e interfaces más dinámicas.</p>

                <p className="SobreMi-p">Como desarrollador <strong>fullstack en formación</strong>, también me motiva seguir creciendo en <strong>backend</strong>...</p>

                <h3>Proyectos destacados</h3>
                <ul className="SobreMi-ul">
                    <li className="SobreMi-li"><strong>Rediseño web de un hotel</strong> → un trabajo minimalista, muy ordenado y claro en la navegación.</li>
                    <li className="SobreMi-li"><strong>Sushiro</strong> → una app de restaurante que diseñé casi al completo...</li>
                </ul>
                <p className="SobreMi-p">Fuera del teclado, me encanta la música (siempre me acompaña cuando programo) y pasar tiempo en la naturaleza...</p>
            </div>

        </section>

    </>);
}

export default SobreMi;