const express = require('express');
const app = express();
const socket = require('socket.io');

app.use(express.static('public'))

const server = app.listen(8080, () => {
    console.log(`Server running at 8080`);
});

//connection from server side - listen the server
const io = socket(server)

io.on('connection', (socket) => {
    console.log('made socket connection', socket.id)
    // Receives message from the client and sends (emit) it to the client.
    socket.on('message', (data) => {
        io.sockets.emit('message', data)
    });
    // Handles typing event and broadcasts it to all the clients except of sender.
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    })
})