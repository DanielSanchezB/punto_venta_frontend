import React, {Fragment, useState, useEffect} from "react";

const Card = ({productosOrden, setListaActualizadaProdOrd, suma, setSumaActualizada}) => {


    const handleAgregar = id => {
        // precio = parseFloat(precio)
        // cantidad = parseInt(cantidad, 10)
        // if (nombre === '' || precio <= 0.0 || cantidad <= 0) {
        //     alert('Todos los campos son obligatorios')
        //     return
        // }

        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify()
        }
        fetch('http://localhost:9000/resumen', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        // setProducto({
        //     nombre: '',
        //     precio: 0.0,
        //     cantidad: 0
        // })
    }

    const handleDescartar = id => {
        const requestInit = {
            method: 'DELETE',
        }
        fetch('http://localhost:9000/resumen/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListaActualizadaProdOrd(true)
        setSumaActualizada(true)
    }

    return (
        <div class="sticky-top">
            <div class="card">
                {/* <h3 style={{textAlign: "center"}}>Resumen de compra</h3> */}
                <h2 style={{textAlign: "center"}}>Resumen de compra</h2>
                {/* <h1>División flotante</h1> */}
                <div class="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>idProducto</th>
                                <th>Precio</th>
                                {/* <th>Cantidad</th> */}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {productosOrden.map(productosOrden => (
                                <tr key={productosOrden.idProdOrden}>
                                    <td>{productosOrden.idProducto}</td>
                                    <td>{productosOrden.subtotal}</td>
                                    {/* <td>{productosOrden.precio}</td>
                                    <td>{productosOrden.cantidad}</td> */}
                                    <td>
                                        {/* <div className="mb-3"> */}
                                        <div d-grid gap-2 d-md-block>
                                        </div>
                                        {/* <div className="mb-3"> */}
                                        <div class="d-grid gap-2 col-6 mx-auto">
                                            {/* <button onClick={() => handleDescartar(productosOrden.idProdOrden)} className="btn btn-danger">Descartar</button> */}
                                            {/* <button type="submit" onSubmit={() => handleDescartar(productosOrden.idProdOrden)} className="btn btn-danger">Descartar</button> */}
                                            <button onClick={() => handleDescartar(productosOrden.idProdOrden)} className="btn btn-danger">Descartar</button>
                                            {/* <button className="btn btn-danger" onClick={() => handleAgregar(productosOrden.id)}>Descartar</button> */}
                                            {/* <button onClick={() => handleEliminar(productos.id)} className="btn btn-danger">Eliminar</button> */}
                                            {/* <button onClick={() => handleActualizar(productos.id)} className="btn btn-warning">Actualizar</button> */}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Total</th>
                                <th>{suma.map(suma => (<tr key={suma.SUMA}><td>{suma.SUMA}</td></tr>))}</th>
                                {/* <th>Cantidad</th> */}
                                <th>
                                <div d-grid gap-2 d-md-block>
                                        </div>
                                        {/* <div className="mb-3"> */}
                                        <div class="d-grid gap-2 col-6 mx-auto">
                                            <button className="btn btn-success">Ordenar</button>
                                            {/* <button onClick={() => handleEliminar(productos.id)} className="btn btn-danger">Eliminar</button> */}
                                            {/* <button onClick={() => handleActualizar(productos.id)} className="btn btn-warning">Actualizar</button> */}
                                        </div>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Card;