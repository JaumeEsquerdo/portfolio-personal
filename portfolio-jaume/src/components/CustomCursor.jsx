import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });

    // Detectar si estamos sobre algo clickable para agrandarlo
    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .link")) setIsHovered(true);
      else setIsHovered(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: isHovered ? "50px" : "30px", // Cambio de tamaño simple
        height: isHovered ? "50px" : "30px",
        border: "2px solid #999",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // ¡Importante! Para que no interfiera con los clicks
        transition: "width 0.2s, height 0.2s", // La animación suave
        zIndex: 9999,
      }}
    />
  );
}
