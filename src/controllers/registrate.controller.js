import React, {Fragment, useState, useEffect, } from "react";
import Signup from "../pages/signup";


function Registrate() {
// function registrate(req, res) {
    // ********************************************************************************
    // Agregar un nuevo usuario
    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: '',
        apellidoPat: '',
        apellidoMat: '',
        telefono: 0,
        correo: '',
        psw: '',
    })
    // const [listaUsuariosActualizada, setListaUsuariosActualizada] = useState(false)
    
    // useEffect(() => {
    //     const getNuevoUsuario = () => {
    //     fetch('http://localhost:9000/api')
    //     .then(res => res.json())
    //     .then(res => setNuevoUsuario(res))
    //     }
    //     getNuevoUsuario()
    //     setListaUsuariosActualizada(false)
    // }, [listaUsuariosActualizada])


    // const handleAgregarUsuario = () => {
    //     const requestInit = {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(nuevoUsuario)
    //         // body: JSON.stringify(producto_orden)
    //     }
    //     fetch('http://localhost:9000/resumen/', requestInit)
    //     .then(res => res.text())
    //     .then(res => console.log(res))

    //     // setSumaActualizada(true)

    //     // window.location.reload()
    // }

    return (
        <Fragment>
          <Signup nuevoUsuario={nuevoUsuario} setNuevoUsuario={setNuevoUsuario}></Signup>
        </Fragment>
    );
}

export default Registrate;