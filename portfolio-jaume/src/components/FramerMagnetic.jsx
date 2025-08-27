
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

/* se busca comparar a que distancia, en píxeles, está el cursor del centro del div, y para moverlo se usa animate = {{x, y}}  */

export const FramerMagnetic = ({ children }) => {
    /* recibe children, es decir, cualquier contenido que metas dentro de este componente. */

    const ref = useRef(null)
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
        /* clientX → posición horizontal del mouse.
        clientY → posición vertical del mouse. */
        const { clientX, clientY } = e;

        const { width, height, left, top } = ref.current.getBoundingClientRect()
        /*getBoundingClientRect() devuelve un objeto con las propiedades del tamaño y posición del elemento en la ventana.
        Mide la posición absoluta del div respecto a la ventana, no a vh o vw, sino a pixeles reales en la pantalla.
        Ejemplo:
        Tu div mide 200px × 100px y está colocado en (left: 100px, top: 50px). */

        const x = clientX - (left + width / 2)
        const y = clientY - (top + height / 2)
        /* Obtiene las dimensiones (width, height) y posición (left, top) del div referenciado.
        Se usa para calcular el centro del elemento
        left + width / 2 → es la coordenada X del centro del div.
        top + height / 2 → es la coordenada Y del centro del div.*/

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
            transition={{ type: 'spring', stiffness: 60, damping: 25, mass: 0.8 }}

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
 * 
 * - ejemplo para tener claro el proceso de movimiento:
 * Supón que el div tiene 200px de ancho y 100px de alto, y está colocado en la pantalla en left: 100px, top: 50px.
 *
 * Su centro está en:
 * x = 100 + 200 / 2 = 200
 * y = 50 + 100 / 2 = 100
 * 
 * Ahora supón que el mouse está aquí:
 *
 * clientX = 220
 *
 * clientY = 110
 *
 * Entonces:
 *
 * x = 220 - 200 = 20
 * y = 110 - 100 = 10
 * El div se desplaza 20px a la derecha y 10px hacia abajo, como si estuviera siguiendo al cursor suavemente.
 * 
*/

/**
 * Se calcula la posición del cursor (clientX, clientY) en píxeles y también la posición del centro del div (usando left + width / 2 y top + height / 2 con getBoundingClientRect).
 * 
 * La diferencia entre ambas posiciones (x, y) representa cuánto se ha movido el mouse respecto al centro del div.
 * 
 * Esta diferencia se aplica en la propiedad animate={{ x, y }} de Framer Motion, haciendo que el div se desplace dinámicamente como si fuera atraído por el cursor.
 * 
 * Para encontrar el centro del div, y poder calcular disstancias del x y del y del mouse respecto el centro del div
 * La esquina del div	left, top
 * El centro del div	left + width / 2, top + height / 2
 *  */ 