const express = require('express');
const bodyParser = require('body-parser');
const saveToMongo = require('../database/index').save;
const retrieveTop25Repos = require('../database/index').retrieveTop25Repos;
const getReposByUsername = require('../helpers/github').getReposByUsername;
var cors = require('cors');
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  getReposByUsername(req.body.term, function(error, repos) {
    if (error) { throw error; }
    saveToMongo(JSON.parse(repos))
      .then(() => res.status(201).send('Server received POST request'));
  });
});

app.get('/repos', function (req, res) {
  retrieveTop25Repos(repos => res.json(repos));
});

app.set('port', (process.env.PORT || 1128));
const port = app.get('port');

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

