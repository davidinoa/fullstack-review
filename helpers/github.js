const request = require('request');
const config = require('../config.js').TOKEN || process.env.TOKEN;

let getReposByUsername = (username, callback) => {

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config}`
    }
  };

  request(options, function(error, response, body) {
    if (error) {
      callback(error, null);
    }
    callback(null, body);
  });

};

module.exports.getReposByUsername = getReposByUsername;