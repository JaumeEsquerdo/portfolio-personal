import React, { useRef } from "react";
import Proyectos from "./Proyectos";
import Habilidades from "./Habilidades";
import SobreMi from "./SobreMi";
import Contacto from "./Contacto";

export const Home = () => {

    // Referencias para cada sección
    const inicioRef = useRef(null)
    const proyectosRef = useRef(null);
    const habilidadesRef = useRef(null);
    const sobreMiRef = useRef(null);
    const contactoRef = useRef(null);

    // Función de scroll suave segun ref
    const handleSmoothScroll = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="ScrollContainer">
            <section id="inicio" ref={inicioRef} className="Portfolio-home">
                <div className="HomeWrapper">
                    <aside className="HomeAside">
                        <ul className="HomeAside-ul">
                            <li><a href="https://github.com/JaumeEsquerdo" className="HomeAside-link" target="_blank" rel="noopener noreferrer">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/jaume-esquerdo/" className="HomeAside-link" target="_blank" rel="noopener noreferrer">Li</a></li>
                            <li><a className="HomeAside-link" target="_blank" rel="noopener noreferrer">CV</a></li>
                        </ul>
                        <div className="HomeAside-line"></div>
                    </aside>
                </div>
                <div className="PortfolioPresentation">
                    <h1 className="PortfolioPresentation-h1">JAUME ESQUERDO RAMIS</h1>
                    <h3 className="PortfolioPresentation-h3">Estudiante front developer y fullstack</h3>
                    <h3 className="PortfolioPresentation-h3">Actualmente realizando el máster de ‘Bootcamp de Desarrollo Web, UX y UI’ por CEI : Centro de Estudios de Innovación </h3>
                </div>

                <nav className="PortfolioPresentation-nav">
                    {/* Enlaces para el scroll suave */}
                    <button className="PortfolioPresentation-link" onClick={() => handleSmoothScroll(proyectosRef)}>PROYECTOS</button>
                    <button className="PortfolioPresentation-link" onClick={() => handleSmoothScroll(habilidadesRef)}>HABILIDADES <span className="estudios">ESTUDIOS</span></button>
                    <button className="PortfolioPresentation-link" onClick={() => handleSmoothScroll(sobreMiRef)}>SOBRE MÍ</button>
                    <button className="PortfolioPresentation-link" onClick={() => handleSmoothScroll(contactoRef)}>CONTACTO</button>
                </nav>
            </section>

            {/* Secciones con referencias */}
            <section id="proyectos" className="ScrollSection Portfolio-proyectos" ref={proyectosRef}>
                <Proyectos />
            </section>

            <section id="habilidades" className="ScrollSection Portfolio-habilidades" ref={habilidadesRef}>
                <Habilidades />
            </section>

            <section id="sobre-mi" className="ScrollSection Portfolio-sobreMi" ref={sobreMiRef}>
                <SobreMi />
            </section>

            <section id="contacto" className="ScrollSection Portfolio-contacto" ref={contactoRef}>
                <Contacto />
            </section>
        </div>
    );
};
