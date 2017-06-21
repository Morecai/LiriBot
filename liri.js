var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var movieName = process.argv[2];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
console.log(queryUrl);
request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log("Release Year: " + JSON.parse(body).Year);
    }
});
var params = {
    screen_name: 'nodejs'
};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});

// var spotify = new Spotify({
//     id: < your spotify client id >,
//     secret: < your spotify client secret >
// });

// spotify
//     .search({type: 'track', query: 'All the Small Things'})
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (err) {
//         console.log(error);
//     });