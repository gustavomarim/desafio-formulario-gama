import React from 'react';

// inicializar server = nodemon server.js

function TrackCep({ events }) {
    if (!events || events.length === 0) return null
    return (
        <>
            <p><strong>CEP encontrado!</strong></p>
            {/* <ul>
                {events.map(item =>
                    <li key={item.cep}>
                        {item.cep}
                    </li>
                )}
            </ul> */}
        </>
    )
};

export default TrackCep;