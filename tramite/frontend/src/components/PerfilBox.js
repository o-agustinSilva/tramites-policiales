import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';



export function PerfilBox() {
    return (

    <div>
      <Container className="d-flex justify-content-center">
         <div className="contenedorBox container-fluid">
            <Row className="filaBox">
              <Col  xs={4} sm={2}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FAFAFA" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                     </svg>

              </Col>
            
              <Col xs={6} sm={6}>
                  <h1 id="tramiteTitle">  Editar Perfil</h1>
              </Col>
        
              <Col xs={2} sm={4}>
                 <div className="d-grid gap-2 col-6 mx-auto">
                  <button type="button" className="btn btn-primary  ">Editar</button>
                 </div>
              </Col>
           </Row>

           <Row className="filaBox">
               <Col  xs={4} sm={2}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FAFAFA" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                     </svg>
              </Col >
            
              <Col xs={6} sm={6}>
                  <h1 id="tramiteTitle"> Cambiar Contraseña</h1>
              </Col>
        
              <Col xs={2} sm={4}>
              <div className="d-grid gap-2 col-6 mx-auto">
                  <button type="button" className="btn btn-primary  ">Editar</button>
                 </div>
              </Col>
           </Row>

           <Row className="filaBox">
               <Col  xs={4} sm={2}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FAFAFA" className="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                     <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"/>
                     <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                     </svg>
               </Col>
            
              <Col xs={6} sm={6}>
                  <h1 id="tramiteTitle">Nuevo Tramite</h1>
              </Col>
        
              <Col xs={2} sm={4}>
              <div className="d-grid gap-2 col-6 mx-auto">
              <Link to="/tramite">
                       <button type="button" className="btn btn-primary btn-tramite">Tramite</button> 
                  </Link>
               
              </div>
              </Col>
           </Row>

           <Row className="filaBox">
              <Col  xs={4} sm={2}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FAFAFA" className="bi bi-file-text-fill" viewBox="0 0 16 16">
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"/>
                        </svg>

              </Col>
            
              <Col xs={6} sm={6}>
                  <h1 id="tramiteTitle">Mis Tramites</h1>
              </Col>
        
              <Col xs={2} sm={4}>
              <div className="d-grid gap-2 col-6 mx-auto">
                  <button type="button" className="btn btn-primary">Ir</button>
                 </div>
              </Col>
           </Row>

           <Row className="filaBox">
                <Col  xs={4} sm={2}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FAFAFA" className="bi bi-x-octagon-fill" viewBox="0 0 16 16">
                     <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                  </svg>
               
              </Col>
            
              <Col xs={6} sm={6}>
                  <h1 id="tramiteTitle">Cerrar Sesión</h1>
              </Col>
        
              <Col xs={2} sm={4}>
                 <div className="d-grid gap-2 col-10 mx-auto">
                 <Link to="/login">
                       <button type="button" className="btn btn-primary btn-cerrarSesion">Cerrar Sesión</button> 
                  </Link>
                  
                 </div>
              </Col>
           </Row>


         </div>
        </Container>    
     </div>
              
        
    )
}

export default PerfilBox;