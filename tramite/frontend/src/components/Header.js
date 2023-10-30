import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Login from "./Login";
import Tramite from "./Tramite";

function Header() {
    return (
        <header>
            <img className="logo" src="#" alt="logo" />
            <nav>
                <ul className="nav-links">
                    <li><a href="#"><Link to="/">Inicio</Link></a></li>
                    <li><a href="#"><Link to="/tramite">Trámite</Link></a></li>
                    <li><a href="#">Mis trámites</a></li>
                    <li><a href="#">Ayuda</a></li>
                </ul>
            </nav>
            <a className="loginButton" href="#"><Link to="/login"><button>Iniciar sesión</button></Link></a>
        </header>
    )
}

export default Header;