import React from "react";
// import { Link } from "react-router-dom";
import { FramerMagnetic } from "@/components/FramerMagnetic";
import { usePageTransition } from "@/context/TransitionContext";

export const Home = () => {
  const { goTo } = usePageTransition();
  return (
    <main className="Portfolio-home">
      <div className="HomeWrapper">
        <aside className="HomeAside">
          <ul className="HomeAside-ul">
            <li>
              <a
                className="HomeAside-link"
                href="https://github.com/JaumeEsquerdo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className="HomeAside-link"
                href="https://www.linkedin.com/in/jaume-esquerdo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="HomeAside-link"
                href="/CV-jaume-frontend.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </li>
          </ul>
          <div className="HomeAside-line"></div>
        </aside>
      </div>

      <div className="PortfolioPresentation">
        <h1 className="PortfolioPresentation-h1">JAUME ESQUERDO RAMIS</h1>
        <h3 className="PortfolioPresentation-h3">
          Especializado en Desarrollo Frontend con React, con base Fullstack y
          UX/UI, creo experiencias web intuitivas, atractivas y responsive,
          cuidando las buenas prácticas y pensando en la escalabilidad
        </h3>
      </div>

      <nav className="PortfolioPresentation-nav">
        <FramerMagnetic>
          <button
            onClick={() => goTo("/proyectos")}
            className="PortfolioPresentation-link"
          >
            PROYECTOS
          </button>
        </FramerMagnetic>
        <FramerMagnetic>
          <button
            onClick={() => goTo("/habilidades")}
            className="PortfolioPresentation-link"
          >
            HABILIDADES / ESTUDIOS
          </button>
        </FramerMagnetic>
        <FramerMagnetic>
          <button
            onClick={() => goTo("/sobre-mi")}
            className="PortfolioPresentation-link"
          >
            SOBRE MÍ
          </button>
        </FramerMagnetic>
        <FramerMagnetic>
          <button
            onClick={() => goTo("/contacto")}
            className="PortfolioPresentation-link"
          >
            CONTACTO
          </button>
        </FramerMagnetic>
      </nav>
    </main>
  );
};

export default Home;
