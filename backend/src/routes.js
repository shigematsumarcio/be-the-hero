const express = require('express');

const OngControllers = require('./Controllers/OngControllers');
const IncidentsController = require ('./Controllers/IncidentsController');
const ProfileController = require ('./Controllers/ProfileController');
const SessionController = require ('./Controllers/SessionController');

const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs',OngControllers.index);
routes.post('/ongs',OngControllers.create);

routes.get('/profile',ProfileController.index);

routes .get('/incidents',IncidentsController.index);
routes .post('/incidents',IncidentsController.create);
routes.delete('/incidents/:id',IncidentsController.delete);

module.exports = routes;


