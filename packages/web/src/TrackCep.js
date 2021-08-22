import React from 'react';

// inicializar server = nodemon server.js

function TrackCep({ events }) {
    if (!events || events.length === 0) return null
    return (
        <>
            <h1>CEP encontrado!</h1>
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