import express from "express";
const app = express();

const superSecretThing = "Tim loves Jez";

app.get("/", function (request, response) {
  console.log(superSecretThing);
  response.json("You are looking at my root route. How roude!");
});

app.listen(8080, function () {
  console.log("App is listening to port 8080");
});
