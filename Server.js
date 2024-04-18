const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = 8123

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})


app.post('/response', (req,res) => {
   console.log(req.body);
   res.send("HI")
})



app.listen(PORT, () => {
    console.log("Server is running at port " + PORT);
})