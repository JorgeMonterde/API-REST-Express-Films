require("dotenv").config();
//http://localhost:3000/products?API_KEY="1234abcd"
const correctAPIKey = process.env.API_KEY;

async function getMovieFromAPI(title){
    //let titleQuery = title.split(""). ...Function to change title format
    try {
        console.log(correctAPIKey);
        let response = await fetch(`https://www.omdbapi.com/?apikey=${correctAPIKey}&t=${title}`);
        let filmInfo = await response.json();
        return filmInfo;
    } catch (error) {
        console.log(`Ha habido un error: ${error}`);
    }
}

async function searchMovieFromAPI(title){
    //let titleQuery = title.split(""). ...Function to change title format
    try {
        let response = await fetch(`https://www.omdbapi.com/?apikey=${correctAPIKey}&s=${title}`);
        let filmInfo = await response.json();
        return filmInfo;
    } catch (error) {
        console.log(`Ha habido un error: ${error}`);
    }
}

module.exports = {
    getMovieFromAPI,
    searchMovieFromAPI
}