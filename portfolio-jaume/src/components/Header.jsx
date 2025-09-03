import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/header.css";

const Header = () => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null); // referencia al botón hamburguesa -> evita que al hacer clic en él se dispare el "clic fuera" y se cierre el menú



    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) && // clic fuera del menú
                buttonRef.current &&
                !buttonRef.current.contains(e.target) //click fuera del button (para no romper la logica de este boton)
            ) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <header className="Header">
            <h1 className="Header-h1">Portfolio  <span className="Header-name">Jaume Esquerdo Ramis</span></h1>
            {/* Botón Hamburguesa */}
            <button
                ref={buttonRef}
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
                ref={menuRef}
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