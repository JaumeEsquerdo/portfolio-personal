import "@/css/proyectos.css";
import Proyecto from "@/components/Proyecto";
import listaProyectos from "@/data/listaProyectos";
import { motion } from "framer-motion";
import { useFramerAnimations } from "@/hooks/useFramerAnimations";

/* margin: '-100px' para q ejecute la transición un poco antes del viewport
y once:true, para q se ejecute solo una vez

hay un variants={container} dentro del container principal para q haya un sub stagger
*/
const Proyectos = () => {
  const { container, item } = useFramerAnimations();

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

      <motion.div className="Proyectos-container" variants={container}>
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
      </motion.div>
    </motion.section>
  );
};

export default Proyectos;
