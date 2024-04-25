
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
// let password;
// let diffPassword;

// bcrypt.hash(password, saltRounds, function(err, hash) {
//     // Store hash in your password DB.
// });

// // Load hash from your password DB.
// bcrypt.compare(password, hash, function(err, result) {
//     // result == true
// });
// bcrypt.compare(diffPassword, hash, function(err, result) {
//     // result == false
// });


app.get('/event', async (req, res) => {
    let event = await db.any('SELECT * FROM events');
    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted", 400);
        // check if a body was provided in the request
        res.status(400).json({
            error: "Request body is not permitted"
        });
    } else if((Object.keys(req.query).length != 0) && (Object.keys(req.query)[0] != "id" && Object.keys(req.query)[0] != "name" && Object.keys(req.query)[0] != "location")) {
        clientError(req, "Query parameters do not meet requirements", 400);
        // checks if parameters other than id, name, types, etc. are passed
        res.status(400).json({
            error: "Query parameters do not meet requirements"
        });
    } else if(isNaN(req.query.id) && req.query.id != undefined) {
        clientError(req, "Query Parameter is NaN", 400);
        // checks to make sure that the id is a number
        res.status(400).json({
            error: "Query Parameter is NaN"
        });
    } else {
        if(req.query.id == undefined && req.query.name == undefined && req.query.location == undefined) {
            // check if an id was passed or not from the client
            // if not, return all events
            res.json(event)
        } else if(req.query.id !== undefined) {
            // selects data using image parameter
            let id = req.query.id;
            let eventId = await db.query('SELECT * FROM events WHERE id = $1', [id])
            res.json(eventId);
        } else if(req.query.name !== undefined) {
            // selects data using name parameter
            let name = req.query.name;
            let eventName = await db.query('SELECT * FROM events WHERE name = $1', [name])
            res.json(eventName);
        } else if(req.query.location !== undefined) {
            // selects data using location parameter
            let location = req.query.location;
            let eventLocation = await db.query('SELECT * FROM events WHERE location = $1', [location])
            res.json(eventLocation);
        }
        //  else if(req.query.time !== undefined) {
        //     // selects data using time parameter
        //     let time = req.query.time;
        //     let eventTime = await db.query('SELECT * FROM events WHERE time = $1', [time])
        //     res.json(eventTime);
        // } else if(req.query.date !== undefined) {
        //     console.log(typeof(req.query.date));
        //     console.log(new Date());
        //     // selects data using date parameter
        //     let date = req.query.date;
        //     let eventDate = await db.query('SELECT * FROM events WHERE date = $1', [date])
        //     res.json(eventDate);
        // }
    }
})

app.post('/event', async (req, res) => {
    if((!req.body|| typeof(req.body) !== 'object') || (!'name' in req.body || typeof(req.body.name) !== 'string') || (!'location' in req.body || typeof(req.body.location) !== 'string') || (!'time' in req.body || (typeof(req.body.time) !== 'string')) || (!'date' in req.body || typeof(req.body.date) !== 'string') || (!'description' in req.body || (typeof(req.body.description) !== 'string' && typeof(req.body.description) !== 'null'))){
        res.statusCode = 400
        res.json({error: "Invalid body Parameters"})
    } else {
        console.log(req.body)
        const { name, location, time, date, description} = req.body
        let newEvent = await db.one('INSERT INTO events(name, location, time, date, description) VALUES($1, $2, $3, $4, $5) RETURNING *', [name, location, time, date, description]);
        res.json(newEvent);
    }
})


// app.put('/event/:name', async (req, res) => {
//     if((!req.body|| typeof(req.body) !== 'object') || (!'name' in req.body || typeof(req.body.name) !== 'string') || (!'location' in req.body || typeof(req.body.location) !== 'string') || (!'time' in req.body || (typeof(req.body.time) !== 'string')) || (!'date' in req.body || typeof(req.body.date) !== 'string') || (!'description' in req.body || (typeof(req.body.description) !== 'string' && typeof(req.body.description) !== 'null'))){
//         res.statusCode = 400
//         res.json({error: "Invalid body Parameters"})
//     } else {
//         console.log(nameInput);
//         const {name, location, time, date, description} = req.body
//         let event = await db.oneOrNone(`UPDATE events SET name = $1, location = $2, time = $3, date = $4, description = $5 WHERE name = $6 RETURNING *`, [name, location, time, date, description, nameInput]);
//         res.json(event);
//     }
// })


// app.patch('/event/:name', async (req, res) => {
//     if((!req.body|| typeof(req.body) !== 'object') || (!'name' in req.body || typeof(req.body.name) !== 'string') || (!'location' in req.body || typeof(req.body.location) !== 'string') || (!'time' in req.body || (typeof(req.body.time) !== 'string')) || (!'date' in req.body || typeof(req.body.date) !== 'string') || (!'description' in req.body || (typeof(req.body.description) !== 'string' && typeof(req.body.description) !== 'null'))){
//         res.statusCode = 400
//         res.json({error: "Invalid body Parameters"})
//     } else {
//         console.log(nameInput);
//         const {name, location, time, date, description} = req.body
//         let event = await db.oneOrNone(`UPDATE events SET name = $1, location = $2, time = $3, date = $4, description = $5 WHERE name = $6 RETURNING *`, [name, location, time, date, description, nameInput]);
//         res.json(event);
//     }
// })


// app.delete('/event/:name', async (req, res) => {
//     if(Object.keys(req.body).length != 0) {
//         clientError(req, "Request body is not permitted", 400);
//         // check if a body was provided in the request
//         res.status(400).json({
//             error: "Request body is not permitted"
//         });
//     } else {
//         const nameInput = (req.params.name);
//         let eventDelete = await db.query('DELETE FROM events WHERE name = $1 RETURNING *', [nameInput]);
//         res.json(eventDelete);
//     }
// })


app.listen(3000, () => {
    console.log('Server is running on port 3000')
});