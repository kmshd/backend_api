const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));
app.use('/api/nueva_cita', require('./routes/nuevaCita'));
app.use('/api/promociones', require('./routes/promos'));
app.use('/api/buzon-sugerencias', require('./routes/buzonq'));
app.use('/api/service_add', require('./routes/services.js'));
app.use('/api/boletos', require('./routes/boletos'));

module.exports = app;