const express = require("express");
const { Server } = require("socket.io");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require('./routers/authRouter')
const session = require('express-session')
const Redis = require('ioredis')
const RedisStore = require('connect-redis')(session)
require('dotenv').config()
const server = require('http').createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: "true",
    },
});

const redisClient = new Redis();
// Routers

app.use(helmet())
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json())
app.use(session({
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    name: "sid",
    resave: false,
    store: new RedisStore({client: redisClient}),
    saveUninitialized: false,
    cookie: {
        secure: "auto",
        httpOnly: true,
        expires: 1000 * 60 * 60 * 24 * 7,
        sameSite: "lax",
    }
})
)
app.use('/auth', authRouter)


// ------------
io.on("connect", socket => {})

app.listen(4000, () => {
    console.log('server is listening on port 4000')
})