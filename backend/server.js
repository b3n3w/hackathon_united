
const express = require('express')
var routes = require('./routes/router');
const app = express()
const session = require('express-session');

const redis = require('redis');
let RedisStore = require('connect-redis')(session);
const client = redis.createClient(process.env.REDIS_URL);

redisClient.on('error', (err) => {
    console.log('Redis error: ', err);
  });

//Set initial visits
client.set('visits', 0);

const port = 9000
const InitiateMongoServer = require("./db");

/// Initiate Mongo DB Server Connection
InitiateMongoServer() // Initiate Mongo DB Server Connection



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
//app.set('port', process.env.PORT || 9000);

app.use(session({
    secret: 'PzUa5Jv7o', cookie: {
        httpOnly: true,
        secure: true,
        sameSite: true,
        maxAge: 600000 // Time is in miliseconds
    },
    store: new RedisStore({ host: 'localhost', port: 6379, client: redis }),
    resave: false,
    saveUninitialized : false,
}));
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
