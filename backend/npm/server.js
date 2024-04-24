
const pgp = require('pg-promise')();
const winston = require('winston');
const express = require('express');
const bcrypt = require('bcrypt');


const app = express()
const db = pgp('postgres://qiykkuwe:YZMdje9GHyZ-slGkXpFUHx_YvcQluy_8@ziggy.db.elephantsql.com/qiykkuwe');
const bodyParser = require("body-parser") // for parsing application/json
app.use(bodyParser.json())
let saltRounds = 10;


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
});


function clientError(req, message, errorCode) {
    logger.log({
        level: "info",
        endpoint: req.path,
        method: req.method,
        query_parameters: req.query,
        path_parameters: req.params,
        body: req.body,
        ip: req.ip,
        errorCode: errorCode,
        message: message,
        timestamp: new Date(),
    })
}


let clientID = 0;
app.all('/*', (req, res, next) => {
    clientID++;
    logger.log({
        level: "info",
        endpoint: req.path,
        method: req.method,
        query_parameters: req.query,
        path_parameters: req.params,
        body: req.body,
        ip: req.ip,
        // errorCode: 400,
        timestamp: new Date(),
    });
    next();
})


// EXAMPLE BCRYPT FUNCTIONS TO USE FOR PASSWORD HASH AND STORAGE
let password;
let diffPassword;

bcrypt.hash(password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});

// Load hash from your password DB.
bcrypt.compare(password, hash, function(err, result) {
    // result == true
});
bcrypt.compare(diffPassword, hash, function(err, result) {
    // result == false
});


app.get('/event', async (req, res) => {
    let event = await db.any('SELECT * FROM events');
    res.json(event);
})

app.post('/event', async (req, res) => {
    console.log(req.body)
    const {
        name,
        location,
        time,
        date,
        description
    } = req.body
    let newEvent = await db.one('INSERT INTO events(name, location, time, date, description) VALUES($1, $2, $3, $4, $5) RETURNING *', [name, location, time, date, description]);
    res.json(newEvent);
})
