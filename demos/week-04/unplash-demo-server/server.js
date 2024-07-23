import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors()); // tell our server to allow Cross Origin Resource Sharing

const images = [
  "https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2FTimTech.png&w=640&q=75",
  "https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2Fjeztech.png&w=640&q=75",
  "https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2Fheinryanselmtech.jpeg&w=640&q=75",
  "https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2Ffrankietech.jpg&w=640&q=75",
];

app.get("/", function (request, response) {
  response.json("Hello?");
});

app.get("/images", function (request, response) {
  response.json(images);
});

app.listen(8080, function () {
  console.log("Listening to port 8080");
});
