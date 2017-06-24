var request = require("request");
var fs = require('fs');
var client = require('./keys.js');
var spotify = require('./keys.js');
require('dotenv').config();
var movieName = process.argv[2];
var query = "http://www.omdbapi.com/?t=" + (movieName || 'Mr. Nobody') + "&y=&plot=short&apikey=40e9cece";

request(query, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Rating: " + JSON.parse(body).Rated);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Country produced: " + JSON.parse(body).Production);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Actors: " + JSON.parse(body).Actors);
        console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings[2]);

    }
});

var params = {
    screen_name: 'banecart'
};
client.get('statuses/user_timeline', params, function(error, tweet) {
    if (!error) {
        tweet.forEach(function(obj) {
            console.log('Tweet: ' + obj.text + '\n' + obj.created_at);

        });

    } else {
        console.log("error");
    }
});