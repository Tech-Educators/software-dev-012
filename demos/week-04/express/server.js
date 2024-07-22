// import express from our node_modules
import express from "express";

// instantiate our express app (create an instance of)
const app = express();

// create an endpoint
app.get("/", function (request, response) {
  response.send("You are looking at my root route. How roude!");
});

// create a different endpoint
app.get("/jez", function (request, response) {
  const data = {
    name: "Jez",
    age: "unknown",
    handsome: true,
    bestFriend: true,
    hair: "sort of",
  };

  response.json(data);
});

// use a different HTTP method
app.post("/jez", function (request, response) {
  response.json("This is the POST endpoint for /jez");
});

// start our server
app.listen(8080, function () {
  console.log("App is running on port 8080");
});
