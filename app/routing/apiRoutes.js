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
    // Do some looping and calculations to determine the best match
    var bestMatch = function(newUser) {
      // loops and calculations
      // ???
      return friends[indexOfBestMatch]
    };
    // Add the newUser to the "database"
    friends.push(newUser);
    // Send response to client with the best match
    res.json(bestMatch);
  });
};








var bestMatch = function (newUser) {
  // Declare variable that will hold the bestMatch
  var indexOfBestMatch;
  // Declare variable that will hold the current lowest difference
  var diffOfBestMatch = /* a really large placeholder number */;
  
  // Nested for loops
  for (/* loop over the friends array */) {

    // Define variable to store the cumulative difference of newUser and friend
    var total = 0;

    for (/* loop over scores property of each friend */) {

      // Add absolute value of difference to the total
      total += Math.abs(/* newUser score MINUS friend's score */);

    }

    if (/* total is lower than diffOfBestMatch */) {
      /* then the indexOfBestMatch is the index of the current loop */
      /* also set diffOfBestMatch to hold current loop's 'total' value */
    } else {
      /* do nothing, this friend is not the best match */
    }
  }
  return friends[indexOfBestMatch]
};


Add CommentCollapse 