import { motion } from "framer-motion";
import { useFramerAnimations } from "@/hooks/useFramerAnimations";
import "@/css/tarifas.css";
import { listaPacks } from "@/data/listaPacks";

const Tarifas = () => {
  const { container, item } = useFramerAnimations();

  return (
    <>
      <motion.section
        className="Tarifas"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="Tarifas-block" variants={item}>
          <h2 className="Tarifas-title">Tarifas</h2>
          <div className="Tarifas-containerTitle">
            <h3 className="Tarifas-subtitle">
              Precios transparentes, soluciones a medida
            </h3>
            <h4 className="Tarifas-h4">
              No uso plantillas pesadas ni sistemas que ralentizan tu negocio.
              Diseño y programo cada proyecto desde cero con código optimizado
              para que tu web sea rápida, segura y posicione en Google. Aquí
              tienes algunas opciones de referencia, pero recuerda: cada negocio
              es único y me adapto totalmente a lo que necesites.
            </h4>
          </div>
        </motion.div>
        {/* packs */}
        <motion.div className="Tarifas-container" variants={item}>
          <div className="Tarifas-packs">
            {listaPacks.map((pack) => {
              const emailBody = `Hola Jaume,\n\nMe interesa el pack "${pack.title}" para mi proyecto. Te cuento un poco lo que necesito:\n\n`;
              const mailtoUrl = `mailto:jaume.esquerdo@hotmail.com?subject=${encodeURIComponent(pack.emailSubject)}&body=${encodeURIComponent(emailBody)}`;

              return (
                <motion.div
                  key={pack.id}
                  className="Tarifas-pack"
                  whileHover={{
                    y: -8,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h2 className="Tarifas-h2">{pack.title}</h2>
                  <h3 className="Tarifas-h3">
                    Precio desde{" "}
                    <span className="Tarifas-price">{pack.price}</span>
                  </h3>

                  <div className="Tarifas-featuresDiv">
                    <span className="Tarifas-subtitle">Características</span>
                    <ul className="Tarifas-ul">
                      {pack.features.map((feature, i) => (
                        <li key={i} className="Tarifas-li">
                          <span className="Tarifas-bullet"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a href={mailtoUrl} className="Tarifas-link">
                    Preguntar sin compromiso
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Tarifas;

/* encodeURIComponent() : Sirve para transformar los espacios, las comas y los saltos de línea (\n) en caracteres que un enlace web pueda interpretar sin romperse */
