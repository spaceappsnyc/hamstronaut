(function(){
	Parse.initialize("ltmtojcxY7yPhlgEohuenYF7g1QzNkfMYqOPg3xm", "3qpUbTCF3KwI6TxSsGYEnxanm2oYXyy1w2WFur4s");

	var Photo = Parse.Object.extend("Photo");
	var photo = new Photo();
	 
	// photo.set("url", "http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg");
	// photo.set("description", "Taken on February 20, five different exposures made in rapid succession were used to created this tantalizing telephoto image. In combination, they reveal a wide range of brightness visible to the eye on that frigid evening, from the urban glow of the Quebec City skyline to the triple conjunction of Moon, Venus and Mars. Shortly after sunset the young Moon shows off its bright crescent next to brilliant Venus. Fainter Mars is near the top of the frame. Though details in the Moon's sunlit crescent are washed out, features on the dark, shadowed part of the lunar disk are remarkably clear. Still lacking city lights the lunar night is illuminated solely by earthshine, light reflected from the sunlit side of planet Earth.");
	// photo.set("title", "Moon-Venus-Mars Skyline");
	// photo.set("credit", "APOD");
	// photo.set("date", "2015-02-28");
	 
	photo.save(null, {
	  success: function(photo) {
	    // Execute any logic that should take place after the object is saved.
	    alert('New object created with objectId: ' + photo.id);
	  },
	  error: function(photo, error) {
	    // Execute any logic that should take place if the save fails.
	    // error is a Parse.Error with an error code and message.
	    alert('Failed to create new object, with error code: ' + error.message);
	  }
	});

})();