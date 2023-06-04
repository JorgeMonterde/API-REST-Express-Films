require("dotenv").config();
//http://localhost:3000/products?API_KEY="1234abcd"
const correctAPIKey = process.env.API_KEY;

const checkApiKey = function (req, res, next) {
    // Comprobar si existe API KEY en BBDD
    // ...
    if (req.query.API_KEY === correctAPIKey) {
        next(); // Pasa a la siguiente tarea
    } else {
        //Mando mensaje de error
        res.status(401).send("Error. API KEY no proveída");
    }
}

module.exports = checkApiKey;
