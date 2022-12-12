import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.svg';
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
            console.log(response.data);
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
                window.location.href="./productos";
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
            window.location.href="./productos";
        }
    }

    render() {
        return (
            <div className='bg-gray-200 text-center form-signin w-100 m-auto'>
                <form>
                    <img className="mb-4" src={logo} alt="" width="150" height="150"></img>
                    <h1 className="h3 mb-3 fw-normal">Inicia sesión</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" name="correo" onChange={this.handleChange}/>
                        <label htmlFor="floatingInput">Correo electrónico</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" name="psw" onChange={this.handleChange}/>
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" onClick={()=> this.iniciarSesion()}>Enviar</button>
                    <p className="mt-5 mb-3 text-muted">Universidad Politécnica de Pachuca</p>
                </form>
            </div>
        );
    }
}
