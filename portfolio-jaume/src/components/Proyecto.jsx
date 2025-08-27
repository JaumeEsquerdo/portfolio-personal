import React from "react";
import { useState } from "react";

const Proyecto = ({ numero, titulo, descripcion, imagen, tecnologias, tipo, enlace }) => {
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

                    <p className="Proyecto-tecnologias">
                        <strong>Tecnologías:</strong> {tecnologias}
                    </p>

                    {tipo && (
                        <p className="Proyecto-tipo">
                            <strong>Tipo:</strong> {tipo}
                        </p>
                    )}
                </div>

                {/* Panel 3: CTA grande VER MI PROYECTO */}
                <a
                    className="Proyecto-panel Proyecto-panel--cta"
                    href={enlace}
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