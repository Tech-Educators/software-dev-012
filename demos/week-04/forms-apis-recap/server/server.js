// 1. import express
import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express()

app.use(cors())
// allows our server to read incoming JSON requests and parse them as a javascript object. 
app.use(express.json())
dotenv.config()

app.get('/', function(request, response) {
    response.json({message: `You're on the root route! Howdy!`})
})

// write a post route for /users that sends back the request information to the client. 

app.post('/users', function(request, response) {
    console.log(request.body)
    response.send('Got that')
})


app.listen(8080, function() {
    console.log(`ᕕ( ᐛ )ᕗ server running on port 8080`)
})