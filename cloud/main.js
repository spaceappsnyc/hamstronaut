require('cloud/app.js');
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello!");
});

Parse.Cloud.define("getAll", function(request, response) {
  var query = new Parse.Query("Photo");
  query.descending("date");
  query.find({
    success: function(results) {
      response.success(results);
    },
    error: function() {
      response.error("getAll failed");
    }
  });
});