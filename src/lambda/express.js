"use strict";

var express = require("express");
var serverless = require("serverless-http");
var app = express();
var bodyParser = require("body-parser");
var SpotifyWebApi = require("spotify-web-api-node");

var router = express.Router();

router.get("/another", (req, res) => res.json({ route: req.originalUrl }));

router.get("/", (req, res) => {

  // create instance of spotify API
  var spotifyApi = new SpotifyWebApi({
    clientId: "5fc39d2ee8144af88b66c4da4cf6a6a0",
    clientSecret: "9607248944554a3a8e48cdd6fa4aec2a"
  });

  // underscores in queries replaced with spaces
  let artist = req.query.artist.replace(/_/g, " ");
  let track = req.query.track.replace(/_/g, " ");

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

app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);