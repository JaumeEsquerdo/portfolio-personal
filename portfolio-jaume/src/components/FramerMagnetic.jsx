
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export const FramerMagnetic = ({ children }) => {
    /* recibe children, es decir, cualquier contenido que metas dentro de este componente. */

    const ref = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect()
        /*getBoundingClientRect() devuelve un objeto con las propiedades del tamaño y posición del elemento en la ventana. */

        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        /* Obtiene las dimensiones (width, height) y posición (left, top) del div referenciado.
        Se usa para calcular el centro del elemento.*/
        /* Calcula la diferencia entre el cursor y el centro del elemento. Así obtienes una coordenada relativa al centro, para un "efecto imán" hacia el puntero. */
        setPosition({ x, y })

    }

    const mouseLeave = () => {
        setPosition({ x: 0, y: 0 })
        /* reseteo */
    }
    /* se extrae para usarlo en la anim.  */
    const { x, y } = position
    return (
        <motion.div
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            ref={ref}
            animate={{ x, y }}
            transition={{ type: 'spring', stiffness: 110, damping: 15, mass: 0.8 }}

        >
            {
                children
            }
        </motion.div>
    );
}

/** 
 * TRANISITION
 * type: 'spring': usa una animación muelle que da rebote suave y realista.
 * stiffness: qué tan rígido es el efecto muelle. Más alto = más rápido pero más brusco.
 * damping: cuánto frena la vibración del muelle. Más alto = menos rebote.
 * mass: qué tan pesado es el objeto. Más bajo = más ágil, más alto = más lento
 * 
 * Parámetros por default de la animación:
 * 
 *    stiffness	100	- Cuánto "tira" el resorte. Más alto = más rápido.
 *    damping	10	- Cuánto se amortigua el movimiento. Más alto = menos rebote.
 *    mass	1	- Peso del objeto. Más alto = más lento, más inercia.
 *    velocity	0	- Velocidad inicial. Normalmente no lo cambias
 */