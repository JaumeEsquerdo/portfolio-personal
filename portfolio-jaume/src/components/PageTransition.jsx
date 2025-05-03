import { motion } from 'framer-motion'

const pageVariants = {
    initial: { y: '100vh', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100vh', opacity: 0 }
};

const transition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.8,
}

const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={pageVariants}
            transition={transition}
            style={{ position: 'absolute', height:'100vh', overflow:'hidden' ,width: '100%', top: 0, left: 0, zIndex: 10 }}
        >
            {children}
        </motion.div>
    );
}

export default PageTransition;