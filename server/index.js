const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const consola = require('consola');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const { Nuxt, Builder } = require('nuxt');
const socketio = require('socket.io');
const http = require('http');
const MemoryStore = require('memorystore')(session);
const Routes = require('./modules');
const errorHandler = require('./modules/utils/errorHandler');

const app = express();
const server = http.createServer(app);

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    const io = socketio(server);
    // add socketio to request object
    app.use((req, res, next) => {
        req.io = io;
        next();
    });

    // Join socketio rooms. Each user joins a seperate room.
    io.sockets.on('connection', function (socket) {
        socket.on('join', function (data) {
            socket.join(data);
        });
    });

    const { host, port } = nuxt.options.server;

    await nuxt.ready();
    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }

    // Allow Cross Origin Requests
    app.use(cors());

    // add post data to req.body
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    // Use sessions to store tokens of user after authorization
    // Sessions expire in 60 minutes, requiring users to login again.
    app.use(
        session({
            store: new MemoryStore({
                checkPeriod: 43200000, // clear every 12h
            }),
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 3600000 // 60 Minutes in milliseconds
            }
        })
    );

    app.use(cookieParser(process.env.SESSION_SECRET));

    new Routes(app);

    // Give nuxt middleware to express
    app.use(nuxt.render);

    // Error Handler
    app.use(errorHandler);

    // Listen the server
    server.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
}
start();
