//u23524121 Jamean Groenewald

// const http = require('http');
// const fs = require('fs');

// const PORT = 3000;
// const HOST = 'localhost';

// http.createServer((request, response) =>{
    
//     fs.readFile('index.html', (err, data) => {
        
//         response.writeHead(200, {
//             'Content-Type' : 'text/html', 
//             'Content-Length' : data.length
//         });

//         response.write(data);
//         response.end(); //do I need?
//     });

// }).listen(PORT, HOST, () => {
//     console.log(`Listening on http://${HOST}:${PORT}`);
// });

const express = require('express');
//const io = require('socket.io')(http);
const {Server} = require('socket.io');
const http = require('http');
const pollClass = require('./poll');
//const {v4: uuidv4} = require('uuid'); //for the unique ID for the bonus question //too long
const shortid = require('shortid');

const app = express();

const server = http.createServer(app);

const io = new Server(server);

const PORT = 3000;


// let votes = {
//     pebble: 0,
//     sunshine: 0,
//     miso: 0,
//     panko: 0,
//     snowball: 0,
// };

const startingVotes = [
    {name: 'pebble', votes:0},
    {name: 'sunshine', votes:0},
    {name: 'miso', votes:0},
    {name: 'panko', votes:0},
    {name: 'snowball', votes:0},
];

const poll = new pollClass(startingVotes);

app.use(express.static(__dirname));

app.get('index.js', (req, res) => {

    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(__dirname + '/index.js');
});

// function Vote(vote) //seperate function to be called in socket.on (from)
// {
//     if(votes[vote] !== undefined)
//     {
//         votes[vote]++;
//     }
// }

io.on('connection', (socket) => {

    // const userId = uuidv4();
    const userId = shortid.generate();

    console.log(`A user connected with ID:${userId}`); //${socket.id}

    //console.log('Sending initial votes:', poll.getVotes()); // debugging

    socket.emit('updateVotes', poll.getVotes()); //votes); //send to new client that connected
    
    socket.emit('userId', userId);

    socket.on('vote', (vote) => {
        //console.log('Received vote:', vote); // debugging

        // if(votes[catName])
        // {
        //     votes[catName]++;
    
        //     io.emit('updateVotes', votes); //to send to all clients
        // }

        //Vote(vote);
        poll.vote(vote);

        //console.log('showing updated votes:', poll.getVotes()); // debugging
        io.emit('updateVotes', poll.getVotes()); //votes); //to send to all clients
        
        io.emit('liveFeed', {userId, vote}); //send id and vote to all clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(PORT, () => { // app.listen(PORT, () => {
    console.log(`Listening on http://Localhost:${PORT}`);
});