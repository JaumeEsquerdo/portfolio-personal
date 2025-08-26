import React from "react";
import { Link } from "react-router-dom";
import { FramerMagnetic } from "@/components/FramerMagnetic";

export const Home = () => {
    return (
        <main className="Portfolio-home">
            <div className="HomeWrapper">
                <aside className="HomeAside">
                    <ul className="HomeAside-ul">
                        <li>
                            <Link href="https://github.com/JaumeEsquerdo" target="_blank" rel="noopener noreferrer">Github</Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/jaume-esquerdo/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                        </li>
                        <li>
                            <Link target="_blank" rel="noopener noreferrer">CV</Link>
                        </li>
                    </ul>
                    <div className="HomeAside-line"></div>
                </aside>
            </div>

            <div className="PortfolioPresentation">
                <h1>JAUME ESQUERDO RAMIS</h1>
                <h3>Front developer y fullstack</h3>
                <h3>Actualmente he realizado el máster de ‘Bootcamp de Desarrollo Web, UX y UI’ por CEI</h3>
            </div>

            <nav className="PortfolioPresentation-nav">
                <FramerMagnetic><Link to="/proyectos" className="PortfolioPresentation-link">PROYECTOS</Link></FramerMagnetic>
                <FramerMagnetic><Link to="/habilidades" className="PortfolioPresentation-link">HABILIDADES / ESTUDIOS</Link></FramerMagnetic>
                <FramerMagnetic><Link to="/sobre-mi" className="PortfolioPresentation-link">SOBRE MÍ</Link></FramerMagnetic>
                <FramerMagnetic><Link to="/contacto" className="PortfolioPresentation-link">CONTACTO</Link></FramerMagnetic>
            </nav>
        </main>
    );
};

export default Home;