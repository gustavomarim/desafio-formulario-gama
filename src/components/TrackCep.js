import React from 'react';

// inicializar server = nodemon server.js

function TrackCep({ events }) {
    if (!events || events.length === 0) return null
    return (
        <>
            <p>CEP encontrado!</p>
        </>
    );
};

export default TrackCep;