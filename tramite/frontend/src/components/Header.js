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
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/tramite">Trámite</Link></li>
                    <li><Link to="/">Mis trámites</Link></li>
                    <li><Link to="/">Ayuda</Link></li>
                </ul>
            </nav>
            <Link to="/login" style={{ textDecoration: 'none' }}>
                <button className="loginButton">Iniciar sesión</button>
            </Link>
        </header>
    )
}

export default Header;