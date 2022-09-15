const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const { Server } = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes');
const viewEngine = require('./configs/viewEngine');
const chats = require('./data/data');
const connectDB = require('./configs/connect.db');
const port = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
viewEngine(app);
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});
connectDB();
routes(app);
app.get('/api/chat', (req, res) => {
    return res.json(chats);
});
app.get('/api/chat/:id', (req, res) => {
    console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    return res.json(singleChat);
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(port, () =>
    console.log(`Server listening on http://localhost:${port}`),
);
