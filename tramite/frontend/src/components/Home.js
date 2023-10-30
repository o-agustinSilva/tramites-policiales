import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar las credenciales al servidor (por ejemplo, a través de una API).
    // En este ejemplo, se simula un inicio de sesión incorrecto.
    if (username === 'usuario' && password === 'contraseña') {
      // Inicio de sesión exitoso, puedes redirigir al usuario a la página principal.
      // Aquí podrías usar react-router-dom para la navegación.
      console.log('Inicio de sesión exitoso');
    } else {
      setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;