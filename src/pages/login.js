import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseURL = "http://localhost:9000/api/clientes";
const cookies = new Cookies();

export default class Login extends Component {
    // Estado inicial
    state={
        form:{
            correo: '',
            psw: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseURL, {params: {correo: this.state.form.correo, psw: md5(this.state.form.psw)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('idCliente', respuesta.idCliente, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('apellidoPat', respuesta.apellidoPat, {path: "/"});
                cookies.set('apellidoMat', respuesta.apellidoMat, {path: "/"});
                cookies.set('telefono', respuesta.telefono, {path: "/"});
                cookies.set('correo', respuesta.correo, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellidoPat}`);
                window.location.href="./menu";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }

    componentDidMount() {
        if(cookies.get('correo')){
            window.location.href="./menu";
        }
    }

    render() {
        return (
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Correo: </label>
                        <br />
                            <input 
                                type="email" 
                                className="form-control" 
                                name="correo" 
                                onChange={this.handleChange}/>
                        <br />
                            <label>Contraseña: </label>
                        <br />
                            <input 
                                type="password" 
                                className="form-control" 
                                name="psw" 
                                onChange={this.handleChange}/>
                        <br />
                        <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        );
    }
}
