let fetchFromAPI = require("../utils/fetch-functions.js");
//https://www.omdbapi.com/?apikey=1234abcd&t=Kill+Bill
//En una ruta, "?" sirve para empezar a poner parámetro de consulta (queries -> req.query.ABCDE)

// POSTs:
const createMovie = (req, res) => {
    console.log("*******DATOS ENVIADOS*******");
    console.log(req.body);
    const { title } = req.body;
    res.status(201).json({ message: `${title} entry created.` })
}

// GETs:
const getMovie = async (req, res) => {
    try{
        let filmInfo = fetchFromAPI.getMovieFromAPI(req.params.title);
        filmInfo.then(info => {
            res.status(200).send(`<h1>${info.Title}</h1><h2>Directed by ${info.Director} in ${info.Year}</h2>
            <p>Plot: ${info.Plot}</p>`);
        }).catch(error => console.log(`Error: ${error}`));
    } catch (error) {
        res.status(404).json({message: `Route ${req.url} Not found.`});
    }
}
const searchMovie = async (req, res) => {
    try{
        let filmInfo = fetchFromAPI.searchMovieFromAPI(req.params.title);
        filmInfo.then(info => {
            console.log(info.Search)
            console.log(Object.keys(info).length)
            let resultMovies = "";
            for(let i=0; i<info.Search.length; i++){ // Definir función de formato fuera de "searchMovie"
                console.log(resultMovies)
                resultMovies += `<h1>${info.Search[i].Title}</h1><img src="${info.Search[i].Poster}"><h2>Year: ${info.Search[i].Year}</h2>`
            }
            console.log(resultMovies);
            res.status(200).send(resultMovies);
        });
    } catch (error) {
        res.status(404).json({message: `Route ${req.url} Not found.`});
    }
}


const editMovie = (req, res) => {
    try{
        let movieToEdit = req.params.title;
        let filmInfo = fetchFromAPI.getMovieFromAPI(movieToEdit);
        filmInfo.then(movieInfo => {
            if (movieInfo.Response == "False") {
                res.status(404).json(movieInfo);
            } else {
                let movieInfoDeprecated = {...movieInfo};
                let queryKeys = Object.keys(req.body);
                let queryValues = Object.values(req.body);
                queryKeys.forEach((item, index) => {
                    movieInfo[item] = queryValues[index].split("_").join(" ");
                })
                let response = {
                    newInfo: movieInfo,
                    depInfo: movieInfoDeprecated
                };
                res.status(202).json(response);
            }
        }).catch(error => console.log(`Error: ${error}`));
    } catch (error) {
        res.status(404).json({message: `Route ${req.url} Not found.`});
    }
}

const deleteMovie = (req, res) => {
    try{
        let movieToDelete = req.params.title;
        let filmInfo = fetchFromAPI.getMovieFromAPI(movieToDelete);
        filmInfo.then(movieInfo => {
            if (movieInfo.Response == "False") {
                res.status(404).json({message: `Route ${req.url} Not found.`});
            } else {
                let movieFields = Object.entries(movieInfo);
                let response = {message: `You have deleted the ${movieFields[0][1]} entry`};
                res.status(202).send(response);
            }
        }).catch(error => console.log(`Error: ${error}`));
    } catch (error) {
        res.status(404).json({message: `Route ${req.url} Not found.`});
    }
}

module.exports = {
    createMovie,
    getMovie,
    searchMovie,
    deleteMovie,
    editMovie
}
