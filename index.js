const express = require('express');
const app = express();
const socket = require('socket.io');

app.use(express.static("public"))

const server = app.listen(8080, () => {
    console.log(`Server running at 8080`);
});

//connection from server side - listen the server
const io = socket(server)

io.on("connection", (socket) => {
    console.log("made socket connection", socket.id);
})
