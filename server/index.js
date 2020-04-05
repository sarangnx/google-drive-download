const express = require('express');
const consola = require('consola');
const redis = require('redis');
const session = require('express-session');
const connectRedis = require('connect-redis');
const { Nuxt, Builder } = require('nuxt');
const Routes = require('./modules');

const app = express();
const RedisStore = connectRedis(session);
const RedisClient = redis.createClient();

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = process.env.NODE_ENV !== 'production';

async function start() {
    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    const { host, port } = nuxt.options.server;

    await nuxt.ready();
    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        await builder.build();
    }

    app.use(
        session({
            store: new RedisStore({ client: RedisClient }),
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false
        })
    );

    new Routes(app);

    // Give nuxt middleware to express
    app.use(nuxt.render);

    // Listen the server
    app.listen(port, host);
    consola.ready({
        message: `Server listening on http://${host}:${port}`,
        badge: true
    });
}
start();
