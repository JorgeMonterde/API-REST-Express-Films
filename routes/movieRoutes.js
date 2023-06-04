const express = require('express')
const movieRouter = express.Router();
const checkApiKey = require('../middlewares/auth_api_key')
const movieController = require ('../controllers/movieControllers.js')

//https://www.omdbapi.com/?apikey=1234abcd&t=Kill+Bill

movieRouter.post('/', checkApiKey, movieController.createMovie)
// READ - leer un libro
movieRouter.get('/:title', movieController.getMovie)
movieRouter.get('/search/:title', movieController.searchMovie)
// UPDATE - actualizar un libro
movieRouter.put('/:title?', checkApiKey, movieController.editMovie)
// DELETE - Borrar un libro
movieRouter.delete('/:title', checkApiKey, movieController.deleteMovie)

module.exports = movieRouter;
