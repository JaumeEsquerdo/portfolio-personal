"use client";
import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
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
