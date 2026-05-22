const express = require('express');
const { Client } = require('pg');

const app = express();

const client = new Client({
    host: 'postgres',
    user: 'admin',
    password: 'admin123',
    database: 'tallerdb',
    port: 5432
});

client.connect()
    .then(() => {
        console.log('Conectado a PostgreSQL');
    })
    .catch(err => {
        console.error('Error de conexión', err);
    });

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API funcionando correctamente',
        base_datos: 'Conectada a PostgreSQL'
    });
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor ejecutándose en puerto 3000');
});
