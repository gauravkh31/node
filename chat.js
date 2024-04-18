const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

const PORT = 8122


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/chat.html')
})

io.on('connection' , (socket)=>{
    console.log("New USer Connected")

    const interval  =  setInterval(()=>{
        const message = `Server message sent at ${new Date().toLocaleDateString()}` 
        socket.emit(`server message`  , message)
    },5000)


socket.on('chat message', (msg)=>{
    console.log(`chat message` , msg)
    io.emit(`chat message` , msg)
})

socket.on('disconnect' ,()=>{
    console.log('user disconnected')
    clearInterval(internal)
})
})





server.listen(PORT, () => {
    console.log("Server is running at port " + PORT);
})