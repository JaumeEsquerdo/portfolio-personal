import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export const FramerMagnetic = ({ children }) => {
    const ref = useRef(null)

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
        const { clientX, clientY } = e;

    }

    return (
        <motion.div ref={ref}>
            {
                children
            }
        </motion.div>
    );
}

