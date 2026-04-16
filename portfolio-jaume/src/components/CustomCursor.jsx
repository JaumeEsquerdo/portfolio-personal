"use client";
import AnimatedCursor from "react-animated-cursor";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Cuando el componente se monta (JS funciona), añadimos la clase
    document.body.classList.add("custom-cursor-active");

    return () => {
      // Si el componente se desmonta, devolvemos el cursor normal
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <AnimatedCursor
      innerSize={10} // El puntito del centro
      outerSize={32} // El círculo de afuera
      innerScale={1}
      outerScale={1.8} // Cuánto se agranda al hacer hover
      outerAlpha={0} // Ponemos el fondo del círculo externo transparente...
      outerStyle={{
        border: "2px solid #999", // ...para que solo se vea el borde
        // mixBlendMode: "difference",
      }}
      innerStyle={{
        backgroundColor: "#333",
      }}
      // Aquí se define sobre qué elementos quieres que reaccione el cursor
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}
