var newUserScores = [1,2,3,4,5,1,2,3,4,5];
var userScores = [
  [5,4,3,2,1,1,2,3,4,5],
  [1,2,3,3,1,1,2,3,4,5]
];

var bestMatch;
var lowestDiff = Infinity;


for (var i = 0; i < userScores.length; i++) {
  console.log(`Loop through outer for loop, userScores index of ${i}`);
  
  var total = 0;
  
  for (var j = 0; j < newUserScores.length; j++ ) {
    console.log(`Loop through inner for loop, userScores index of ${j}`);
    
    var diff = Math.abs(newUserScores[j] - userScores[i][j]);
    total += diff;
  }
  
  if (total < lowestDiff) {
    console.log(`userScores found at index ${i} is the current best with a diff of ${total}`);
    bestMatch = userScores[i];
    lowestDiff = total;
  }
}