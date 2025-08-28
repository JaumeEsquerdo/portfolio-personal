import React from "react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { SiGithubpages } from "react-icons/si";


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

                    <p className="Proyecto-texto Proyecto-destacado">
                        <strong>Destacado:</strong> {destacado}
                    </p>
                    <p className="Proyecto-texto Proyecto-tecnologias">
                        <strong>Herramientas:</strong> {herramientas}
                    </p>
                    <p className="Proyecto-texto Proyecto-tipo">
                        <strong>Tipo:</strong> {stack}
                    </p>

                    <div className="Proyecto-enlacesContainer">
                        
                            <a className="Proyecto-enlace" href={enlace} target="_blank"><FaGithub size={25} /> Repositorio del código</a>
                        

                        {deploy && (

                            <a className="Proyecto-enlace" href={deploy} target="_blank" rel="noopener noreferrer">
                                {deploy.includes("vercel") && <SiVercel size={25} />}
                                {deploy.includes("github.io") && <SiGithubpages size={45} />}
                                <span> Despliegue del proyecto</span>
                            </a>

                        )}
                    </div>

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