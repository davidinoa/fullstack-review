const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  owner: String,
  url: {
    type: String,
    required: true
  },
  description: String,
  stars: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  return new Promise((resolve, reject) => {
    repos.forEach(repo => {
      new Repo({
        id: repo.id,
        name: repo.name,
        owner: repo.owner.login,
        url: repo.html_url,
        description: repo.description,
        stars: repo.stargazers_count
      })
        .save(function(err) {
          if (err) { reject(console.log('Error while creating document')); }
          console.log('Document created');
        });
    });
    resolve();  
  });
};

let retrieveTop25Repos = (callback) => {
  return Repo.find().sort({stars: -1}).limit(25)
    .exec((err, repos) => {
      if (err) { throw err; }
      callback(repos);
      console.log('Top 25 repos retrieved');
    });
};

module.exports.save = save;
module.exports.retrieveTop25Repos = retrieveTop25Repos;