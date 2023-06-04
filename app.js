const express = require("express");

const authApiKey = require("./middlewares/auth_api_key")

const app = express();
const port = 3000;

// Modules routes:
const movieRouter = require("./routes/movieRoutes.js");

// Middlewares
app.use(express.json());

// Routes
app.use("/api/film/", movieRouter);

app.listen(port, () => {
    console.log(`Nos vamos a por tortilla (si queda) Example app listening on port http://localhost:${port}`)
})
