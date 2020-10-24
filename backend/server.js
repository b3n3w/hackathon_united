
const express = require('express')
const User = require('./model/User.js');
const app = express()
const port = 9000
const InitiateMongoServer = require("./db");
/// Initiate Mongo DB Server Connection
InitiateMongoServer() // Initiate Mongo DB Server Connection

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/api/user/:id', (req, res) => {
    User.findOne({
            '_id': req.params.id
        }).select().exec().then(user => {
            if (!user) {
                res.status(200).json({
                    success: true,
                    message: 'Sorry, no user with this id found.',
                    user: {}
                });
            } else {
                res.status(200).json({
                    success: true,
                    user: user
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: 'Error while fetching the user from the database.'
            });
        });
});


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
