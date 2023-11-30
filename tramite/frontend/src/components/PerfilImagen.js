import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";


export function PerfilImagen() {
    return (
             <div class="containerImg">
                <div class="row text-center align-items-center" >
                     <div class="col-lg-4 col-sm-6" >
                        <div class="perfilImagen" > 
                            <img  
                                src="../../static/imag/LA BESTIA.jpg"
                               alt="Imagen de perfil"
                               />
                            </div>
                    </div> 
                    
                    <div class="col-lg-8 col-sm-6">
                        <div class="nombreImag">
                            <h1 id="nombrePerfil">Miguel Merentiel</h1>
                        </div>
                    </div> 
                </div>
             </div>   
    )
}

export default PerfilImagen;