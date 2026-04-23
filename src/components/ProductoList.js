import React from "react";

function ProductoList({ productos }) {

  return (
    <div>
      <h2>Lista de Productos</h2>

      {productos.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        <ul>
          {productos.map((p, i) => (
            <li key={i}>
              {p.nombre} - ${p.precio} | Cantidad: {p.cantidad}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductoList;