import "@/css/sobreMi.css";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import { motion } from "framer-motion";
import { useFramerAnimations } from "@/hooks/useFramerAnimations";

const SobreMi = () => {
  const [loaded, setLoaded] = useState(false);
  const { container, item } = useFramerAnimations();

  return (
    <>
      <motion.section
        className="SobreMi"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="SobreMi-imgContainer" variants={item}>
          {!loaded && <Skeleton className="Sobremi-SkeletonImg" />}
          <img
            onLoad={() => setLoaded(true)}
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.3s ease-out",
            }}
            className="SobreMi-img"
            src="/img/perfil-img.JPG"
            alt="foto de perfil"
          />
        </motion.div>

        <motion.div className="SobreMi-texto" variants={item}>
          <h2 className="SobreMi-title">Sobre mí</h2>
          <p className="SobreMi-p">
            Con una base previa en turismo y marketing digital, decidí redirigir
            mi carrera hacia el <strong>desarrollo web frontend</strong>, un
            campo donde he encontrado un reto creativo y técnico que me motiva
            cada día.
          </p>

          <p className="SobreMi-p">
            Desde que inicié mi formación en desarrollo web en 2024, he ido
            descubriendo lo que más me atrae del desarrollo: combinar la parte{" "}
            <strong>visual del frontend</strong> con la <strong>lógica</strong>{" "}
            que hay detrás para que todo funcione. Me siento especialmente
            cómodo trabajando con <strong>React</strong> y explorando nuevas
            herramientas como <strong>Framer Motion</strong>, que me ha
            permitido experimentar con animaciones e interfaces más dinámicas.
          </p>

          <p className="SobreMi-p">
            Como desarrollador, también me motiva seguir creciendo en{" "}
            <strong>backend</strong>. En mis proyectos he trabajado con{" "}
            <strong>Node.js y MongoDB (Mongoose)</strong>, y aunque toqué
            MySQL/SQLite ha sido con Mongo donde he podido construir proyectos
            más sólidos y completos.
          </p>

          <p className="SobreMi-p">
            De los proyectos que he desarrollado, me siento especialmente
            orgulloso de:
          </p>
          <ul className="SobreMi-ul">
            <li className="SobreMi-li">
              <strong>
                <a
                  className="SobreMi-a"
                  href="https://hotel-six-senses.vercel.app/"
                  target="_blank"
                >
                  Rediseño minimalista de la web del hotel Six Senses
                </a>{" "}
              </strong>{" "}
              → un trabajo minimalista, muy ordenado y claro en la navegación.
              Especial por su estructura y claridad.{" "}
            </li>
            <li className="SobreMi-li">
              <strong>
                <a
                  className="SobreMi-a"
                  href="https://sushiro-frontend.vercel.app/"
                  target="_blank"
                >
                  Sushiro, carta de restaurante interactiva{" "}
                </a>
              </strong>{" "}
              → una app de restaurante que diseñé al completo junto a una base
              de datos.
            </li>
          </ul>
          <p className="SobreMi-p">
            Fuera del teclado, me encanta la música (siempre me acompaña cuando
            programo) y pasar tiempo en la naturaleza. Me gusta hacer snorkel, y
            en definitiva pasar tiempo con mis amigos y mi perro. Creo que esas
            actividades me equilibran y me ayudan a volver al código con la
            cabeza fresca.
          </p>

          <p className="SobreMi-p">
            {" "}
            <strong>Mi meta a corto y medio plazo</strong> es seguir formándome
            en un entorno profesional, aprender de personas con más experiencia
            y consolidar mis conocimientos hasta tener la fluidez y seguridad de
            un desarrollador senior. Me gustaría crecer dentro de una empresa
            donde pueda aportar valor desde el primer día, al mismo tiempo que
            aprendo de la práctica diaria. Para mí, lo más importante ahora es
            disfrutar del camino, seguir explorando este mundo tecnológico y
            poco a poco ir trazando nuevas aspiraciones.
          </p>
        </motion.div>
      </motion.section>
    </>
  );
};

export default SobreMi;
