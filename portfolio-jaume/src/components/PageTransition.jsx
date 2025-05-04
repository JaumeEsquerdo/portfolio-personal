import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, y: '100%' },  // La siguiente página está abajo, oculta
  animate: { opacity: 1, y: '0%' },    // La siguiente página se mueve a su posición final
  exit: { opacity: 0, y: '-100%' },    // La página actual se desplaza hacia arriba y se desvanece
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"  // Inicializa la animación con la página siguiente oculta abajo
      animate="animate"  // La página siguiente entra suavemente a la pantalla
      exit="exit"        // La página anterior sale deslizándose hacia arriba
      transition={{ duration: 0.6 }}  // Duración suave para las transiciones
      style={{
        position: 'absolute',  // Asegurarse de que las páginas estén posicionadas correctamente
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        minHeight: '100vh',    // Al menos toda la altura de la pantalla
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
