import "@/css/proyectos.css";
import Proyecto from "@/components/Proyecto";
import listaProyectos from "@/data/listaProyectos";
import { motion } from "framer-motion";

const container = {
  hidden: {}, //inicial
  show: {
    transition: {
      staggerChildren: 0.2, //escalado de 0.2s
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
/* margin: '-100px' para q ejecute la transición un poco antes del viewport
y once:true, para q se ejecute solo una vez
*/
const Proyectos = () => {
  return (
    <motion.section
      className="ProyectosWrapper"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.header variants={container} className="Proyectos-header">
        <motion.h2 className="Proyectos-h2" variants={item}>
          Proyectos
        </motion.h2>
        <motion.h3 className="Proyectos-h3" variants={item}>
          Estos proyectos han sido diseñados y desarrollados por mí, en algunos
          casos utilizando imágenes o fragmentos de contenido como referencia,
          pero siempre creando el layout, la estructura y, cuando ha sido
          necesario, también el backend desde cero.
        </motion.h3>
      </motion.header>

      <div className="Proyectos-container" variants={container}>
        {listaProyectos.map((proyecto) => (
          <motion.div key={proyecto.id} variants={item}>
            <Proyecto
              numero={proyecto.numero}
              titulo={proyecto.titulo}
              descripcion={proyecto.descripcion}
              imagen={proyecto.imagen}
              stack={proyecto.stack}
              herramientas={proyecto.herramientas}
              enlace={proyecto.enlace}
              destacado={proyecto.destacado}
              deploy={proyecto.deploy}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Proyectos;
