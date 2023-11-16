import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Register() {
    
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        registerName: '',
        registerSurname: '',
        registerDNI: '',
        registerBirthday: '',
        registerAddress: '',
        registerPhone: '',
        registerPw: '',
        registerPwConfirm: ''
    });
    
    //Función que verifica la existencia de un usuario en el modelo
    const userExists = async () => {
        alert("verificando existencia...");
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/ciudadanos/?dni=${formData.dni}`);
            if (response.ok) {
                const users = await response.json();

                //Si existe el usuario, devuelvo true, caso contrario false
                alert(users);
                if (users.length > 0) return true;
                else return false;
            } 
        } catch (e) {
            alert("Error en conectar con el servidor", error);
            return false;
        }
    }

    //Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(previousState => ({
            ...previousState, 
            [id]: value
        }));
    };

    //Función para manejar el envio del formulario
    const handlePost = (e) => {
        e.preventDefault();
        const user =  { formData };
        const jsonString = JSON.stringify(user);
        /*fetch('http://------------:8080/', {  // Enter your IP address here
            method: 'POST', 
            mode: 'cors', 
            body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
        })*/
        if (userExists()) {
            alert ("ya existe el usuario ");
        } else alert("todo bien");
    }

    return (
        <div>
            <Container className="d-flex justify-content-center">
                <div className="register-box container-fluid">
                    <h1 id="registerTitle">Registrarse</h1>
                    <form className="registerForm" onSubmit={ handlePost }>
                        <Row>
                            <Col xs={12} sm={6}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" id="registerName" onChange={handleChange}/>
                                </div>
                            </Col>

                            <Col xs={12} sm={6}>
                                <div className="form-group">
                                    <label>Apellido</label>
                                    <input type="text" className="form-control" id="registerSurname" onChange={handleChange}/>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} sm={6}>
                                <div className="form-group">
                                    <label>DNI</label>
                                    <input type="text" className="form-control" id="registerDNI" pattern="\d{8}" onChange={handleChange}/>
                                </div>
                            </Col>

                            <Col xs={12} sm={6}>
                                <div className="form-group">
                                    <label>Fecha de nacimiento</label>
                                    <input type="date" className="form-control" id="registerBirthday" onChange={handleChange}/>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} sm={6}>
                                <div className="form-group">
                                    <label>Dirección</label>
                                    <input type="text" className="form-control" id="registerAddress" onChange={handleChange}/>
                                </div>
                            </Col>

                            <Col xs={12} sm={6}>
                                <div className="form-group">
                                    <label>Teléfono</label>
                                    <input type="tel" className="form-control" id="registerPhone" pattern="[0-9]+" onChange={handleChange}/>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12} sm={6}>
                                <div className="form-group">
                                    <label>Contraseña</label>
                                    <input type="password" className="form-control" id="registerPw" onChange={handleChange}/>
                                </div>
                            </Col>

                            <Col xs={12} sm={6}>
                                <div className="form-group">
                                    <label>Confirmar contraseña</label>
                                    <input type="password" className="form-control" id="registerPwConfirm" onChange={handleChange}/>
                                </div>
                            </Col>
                        </Row>

                        <button type="submit" className="btn btn-primary">Confirmar</button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Register;