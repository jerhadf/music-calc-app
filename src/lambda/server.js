export function handler(event, context, callback) {
  let response_data = null; 
  var SpotifyWebApi = require("spotify-web-api-node");

  // create instance of spotify API
  var spotifyApi = new SpotifyWebApi({
    clientId: "5fc39d2ee8144af88b66c4da4cf6a6a0",
    clientSecret: "9607248944554a3a8e48cdd6fa4aec2a"
  });

  // underscores in queries replaced with spaces
  // let artist = req.query.artist.replace(/_/g, " ");
  // let track = req.query.track.replace(/_/g, " ");
  let artist = "Kendrick Lamar"; 
  let track = "DNA."

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
          response_data = data.body;
        },
        function(err) {
          console.log("Something went wrong!", err);
        }
      );
    });
  callback(null, {
    statusCode: 200,  
    body: JSON.stringify({msg: response_data.body})
  })
}