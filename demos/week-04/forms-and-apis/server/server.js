import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json()); // this line lets us use the "body" from the request
dotenv.config();

app.get("/", function (request, response) {
  response.json("Woah! You found the secret API!");
});

app.post("/joke", function (request, response) {
  // retrieve the information from the form
  console.log(request.body);
  // here we would add our new joke to the database
  response.json("Thank you for making a new entry");
});

app.listen(8080, function () {
  console.log("Server is running on port 8080");
});
