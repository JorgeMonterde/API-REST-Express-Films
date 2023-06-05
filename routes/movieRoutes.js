const express = require('express')
const movieRouter = express.Router();
const checkApiKey = require('../middlewares/auth_api_key')
const movieController = require ('../controllers/movieControllers.js')


// POST: http://localhost:3000/api/film/
movieRouter.post('/', checkApiKey, movieController.createMovie)
// GET (film): http://localhost:3000/api/film/Kill+Bill
movieRouter.get('/:title', movieController.getMovie)
// GET (search): http://localhost:3000/api/film/Kill+Bill
movieRouter.get('/search/:title', movieController.searchMovie)
// PUT: http://localhost:3000/api/film/Kill+Bill
movieRouter.put('/:title', checkApiKey, movieController.editMovie) // "?"aqui params opcional
// DELETE: http://localhost:3000/api/film/Kill+Bill
movieRouter.delete('/:title', checkApiKey, movieController.deleteMovie)

module.exports = movieRouter;
