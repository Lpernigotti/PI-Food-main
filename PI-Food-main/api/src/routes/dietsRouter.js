const { dietsHandler } = require('../handlers/handlerDiets')
const { Router } = require('express');

const dietsRouter = Router();

dietsRouter.get('/', dietsHandler);

module.exports = dietsRouter;