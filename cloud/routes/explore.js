// exports.list = function(req, res){
// 	var GameScore = Parse.Object.extend("GameScore");
// 	var query = new Parse.Query(GameScore);
// 	query.equalTo("playerName", "Dan Stemkoski");
// 	query.find({
// 	  success: function(results) {
// 	    alert("Successfully retrieved " + results.length + " scores.");
// 	    // Do something with the returned Parse.Object values
// 	    for (var i = 0; i < results.length; i++) { 
// 	      var object = results[i];
// 	      alert(object.id + ' - ' + object.get('playerName'));
// 	    }
// 	  },
// 	  error: function(error) {
// 	    alert("Error: " + error.code + " " + error.message);
// 	  }
// 	});
// };