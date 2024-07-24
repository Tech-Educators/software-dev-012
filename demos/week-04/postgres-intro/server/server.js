import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import pg from "pg"

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

// set up the database so we can query it. 
const db = new pg.Pool({
    connectionString: process.env.DATABASE_CONNECTION
})

app.get('/', (req, res) => {
    res.send(`You've reached the route route - please leave a message`)
})

app.get('/games', async function (request, response) {
    // we can use the 'DB' object to query/talk to mypost database. 
    const result = await db.query(`SELECT * FROM games`)
    const games = result.rows
    response.json(games)
})

app.listen('8080', () => {
    console.log('Server running ... ON PORT 8080 ლ(`◉◞౪◟◉‵ლ)')
})