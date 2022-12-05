import React from "react";

const Navbar = ({brand}) => {
    return ( 
        <nav className="navbar navbar-dark bg-dark">
        {/* // <nav class="flex py-5 bg-green-500 text-white px-24"> */}
            <div className="container">
                <a href="#!" className="navbar-brand">{brand}</a>
            </div>
        </nav>
    ) ;

}

export default Navbar;