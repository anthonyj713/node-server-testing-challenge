const express = require('express');

const teamsRouter = require('../teams/teams-router.js');

const server = express();

server.use(express.json());

server.use('/api/teams', teamsRouter);

module.exports = server;