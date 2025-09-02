import React from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { SiGithubpages } from "react-icons/si";


const Proyecto = ({ numero, titulo, descripcion, imagen, herramientas, stack, enlace, destacado, deploy }) => {


    return (
        <article
            className={`Proyecto-card`}
        >
            <div className="Proyecto-track">
                {/* Panel 1: Imagen + número */}
                <div className="Proyecto-panel Proyecto-panel--media">
                    <span className="Proyecto-numero">{numero}</span>
                    <a href={deploy} target="_blank" rel="noopener noreferrer">
                        <img src={imagen} alt={titulo} className="Proyecto-img" />
                    </a>
                </div>

                {/* Panel 2: Texto (título, desc, tecnologías, tipo) */}
                <div className="Proyecto-panel Proyecto-panel--texto">
                    <a className="Proyecto-a" href={deploy} target="_blank" rel="noopener noreferrer">
                        <h3 className="Proyecto-titulo">{titulo}</h3>
                    </a>
                    <p className="Proyecto-descripcion">{descripcion}</p>

                    <p className="Proyecto-texto Proyecto-destacado">
                        <strong>Destacado:</strong> {destacado}
                    </p>
                    <p className="Proyecto-texto Proyecto-tecnologias">
                        <strong>Herramientas:</strong> {herramientas.join(", ")}
                    </p>
                    <p className="Proyecto-texto Proyecto-tipo">
                        <strong>Tipo:</strong> {stack}
                    </p>

                    <div className="Proyecto-enlacesContainer">

                        {Array.isArray(enlace) ? (
                            // Caso en que es un array (ej: frontend + backend)
                            enlace.map((item, index) => (
                                <a
                                    key={index}
                                    className="Proyecto-enlace"
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub size={25} /><span className="Proyecto-enlace--texto">Repositorio {item.tipo}</span>
                                </a>
                            ))
                        ) : (
                            // Caso en que es un único enlace
                            <a
                                className="Proyecto-enlace"
                                href={enlace}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub size={25} /><span className="Proyecto-enlace--texto">Repositorio del código</span>
                            </a>
                        )}


                        {deploy && (

                            <a className="Proyecto-enlace" href={deploy} target="_blank" rel="noopener noreferrer">
                                {deploy.includes("vercel") && <SiVercel size={25} />}
                                {deploy.includes("github.io") && <SiGithubpages size={45} />}
                                <span className="Proyecto-enlace--texto"> Ver proyecto</span>
                            </a>

                        )}
                    </div>

                </div>


            </div>
        </article>
    );
};

export default Proyecto;