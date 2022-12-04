import React, { Component } from 'react'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('idCliente', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('apellidoPat', {path: "/"});
        cookies.remove('apellidoMat', {path: "/"});
        cookies.remove('correo', {path: "/"});
        cookies.remove('telefono', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('correo')){
            window.location.href="./";
        }
    }
    render() {
        console.log('idCliente: '+ cookies.get('idCliente'));
        console.log('nombre: '+ cookies.get('nombre'));
        console.log('apellido_paterno: '+ cookies.get('apellidoPat'));
        console.log('apellido_materno: '+ cookies.get('apellidoMat'));
        console.log('correo: '+cookies.get('correo'));
        console.log('telefono: '+ cookies.get('telefono'));
        return (
            <div>
            Menú principal
            <br />
            <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </div>
        )
    }
}
