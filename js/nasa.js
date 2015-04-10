(function(){
	Parse.initialize("ltmtojcxY7yPhlgEohuenYF7g1QzNkfMYqOPg3xm", "3qpUbTCF3KwI6TxSsGYEnxanm2oYXyy1w2WFur4s");

	// var Photo = Parse.Object.extend("Photo");
	// var photo = new Photo();
	 
	// photo.set("url", "http://apod.nasa.gov/apod/image/1501/novadawn_garlick_643.jpg" );
	// photo.set("description", "Will this dawn bring another nova? Such dilemmas might be pondered one day by future humans living on a planet orbiting a cataclysmic variable binary star system. Cataclysmic variables involve gas falling from a large star onto an accretion disk surrounding a massive but compact white dwarf star.  Explosive cataclysmic events such as a dwarf nova can occur when a clump of gas in the interior of the accretion disk heats up past a certain temperature.  At that point, the clump will fall more quickly onto the white dwarf and land with a bright flash. Such dwarf novas will not destroy either star, and may occur irregularly on time scales from a few days to tens of years.  Although a nova is much less energetic than a supernova, if recurrent novas are not violent enough to expel more gas than is falling in, mass will accumulate onto the white dwarf star until it passes its Chandrasekhar limit. At that point, a foreground cave may provide little protection, as the entire white dwarf star will explode in a tremendous supernova.");
	// photo.set("title", "Cataclysmic Dawn");
	// photo.set("credit", "APOD");
	// photo.set("date", "2015-01-11");
	 
	// photo.save(null, {
	//   success: function(photo) {
	//     // Execute any logic that should take place after the object is saved.
	//     alert('New object created with objectId: ' + photo.id);
	//   },
	//   error: function(photo, error) {
	//     // Execute any logic that should take place if the save fails.
	//     // error is a Parse.Error with an error code and message.
	//     alert('Failed to create new object, with error code: ' + error.message);
	//   }
	// });

	var Photo = Parse.Object.extend("Photo");
	var query = new Parse.Query(Photo);
	query.equalTo("date", "2015-01-11");
	query.find({
	  success: function(results) {
	    alert("Successfully retrieved " + results.length + " scores.");
	    // Do something with the returned Parse.Object values
	    for (var i = 0; i < results.length; i++) { 
	      var object = results[i];
	      alert(object.id + ' - ' + object.get('url'));
	    }
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});

})();