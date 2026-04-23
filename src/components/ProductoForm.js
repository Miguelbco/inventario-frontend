import React, { useState } from "react";

function ProductoForm({ agregarProducto }) {

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidad, setCantidad] = useState(""); // NUEVO

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre === "" || precio === "" || cantidad === "") {
            alert("Todos los campos son obligatorios");
            return;
        }

        agregarProducto({ nombre, precio, cantidad });

        setNombre("");
        setPrecio("");
        setCantidad("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            {/* INPUTS */}
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />


            <input
                type="number"
                placeholder="Cantidad"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
            />

            <button type="submit">Guardar</button>
        </form>
    );
}

export default ProductoForm;