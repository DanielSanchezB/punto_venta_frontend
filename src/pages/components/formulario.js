import React from "react";

const Form = ({producto, setProducto}) => {

    const handleChange = e => {
        setProducto({
            ...producto, 
            [e.target.name]: e.target.value
        })
    }

    let{nombre, precio, cantidad} = producto

    const handleSubmit = () => {
        precio = parseFloat(precio)
        cantidad = parseInt(cantidad, 10)
        if (nombre === '' || precio <= 0.0 || cantidad <= 0) {
            alert('Todos los campos son obligatorios')
            return
        }

        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(producto)
        }
        fetch('http://localhost:9000/api', requestInit)
        // fetch('http://localhost:3000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setProducto({
            nombre: '',
            precio: 0.0,
            cantidad: 0
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={nombre} name = "nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio</label>
                <input value={precio} name = "precio" onChange={handleChange} type="text" id="precio" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="cantidad" className="form-label">Cantidad</label>
                <input value={cantidad} name = "cantidad" onChange={handleChange} type="text" id="cantidad" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-success">Agregar</button>
        </form>
    );
}

export default Form;