const express = require('express');
const bodyParser = require('body-parser');
const saveToMongo = require('../database/index').save;
const retrieveTop25Repos = require('../database/index').retrieveTop25Repos;
const getReposByUsername = require('../helpers/github').getReposByUsername;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  getReposByUsername(req.body.term, function(error, repos) {
    if (error) { throw error; }
    saveToMongo(JSON.parse(repos));
  });

  res.status(201).send('Server received POST request');
});

app.get('/repos', function (req, res) {
  retrieveTop25Repos(repos => res.json(repos));
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

