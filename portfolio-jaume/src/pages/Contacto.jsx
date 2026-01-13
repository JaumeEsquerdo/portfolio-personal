import "@/css/contacto.css";
import { motion } from "framer-motion";
import { useFramerAnimations } from "@/hooks/useFramerAnimations";

const Contacto = () => {
  const { container, item } = useFramerAnimations();

  return (
    <>
      <motion.main
        className="Contacto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="Contacto-block" variants={item}>
          <h2 className="Contacto-title">Contacto</h2>
          <a className="Contacto-link" href="mailto:jaume.esquerdo@hotmail.com">
            jaume.esquerdo@hotmail.com
          </a>
          <a className="Contacto-link" href="tel:+34676097535">
            +34 676 09 75 35
          </a>
          <p className="Contacto-p">Villajoyosa, Alicante</p>
        </motion.div>

        <motion.div className="Contacto-block" variants={item}>
          <h2 className="Contacto-title">Enlaces</h2>
          <a
            className="Contacto-link"
            href="https://github.com/JaumeEsquerdo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="Contacto-link"
            href="https://www.linkedin.com/in/jaume-esquerdo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="Contacto-link"
            href="/CV-jaume-frontend.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver CV
          </a>
        </motion.div>
      </motion.main>
    </>
  );
};

export default Contacto;
