var SpotifyWebApi = require("spotify-web-api-node");
var express = require("express");

// INSTRUCTIONS:
// You'll get something like a app.js or server.js file in your app root which contains the server side code.
// You'll need to expose some (e.g. /callSpotifyAPI) and put the usage of the API in this place.
// From your frontend you will need to call this endpoint then (e.g. via an AJAX call).

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 3100;

app.listen(port, () => {
  console.log("Listening on port " + port);
});

var spotifyApi = new SpotifyWebApi({
  clientId: "5fc39d2ee8144af88b66c4da4cf6a6a0",
  clientSecret: "9607248944554a3a8e48cdd6fa4aec2a"
});

app.get("/search", (req, res, next) => {
  // underscores in queries replaced with spaces
  let artist = req.query.artist.replace(/_/g, " ");
  let track = req.query.track.replace(/_/g, " ");

  // get an access token and use it to get data back from Spotify API
  spotifyApi
    .clientCredentialsGrant()
    .then(
      function(data) {
        console.log("The access token expires in " + data.body["expires_in"]);
        console.log("The access token is " + data.body["access_token"]);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body["access_token"]);
      },

      function(err) {
        console.log(
          "Something went wrong when retrieving an access token",
          err.message
        );
      }
    )
    .then(function() {
      spotifyApi.searchTracks(`track:${track} artist:${artist}`).then(
        function(data) {
          console.log(
            `Search tracks with "${track}" in the track name and "${artist}" in the artist name`,
            data.body
          );
          res.json(data.body);
        },
        function(err) {
          console.log("Something went wrong!", err);
        }
      );
    });
});

module.exports = app;
