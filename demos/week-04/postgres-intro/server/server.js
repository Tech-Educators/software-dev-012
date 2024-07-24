import express from "express"
import dotenv from "dotenv"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

app.get('/', (req, res) => {
    res.send(`You've reached the route route - please leave a message`)
})

app.listen('8080', () => {
    console.log('Server running ... ON PORT 8080 ლ(`◉◞౪◟◉‵ლ)')
})