const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const localPath = process.argv[3];

request(URL, (error, response, body) => {
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.log(err)
    }
  })
});