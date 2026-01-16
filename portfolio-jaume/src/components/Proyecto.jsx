import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { SiGithubpages } from "react-icons/si";
import { SiDribbble } from "react-icons/si";
import { ImageProject } from "./ImageProject.jsx";
import { FlipLink } from "./FlipLink.jsx";
import { useIsDesktop } from "@/hooks/useIsDesktop.js";

const Proyecto = ({
  numero,
  titulo,
  descripcion,
  imagen,
  herramientas,
  stack,
  enlace,
  destacado,
  deploy,
}) => {
  const isDesktop = useIsDesktop();

  return (
    <article className={`Proyecto-card`}>
      <div className="Proyecto-track">
        {/* Panel 1: Imagen + número */}
        <div className="Proyecto-panel Proyecto-panel--media">
          <span className="Proyecto-numero">{numero}</span>

          <ImageProject imagen={imagen} deploy={deploy} titulo={titulo} />
        </div>

        {/* Panel 2: Texto (título, desc, tecnologías, tipo) */}
        <div className="Proyecto-panel Proyecto-panel--texto">
          {isDesktop ? (
            <FlipLink href={deploy} titulo={titulo}></FlipLink>
          ) : (
            <a
              href={deploy}
              className="Proyecto-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="Proyecto-titulo">{titulo}</h3>
            </a>
          )}

          <p className="Proyecto-texto Proyecto-texto--primero">
            {descripcion}
          </p>

          <p className="Proyecto-texto">
            <strong>Destacado:</strong> {destacado}
          </p>
          <p className="Proyecto-texto">
            <strong>Herramientas:</strong> {herramientas.join(", ")}
          </p>
          <p className="Proyecto-texto">
            <strong>Tipo:</strong> {stack}
          </p>

          <div className="Proyecto-enlacesContainer">
            {enlace &&
              (Array.isArray(enlace) ? (
                // Caso en que es un array (ej: frontend + backend)
                enlace.map((item, index) => (
                  <a
                    key={index}
                    className="Proyecto-enlace"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={25} />
                    <span className="Proyecto-enlace--texto">
                      Repositorio {item.tipo}
                    </span>
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
                  <FaGithub size={25} />
                  <span className="Proyecto-enlace--texto">
                    Repositorio del código
                  </span>
                </a>
              ))}

            {deploy && (
              <a
                className="Proyecto-enlace"
                href={deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                {deploy.includes("vercel") && <SiVercel size={25} />}
                {deploy.includes("github.io") && <SiGithubpages size={45} />}
                {deploy.includes("dribbble") && <SiDribbble size={25} />}
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
