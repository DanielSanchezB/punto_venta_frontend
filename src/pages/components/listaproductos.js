import React from "react";

const ListaProductos = ({producto, setProducto, productos, setListaActualizada}) => {

    let{nombre, precio, cantidad} = producto

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
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
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
                                <button onClick={() => handleEliminar(productos.id)} className="btn btn-danger">Eliminar</button>
                                <button onClick={() => handleActualizar(productos.id)} className="btn btn-warning">Actualizar</button>
                            </div>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    );
}

export default ListaProductos;