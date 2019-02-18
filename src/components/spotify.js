import SpotifyWebApi from "spotify-web-api-node";

var spotifyApi = new SpotifyWebApi({
  clientId: "5fc39d2ee8144af88b66c4da4cf6a6a0",
  clientSecret: "a0722cde44f844289035b12279e26f41"
});

// Retrieve an access token.
console.log("The client ID is " + spotifyApi.getClientId());
console.log("The client secret is " + spotifyApi.getClientSecret());

spotifyApi.clientCredentialsGrant().then(
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
);

// Get Elvis' albums
// Search tracks whose artist's name contains 'Kendrick Lamar', and track name contains 'Alright'
spotifyApi.searchTracks("track:Alright artist:Kendrick Lamar").then(
  function(data) {
    console.log(
      'Search tracks by "Alright" in the track name and "Kendrick Lamar" in the artist name',
      data.body
    );
  },
  function(err) {
    console.log("Something went wrong!", err);
  }
);