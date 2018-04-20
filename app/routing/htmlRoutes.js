var friends = require('../data/friends.js')


// Basic route that sends the user first to the AJAX Page
// =============================================================

 // A GET Route to `/survey` which should display the survey page.
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});


 //A default, catch-all route that leads to `home.html` which displays the home page. 
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});













