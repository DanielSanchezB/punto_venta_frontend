// import React from "react";
// import React, {Fragment, useState, useEffect} from "react";
import React, {useState} from "react";

const ListaProductos = ({producto, setProducto, productos, setListaActualizada, setSumaActualizada}) => {

    let{nombre, precio, cantidad} = producto

    console.log(productos)

    // const producto_orden = useState({
    //     idOrden: 1,
    //     idProducto: productos.idProducto,
    //     cantidad: 1,
    //     subtotal: productos.precio,
    // })

    
    const handleAgregar = (id, precio) => {
        // const producto_orden = {
        //     idOrden: 1,
        //     idProducto: id,
        //     cantidad: 1,
        //     subtotal: precio
        // }
        const producto_orden = {
            idOrden: 1,
            idProducto: id,
            cantidad: 1,
            subtotal: precio
        }
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(producto_orden)
        }
        fetch('http://localhost:9000/resumen/', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setSumaActualizada(true)

        // window.location.reload()
    }

    // ******************************************************************
    // 
    // ******************************************************************

    const handleEliminar = id => {
        const requestInit = {
            method: 'DELETE',
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListaActualizada(true)
    }

    const handleActualizar = id => {
        precio = parseFloat(precio)
        cantidad = parseInt(cantidad, 10)
        if (nombre === '' || precio <= 0.0 || cantidad <= 0) {
            alert('Agrega valores validos')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(producto)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setProducto({
            nombre: '',
            precio: 0.0,
            cantidad: 0
        })

        setListaActualizada(true)
    }

    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {productos.map(productos => (
                    <tr key={productos.id}>
                        <td>{productos.id}</td>
                        <td>{productos.nombre}</td>
                        <td>{productos.precio}</td>
                        <td>{productos.cantidad}</td>
                        <td>
                            {/* <div className="mb-3"> */}
                            <div d-grid gap-2 d-md-block>
                            </div>
                            {/* <div className="mb-3"> */}
                            <div class="d-grid gap-2 col-6 mx-auto">
                            <form onSubmit={() => handleAgregar(productos.id, productos.precio)} class="form-inline my-2 my-lg-0">
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Agregar</button>
                            </form>
                                {/* <button onClick={() => handleAgregar(productos.id, productos.precio)} className="btn btn-success">Agregar</button> */}
                                {/* <button onClick={() => handleEliminar(productos.id)} className="btn btn-danger">Eliminar</button> */}
                                {/* <button onClick={() => handleActualizar(productos.id)} className="btn btn-warning">Actualizar</button> */}
                            </div>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    );
}

export default ListaProductos;