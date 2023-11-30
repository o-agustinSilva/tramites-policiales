import React, { Component } from "react";
import Header from "../components/Header";
import PerfiImagen, {PerfilImagen } from "../components/PerfilImagen";
import PerfilBox from "../components/PerfilBox";

export function PerfilPage() {    
    return ( 
        <div>
            <Header/>
            <PerfilImagen/>
            <PerfilBox/>
        </div>
    )
}
