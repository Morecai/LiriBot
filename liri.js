var request = require("request");
var fs = require('fs');
var client = require('./keys.js');
var spotify = require('./keys.js');
var nodeArgv = process.argv;
var x = "";
for (var i = 3; i < nodeArgv.length; i++) {
    if (i > 3 && i < nodeArgv.length) {
        x = x + "+" + nodeArgv[i];
    } else {
        x = x + nodeArgv[i];
    }
}

var command = nodeArgv[2];

switch (command) {
    case "my-tweets":
        myTweets()
        break;

    case "movie-this":
        if (x) {
            movieQuery(x)
        } else {
            movieQuery("Mr. Nobody")
        }
        break;

    case "spotify-this-song":
        if (x) {
            spotThis(x)
        } else {
            spotThis("The Sign")
        }
        break;

    case "do-what-it-says":
        doIt()
        break;

    default:
        console.log("Please enter one of the following: my-tweets, movie-this, spotify-this-song, do-what-it says");
        break;
}

function movieQuery(movie) {
    var query = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

    request(query, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("Release Year: " + JSON.parse(body).Year);
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Rating: " + JSON.parse(body).Rated);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Country produced: " + JSON.parse(body).Production);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            // console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings);

        } else {
            console.log("error")
        }
    });
}

function myTweets() {
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
}

function doIt() {
    console.log("Critical Security Warning! Your Mac is infected with a malicious virus attack. \nCritical Security Warning! Your Mac is infected with a malicious virus attack. \nCritical Security Warning! Your Mac is infected with a malicious virus attack. \n \n \n \n Please contact JJ to remove it!");
}