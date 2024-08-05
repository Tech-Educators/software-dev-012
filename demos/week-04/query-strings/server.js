import express from "express";

const app = express();

const movies = [
  { title: "Dune", year: "2021" },
  { title: "Lord of the Rings", year: "2001" },
  { title: "The Rescue", year: "2021" },
];

app.get("/", function (request, response) {
  response.send("BOOP.");
});

app.get("/example", function (request, response) {
  console.log(request.query);
  // .filter() loops through the array and makes a new array that matches the condition
  const filteredMovies = movies.filter(function (movie) {
    return movie.year === request.query.year;
  });

  response.json(filteredMovies);
});

app.listen(8080, function () {
  console.log("App is running on port 8080. BOOP.");
});

// if we put
// ?name=Jez&hair=false&handsome=true
// at the end of the url
// the request.,query object will be
// { name: 'Jez', hair: 'false', handsome: 'true' }
