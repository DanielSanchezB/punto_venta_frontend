import React, {Fragment, useState, useEffect} from "react";
// import Navbar from "./components/navbar"
import ListaProductos from "./components/listaproductos"
import Form from "./components/formulario";
import Card from "./components/card";
import Header from "./components/header";

function App() {

  // ********************************************************************************
  // Listar los productos disponibles
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

  // ********************************************************************************
  // Listar los productos de la orden
  const [productosOrden, setProductosOrden] = useState([]) 
  const [listaActualizadaprodOrd, setListaActualizadaProdOrd] = useState(false)

  useEffect(() => {
    const getProductosOrden = () => {
      fetch('http://localhost:9000/resumen/1')
      .then(res => res.json())
      .then(res => setProductosOrden(res))
    }
    getProductosOrden()
    setListaActualizadaProdOrd(false)
  }, [listaActualizadaprodOrd])

  // ********************************************************************************
  // Suma de los productos en la orden
  const [suma, setSuma] = useState([])
  const [sumaActualizada, setSumaActualizada] = useState(false)

  useEffect(() => {
      const getSuma = id => {
        fetch('http://localhost:9000/resumen/suma/' + id)
        .then(res => res.json())
        .then(res => setSuma(res))
      }
      getSuma(1)
      setSumaActualizada(false)
  }, [sumaActualizada])

  console.log(suma)

  return (
    <Fragment>
      {/* <Navbar brand = "Proyecto Arquitectura Orientada a Servicios"></Navbar> */}
      <Header brand = "Proyecto Arquitectura Orientada a Servicios"></Header>
      <div className="container">
        <div className="row">
          <div class="col-sm-7 bg-warning">
            <h2 style={{textAlign: "center"}}>Lista de productos</h2>
            <ListaProductos 
              producto={producto} 
              setProducto={setProducto} 
              productos={productos} 
              setListaActualizada={setListaActualizada} 
              setSumaActualizada={setSumaActualizada}/>
          </div>
          <div class="col-sm-5 bg-info">
            {/* <h2 style={{textAlign: "center"}}>Registro de productos</h2> */}
            {/* Esto es el formulario que ve el administrador */}
            {/* <Form producto = {producto} setProducto = {setProducto}/>  */}
            <Card 
              productosOrden={productosOrden} 
              setListaActualizadaProdOrd={setListaActualizadaProdOrd} 
              suma={suma} 
              setSumaActualizada={setSumaActualizada}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
