import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, delay, motion } from "framer-motion";
import "../css/header.css";
import { usePageTransition } from "@/context/TransitionContext";
import { Curve } from "./Curve";

/* 
    El ul controla el estado de animación.
    Al tener initial="initial" y animate="animate", 
    Framer Motion pasa esos estados a los hijos.

    Los motion.li que tengan variants buscarán en su objeto
    variants las claves "initial" y "animate" y aplicarán esas
    animaciones automáticamente.

    Cada hijo puede tener su propio transition (duración, delay, etc.)
    aunque el estado de animación venga del padre.
  */

const Header = () => {
  /* open para abrir aside de navegación */
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null); // referencia al botón hamburguesa -> evita que al hacer clic en él se dispare el "clic fuera" y se cierre el menú

  const { goTo } = usePageTransition();

  const navVariants = {
    initial: { x: "calc(100% + 100px)" },
    enter: {
      x: open ? 0 : "calc(100% + 100px)",
      transition: {
        type: "spring",
        stiffness: 45,
      } /* stiffness es la rigidez de la transicion */,
    },
    exit: {
      x: "calc(100% + 100px)",
      transition: { delay: 0.8, duration: 0.5 }, // espera al curve
    },
  };

  const variantsItem = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    // exit: { x: "100%", opacity: 0, transition: { duration: 1.6 } },
  };

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

  const handleNav = (path) => {
    setOpen(false);
    goTo(path);
  };

  return (
    <header className="Header">
      <h1 className="Header-h1">
        Portfolio <span className="Header-name">Jaume Esquerdo Ramis</span>
      </h1>
      {/* Botón Hamburguesa */}
      <button
        ref={buttonRef}
        className="Hamburguesa"
        onClick={() => setOpen(!open)}
      >
        <motion.span
          animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="line"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          className="line"
        />
      </button>

      {/* Menú desplegable */}
      <AnimatePresence>
        {open && (
          <motion.nav
            ref={menuRef}
            variants={navVariants}
            className="Menu"
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Curve key="curve" />

            <motion.ul
              key="menu-ul"
              className="Menu-ul"
              initial="initial"
              animate="animate"
            >
              <motion.li
                variants={variantsItem}
                className="Menu-li"
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <button
                  onClick={() => handleNav("/")}
                  className={`Menu-navlink `}
                >
                  Home
                </button>
              </motion.li>
              <motion.li
                variants={variantsItem}
                className="Menu-li"
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <NavLink
                  to="/proyectos"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("/proyectos");
                  }}
                  className={({ isActive }) =>
                    `Menu-navlink ${isActive ? "Active" : ""}`
                  }
                >
                  Proyectos
                </NavLink>
              </motion.li>

              <motion.li
                variants={variantsItem}
                className="Menu-li"
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <NavLink
                  to="/habilidades"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("/habilidades");
                  }}
                  className={({ isActive }) =>
                    `Menu-navlink ${isActive ? "Active" : ""}`
                  }
                >
                  Habilidades / estudios
                </NavLink>
              </motion.li>

              <motion.li
                variants={variantsItem}
                className="Menu-li"
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <NavLink
                  to="/sobre-mi"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("/sobre-mi");
                  }}
                  className={({ isActive }) =>
                    `Menu-navlink ${isActive ? "Active" : ""}`
                  }
                >
                  Sobre mí
                </NavLink>
              </motion.li>

              <motion.li
                variants={variantsItem}
                className="Menu-li"
                transition={{ duration: 1.4, ease: "easeInOut" }}
              >
                <NavLink
                  to="/contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav("/contacto");
                  }}
                  className={({ isActive }) =>
                    `Menu-navlink ${isActive ? "Active" : ""}`
                  }
                >
                  Contacto
                </NavLink>
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
