import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.svg';

// function Signup () {
const Signup = ({nuevoUsuario, setNuevoUsuario}) => {

  // ***************************************************************************
  const handleChange = e => {
    setNuevoUsuario({
        ...nuevoUsuario, 
        [e.target.name]: e.target.value
    })
  }

  let{nombre, apellidoPat, apellidoMat, telefono, correo, psw} = nuevoUsuario

  const handleSubmit = () => {
    // precio = parseFloat(precio)
    // cantidad = parseInt(cantidad, 10)
    if (nombre === '' || apellidoPat === '' || apellidoMat === '' || telefono === '' || correo === '' || psw === '') {
        alert('Todos los campos son obligatorios')
        return
    }

    const requestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(nuevoUsuario)
    }
    fetch('http://localhost:9000/usuarios', requestInit)
    // fetch('http://localhost:3000/api', requestInit)
    .then(res =>{
      if(res.length>0){
        window.location.href="./productos";
      }
      // res.text(),
    })
    .then(res => console.log(res))

    setNuevoUsuario({
        nombre: '',
        apellidoPat: '',
        apellidoMat: '',
        telefono: '',
        correo: '',
        psw: ''
    })
}

  // render() {
    return (
      <div className='bg-gray-200 text-center form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit}>
            <img className="mb-4" src={logo} alt="" width="150" height="150"></img>
            <h1 className="h3 mb-3 fw-normal">Regístrate</h1>
            <div className="form-floating">
                <input value={nombre} type="text" className="form-control" name="nombre" id="nombre" onChange={handleChange}/>
                <label htmlFor="floatingInput">Nombre</label>
            </div>
            <div className="form-floating">
                <input value={apellidoPat} type="text" className="form-control" name="apellidoPat" id="apellidoPat" onChange={handleChange}/>
                <label htmlFor="floatingInput">Apellido paterno</label>
            </div>
            <div className="form-floating">
                <input value={apellidoMat} type="text" className="form-control" name="apellidoMat" id="apellidoMat" onChange={handleChange}/>
                <label htmlFor="floatingInput">Apellido materno</label>
            </div>
            <div className="form-floating">
                <input value={telefono} type="number" className="form-control" name="telefono" id="telefono" onChange={handleChange}/>
                <label htmlFor="floatingInput">Teléfono</label>
            </div>
            <div className="form-floating">
                <input value={correo} type="email" className="form-control" name="correo" id="correo" onChange={handleChange}/>
                <label htmlFor="floatingInput">Correo electrónico</label>
            </div>
            <div className="form-floating">
                <input value={psw} type="password" className="form-control" name="psw" id="psw" onChange={handleChange}/>
                <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary">Enviar</button>
            {/* <button className="w-100 btn btn-lg btn-primary" onClick={()=> this.iniciarSesion()}>Enviar</button> */}
            <p className="mt-5 mb-3 text-muted">Universidad Politécnica de Pachuca</p>
        </form>
    </div>
    )
  }
// }

export default Signup;