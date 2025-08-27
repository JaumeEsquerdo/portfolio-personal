import React from "react";

const Proyecto = ({ titulo, descripcion, imagen }) => {
    return (
        <div className="Proyecto-card">
            <img src={imagen} alt={titulo} className="Proyecto-img" />
            <h3 className="Proyecto-titulo">{titulo}</h3>
            <p className="Proyecto-descripcion">{descripcion}</p>
        </div>
    );
};

export default Proyecto;