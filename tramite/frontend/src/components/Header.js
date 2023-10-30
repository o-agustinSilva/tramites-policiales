import React, { useState } from 'react';

function Header() {
    return (

        <nav className="nav row">
            <div className="col-md-2">
                <a href="#" id="logo">Policia</a>
            </div>
            
            <div className="col-md-6">
                <ul className="nav-links">
                    <li><a href="#" id="inicio-tab">Inicio</a></li>
                    <li><a href="#" id="peliculas-tab">Peliculas</a></li>
                    <li><a href="#" id="actores-tab">Actores</a></li>
                    <li><a href="#" id="directores-tab">Directores</a></li>    
                </ul>
            </div>

            <div className="col-md-4">
                <a href="#" id="loginButton">Iniciar sesión</a>
            </div>
        </nav>
    )
}

export default Header;