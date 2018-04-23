var friends = require('../data/friends.js')
module.exports = function(app) {

// Basic route that sends the user first to the AJAX Page
// =============================================================

  //A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

 //A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

  app.post('/api/friends', function(req, res) {
    // Get the new user data out of the request body
    var newUser = req.body;
    var userScores = [friends.scores];
    
    
    var bestMatch = function(newUser) {
    	
	  
	var indexOfBestMatch;  
	var diffOfBestMatch = Infinity;
	  
	  // Nested for loops
	  for (var i = 0; i < newUser.length; i++) {

	   
	    var total = 0;

	    for (var x = 0; x < userScores.length; x++ ) {
	    	var diff = Math.abs(newUserScores[x] - userScores[i][x]);
	      
	      total += diff;
	    }

	    if (total < diffOfBestMatch) {
	    	
	    	bestMatch = userScores[i];
	    	indexOfBestMatch = total;
	    } 
	  }
	  
      return friends[indexOfBestMatch]
    };
    // Add the newUser to the "database"
    friends.push(newUser);
    // Send response to client with the best match
    res.json(bestMatch);
  });
};











 