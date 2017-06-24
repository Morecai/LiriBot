console.log('---this is loaded---');
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
module.exports = new Twitter({

    consumer_key: '8WH3YJnxeGLtArkP5EIq7OZS8',
    consumer_secret: 'Yv1yEF9oXQj52AjD33WgeMbZ7Opz5kTuO63Hz1ArpMshepLkJb',
    access_token_key: '876968373145542656-NcU968Qmxc4SFPszmk0qWnA5BfLDMW6',
    access_token_secret: 'xrSN0I7anNDQAA9mbUQl173i3rGDxrj4pUw1PLPkDfCkP',
})

// module.exports = new Spotify({
//     id: '2495dde7318149058e2fb160f4460a6f',
//     secret: '8ab3116598b74e1690256482f9ee5123'
// });