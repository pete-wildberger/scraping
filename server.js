const express = require('express'),
  fs = require('fs'),
  request = require('request'),
  cheerio = require('cheerio'),
  app = express();

app.get('/scrape', function(req, res) {
  //All the web scraping magic will happen here
});

app.listen('8081');

console.log('Magic happens on port 8081');
