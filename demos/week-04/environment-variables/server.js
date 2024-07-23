import express from "express";
const app = express();

import dotenv from "dotenv"; // import the dotenv packacke
dotenv.config(); // run a function that "sets up" the environment variables
const superSecretThing = process.env.SUPER_SECRET_KEY; // get the variable value from .env

app.get("/", function (request, response) {
  console.log(superSecretThing);
  response.json("You are looking at my root route. How roude!");
});

app.listen(8080, function () {
  console.log("App is listening to port 8080");
});
