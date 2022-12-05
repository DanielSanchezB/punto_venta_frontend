import React, {Fragment, useState, useEffect} from "react";
// import Navbar from "./components/navbar"
import ListaProductos from "./components/listaproductos"
import Form from "./components/formulario";
import Header from "./components/header";

function App() {

  const [producto, setProducto] = useState({
    nombre: '',
    precio: 0.0,
    cantidad: 0
  })

  const [productos, setProductos] = useState([])

  const [listaActualizada, setListaActualizada] = useState(false)

  useEffect(() => {
    const getProductos = () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setProductos(res))
    }
    getProductos()
    setListaActualizada(false)
  }, [listaActualizada])

  return (
    <Fragment>
      {/* <Navbar brand = "Proyecto Arquitectura Orientada a Servicios"></Navbar> */}
      <Header brand = "Proyecto Arquitectura Orientada a Servicios"></Header>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: "center"}}>Lista de productos</h2>
            <ListaProductos producto={producto} setProducto={setProducto} productos={productos} setListaActualizada={setListaActualizada}/>
          </div>
          <div className="col-5">
            <h2 style={{textAlign: "center"}}>Registro de productos</h2>
            <Form producto = {producto} setProducto = {setProducto}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
