import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude.");
});

app.get("/candles", async function (request, response) {
  const data = await db.query(`SELECT * FROM candles`);
  response.json(data.rows);
});

app.post("/candles", async function (request, response) {
  const scent = request.body.scent;
  const colour = request.body.colour;
  const price = request.body.price;

  // add the cnadle to the database
  await db.query(
    `INSERT INTO candles (scent, colour, price) VALUES ($1, $2, $3)`,
    [scent, colour, price]
  );
  response.json("Candles POST endpoint");
});

app.listen(8080, () => console.log("Server is running on port 8080"));
