import React from "react";
import { useState } from "react";


const Proyecto = ({ numero, titulo, descripcion, imagen, herramientas, stack, enlace, destacado, deploy }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <article
            className={`Proyecto-card ${hovered ? "is-hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            /* para q tabule y funcione tmb el efecto hover */
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            tabIndex={0}
        >
            <div className="Proyecto-track">
                {/* Panel 1: Imagen + número */}
                <div className="Proyecto-panel Proyecto-panel--media">
                    <span className="Proyecto-numero">{numero}</span>
                    <img src={imagen} alt={titulo} className="Proyecto-img" />
                </div>

                {/* Panel 2: Texto (título, desc, tecnologías, tipo) */}
                <div className="Proyecto-panel Proyecto-panel--texto">
                    <h3 className="Proyecto-titulo">{titulo}</h3>
                    <p className="Proyecto-descripcion">{descripcion}</p>

                    <p className="Proyecto-destacado">
                        <strong>Destacado:</strong> {destacado}
                    </p>
                    <p className="Proyecto-tecnologias">
                        <strong>Herramientas:</strong> {herramientas}
                    </p>

                    <p className="Proyecto-tipo">
                        <strong>Tipo:</strong> {stack}
                    </p>


                    <p className="Proyecto-enlance">
                        <strong>GitHub:</strong> <a>{enlace}
                        </a> </p>

                    <p className="Proyecto-enlace">
                        <strong>Deploy:</strong> <a>{deploy}
                        </a> </p>
                </div>

                {/* Panel 3: CTA grande VER MI PROYECTO */}
                <a
                    className="Proyecto-panel Proyecto-panel--cta"
                    href={deploy}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver proyecto ${titulo}`}
                >
                    <span className="Proyecto-cta-text">Ver Proyecto</span>
                    <span className="Proyecto-cta-arrow">→</span>
                </a>
            </div>
        </article>
    );
};

export default Proyecto;