'use strict'
const express = require('express');
const bodyParser = require("body-parser");
const request = require('request');
const cheerio = require('cheerio')

const app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  
app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

//* check emails exestences
app.get('/emailseEestences', (req, res) => {
    check_emails_existences(req, res)
});

//* get html by url
app.post('/getHTML', (req, res) => {
    (async () => {
        request(req.body.url, function (error, response, body) {
            const $ = cheerio.load(body)
            res.send(JSON.stringify($.text()));
        });
    })()
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));