import express from "express";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.send("Whatever.");
});

app.get("/books", async function (request, response) {
  // get the books from the database
  const result = await db.query(`SELECT * FROM books`);
  const books = result.rows; // i only want the actual data from my result
  response.json(books);
});

app.listen(8080, function () {
  console.log("Server started init bruv. Port 8080!");
});
