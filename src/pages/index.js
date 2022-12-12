import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.svg';

// export default class index extends Component {
export default class index extends Component {
  render() {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <img className="d-block mx-auto mb-4" src={logo} alt="" width="250" height="250"/>
            <h1 className="display-5 fw-bold">Programación Orientada a Servicios</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Punto de Venta</p>
                <p className="lead mb-4">Proyecto final de asignatura Programación Orientada a Servicios, impartida por la docente Jazmin Rodríguez Flores. Realizado por Daniel Sánchez Bautista y Ricardo Ramos Hernández</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <a href="/login" className="btn btn-primary btn-lg px-4 gap-3" role="button" aria-pressed="true">Iniciar sesión</a>
                    <a href="/signup" className="btn btn-outline-secondary btn-lg px-4" role="button" aria-pressed="true">Regístrate</a>
                </div>
            </div>
        </div>
    )
  }
}
