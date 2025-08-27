import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/header.css";

const Header = () => {
    const [open, setOpen] = useState(false);


    return (
        <header className="Header">
            <h1 className="Header-h1">Portfolio Jaume Esquerdo Ramis</h1>
            {/* Botón Hamburguesa */}
            <button
                className="Hamburguesa"
                onClick={() => setOpen(!open)}
                aria-label="Abrir menú"
            /* aria label es una descripcion alternativa por accesibilidad */
            >
                <motion.span
                    animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    className="line"
                />
                <motion.span
                    animate={open ? { opacity: 0 } : { opacity: 1 }}
                    className="line"
                />
                <motion.span
                    animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    className="line"
                />
            </button>

            {/* Menú desplegable */}
            <motion.nav
                className="Menu"
                initial={{ x: "100%" }}
                animate={{ x: open ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 45 }}
            /* stiffness es la rigidez de la transicion */
            >
                <ul className="Menu-ul">
                    <li className="Menu-li">
                        <NavLink to="/" className={({ isActive }) => `Menu-navlink ${isActive ? "Active" : ""}`}>
                            Home
                        </NavLink>
                    </li>
                    <li className="Menu-li">
                        <NavLink to="/proyectos" className={({ isActive }) => `Menu-navlink ${isActive ? "Active" : ""}`}>
                            Proyectos
                        </NavLink>
                    </li>

                    <li className="Menu-li">
                        <NavLink to="/habilidades" className={({ isActive }) => `Menu-navlink ${isActive ? "Active" : ""}`}>
                            Habilidades / estudios
                        </NavLink>
                    </li>

                    <li className="Menu-li">
                        <NavLink to="/sobre-mi" className={({ isActive }) => `Menu-navlink ${isActive ? "Active" : ""}`}>
                            Sobre mí
                        </NavLink>
                    </li>

                    <li className="Menu-li">
                        <NavLink to="/contacto" className={({ isActive }) => `Menu-navlink ${isActive ? "Active" : ""}`}>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </motion.nav>
        </header>
    );
}

export default Header;