# Films API

"Films API" es una applicación que almacena información sobre el mundo del cine, generando fichas extensas conn todos los campos necesarios.

## Utilización

### Gets
El usuario podrá buscar películas desde el endpoint "http://localhost:3000/api/film/", seguido del nombre de la película. El parámetro no es "case sensitive" ("titanic" o "Titanic"). Además, puede obtener distintas opciones al buscar por título desde el endpoint "http://localhost:3000/api/film/search/", seguido de la palabra o palabras por las que quiera buscar ("Kill+Bill"). No se necesitan claves especiales para estas funciones. 

### Post, Put, Delete
También se podrá publicar, editar o borrar entradas de la base de datos, pero se requerirá de una clave (API key).
Para **publicar** una entrada nueva se realiza mediante el endpoint "http://localhost:3000/api/film/?API_KEY=********" sustituyendo los asteriscos por la clave obtenida, y pasando en el "body" la nueva ficha a publicar en formato JSON:

```python
{
    "Title": "Titanic",
    "Year": "1997",
    "Rated": "PG-13",
    "Released": "19 Dec 1997",
    "Runtime": "194 min",
    "Genre": "Drama, Romance",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Leonardo DiCaprio, Kate Winslet, Billy Zane",
    "Plot": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "Language": "English, Swedish, Italian, French",
    "Country": "United States, Mexico",
    "Awards": "Won 11 Oscars. 126 wins & 83 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "88%"
      },
      {
        "Source": "Metacritic",
        "Value": "75/100"
      }
    ],
    "Metascore": "75",
    "imdbRating": "7.9",
    "imdbVotes": "1,215,822",
    "imdbID": "tt0120338",
    "Type": "movie",
    "DVD": "08 Jan 2002",
    "BoxOffice": "$674,292,608",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  }
```

Para **editar** una entrada se realiza mediante el endpoint "http://localhost:3000/api/film/:title?API_KEY=********" sustituyendo los asteriscos por la clave obtenida, y el "title" por el nombre de la película que se quiere editar. En caso de no encontrarse, se devolverá un error 404. Por el "body" se enviará un objeto con los campos que se quieren modificar.

```python
{
  "Title": "MATRIX",
  "Year": "2023",
  "Director": "Manolo Suarez"
}
```

Para **borrar** una entrada se realiza mediante el endpoint "http://localhost:3000/api/film/:title?API_KEY=********" sustituyendo los asteriscos por la clave obtenida, y el "title" por el nombre de la película que se quiere borrar. En caso de no encontrarse, se devolverá un error 404.

## License

[MIT](https://choosealicense.com/licenses/mit/)