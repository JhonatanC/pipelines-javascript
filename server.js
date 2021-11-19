'use strict';

const express = require('express');

// Constants
const PORT = 8088;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Cambiando el puesto para que no choque con otros en uso');
});

var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
