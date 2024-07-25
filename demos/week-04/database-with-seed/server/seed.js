import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// create the books table
db.query(`
CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title TEXT,
    author TEXT,
    year INT
);
  
INSERT INTO books (title, author, year) VALUES
('The Hobbit', 'J. R. R. Tolkien', 1937),
('Human Design', 'Jenna Zoe', 2023),
('Shibumi', 'Trevanian',1979),
('Brisingr', 'Christopher Paolini', 2008),
('The Divine comedy', 'Dante Alighieri', 1321),
('The Great Influenza', 'John M. Barry', 2004),
('Batman #426–429', 'Jim Starlin', 1988),
('The City in the Middle of the Night', 'Charlie Jane Anders', 2019);`);
