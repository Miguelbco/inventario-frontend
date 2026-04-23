// Importación de React y hooks
import React, { useState } from "react";

// Importación de componentes
import ProductoForm from "./components/ProductoForm";
import ProductoList from "./components/ProductoList";

function App() {

  // Estado que almacena los productos
  const [productos, setProductos] = useState([]);

  // Función para agregar productos al estado
  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Inventario de Bebidas</h1>

      {/* Componente formulario */}
      <ProductoForm agregarProducto={agregarProducto} />

      {/* Componente lista */}
      <ProductoList productos={productos} />
    </div>
  );
}

export default App;