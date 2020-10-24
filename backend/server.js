
const express = require('express')
var routes = require('./routes/router');
const app = express()
const port = 9000
const InitiateMongoServer = require("./db");
/// Initiate Mongo DB Server Connection
InitiateMongoServer() // Initiate Mongo DB Server Connection



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//app.set('port', process.env.PORT || 9000);

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
