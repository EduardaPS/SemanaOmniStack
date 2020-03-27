const express = require('express');

const ongcontroller = require('./controllers/ongcontroller');
const incidentController = require('./controllers/insidentController');
const ProfileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/sessionController');

const connection = require('./database/connections')

const routes = express.Router();

routes.post('/session', sessionController.create);

routes.post('/ongs', ongcontroller.create);
routes.get('/ongs', ongcontroller.index);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

module.exports = routes;