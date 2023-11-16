import React, { useState, useEffect } from 'react';

function AnimatedIndex() {

    const [ciudadanosData, setCiudadanosData] = useState(null);

    useEffect(() => {
        // Realizar la solicitud fetch en el efecto de montaje
        fetch("http://127.0.0.1:8000/api/ciudadanos/")
            .then((response) => response.json())
            .then((data) => setCiudadanosData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div id="scroll-animation">
            {/* Mostrar la información de ciudadanos */}
            {ciudadanosData && (
                <ul>
                    {ciudadanosData.map((ciudadano) => (
                        <li key={ciudadano.id}>
                            {ciudadano.name} {ciudadano.surname}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default AnimatedIndex;