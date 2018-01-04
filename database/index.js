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
        if (err) { console.log('Error while creating document'); }
        console.log('Document created');
      });
  });
};

module.exports.save = save;