import React, {Component} from "react";
// import Cookies from 'universal-cookie';
import logo from '../../assets/logo.svg';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

// const cookies = new Cookies();

// const Header = ({brand}) => {
export default class Header extends Component {

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
    
    // console.log('idCliente: '+ cookies.get('idCliente'));
    // console.log('nombre: '+ cookies.get('nombre'));
    // console.log('apellido_paterno: '+ cookies.get('apellidoPat'));
    // console.log('apellido_materno: '+ cookies.get('apellidoMat'));
    // console.log('correo: '+cookies.get('correo'));
    // console.log('telefono: '+ cookies.get('telefono'));

    render() {
      return ( 
        <div class="container py-3">
          <header>
            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
              <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
               <img className="bi me-2" src={logo} alt="" width="40" height="32" role="img"></img>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg> */}
                {/* <span class="fs-4">Pricing</span> */}
                <span class="fs-4">Proyecto Programación Orientada a Servicios</span>
              </a>
  
              <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <a class="me-3 py-2 text-dark text-decoration-none" href="#">Configuración</a>
                <a class="me-3 py-2 text-dark text-decoration-none" href="/pedidos">Mis pedidos</a>
                {/* <a class="me-3 py-2 text-dark text-decoration-none" href="#">Support</a> */}
                {/* <a class="py-2 text-dark text-decoration-none" href="#">Pricing</a> */}
                <button onClick={()=>this.cerrarSesion()} type="button" class="btn btn-outline-warning">Cerrar sesión</button>
  
              </nav>
            </div>
  
            {/* <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h1 class="display-4 fw-normal">Pricing</h1>
              <p class="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
            </div> */}
          </header>
        </div>
  
        //   <header class="p-3 text-bg-dark">
        //   <div class="container">
        //     <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        //       <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        //           <img className="bi me-2" src={logo} alt="" width="40" height="32" role="img"></img>
        //         {/* <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg> */}
        //       </a>
        //       <a href="#!" className="navbar-brand">{brand}</a>
      
        //       <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-right mb-md-0">
        //       <li class="nav-item">
        //         <a class="nav-link px-2 text-white" href="#">Mis pedidos</a>
        //       </li>
        //         {/* <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
        //         <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
        //         <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
        //         <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
        //         <li><a href="#" class="nav-link px-2 text-white">About</a></li> */}
        //       </ul>
        //       <a class="me-3 py-2 text-dark text-decoration-none" href="#">Features</a>
  
      
        //       {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        //         <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        //       </form> */}
      
        //       <div class="text-end">
        //         {/* <button type="button" class="btn btn-outline-light me-2">Login</button> */}
        //         <button type="button" class="btn btn-warning">Cerrar sesión</button>
        //       </div>
        //     </div>
  
        //     {/* <div class="d-flex flex-row-reverse">
        //       <div class="p-2">Flex item 1</div>
        //     </div> */}
        //   </div>
        // </header>
        
      );
    }
}

// export default Header;