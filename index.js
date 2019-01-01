const fetch = require("node-fetch");

const cheerio = require("cheerio");


fetch("https://www.fmylife.com/")
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    const cheeryBoi = cheerio.load(text);
    const fmlSubmission = cheeryBoi(".panel-content p a").text();
    console.log(fmlSubmission);
  });
