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

Parse.Cloud.define("saveData", function (request, response){

  var PhotoClass = Parse.Object.extend("Photo");
 
  var now = new Date(Date.now());
  for (var d = new Date(2006, 11, 1); d <= new Date(2006, 12, 28); d.setDate(d.getDate() + 1)) {
    var date = new Date(d);
    var formattedDate = date.getFullYear() + "-"+(date.getMonth()+1) + '-' + date.getDate();
    Parse.Cloud.httpRequest({
      url: 'https://api.data.gov/nasa/planetary/apod?api_key=S0KrG0eo7SOInTbINv3hkjwnAlIwlcgZVGI56ABo&date='+formattedDate,
      success: function(httpResponse) {
        if(JSON.parse(httpResponse.text).url != undefined){
          var query = new Parse.Query("Photo");
          query.equalTo("url", JSON.parse(httpResponse.text).url);
          query.find({
            success: function(results) {
              if(results.length === 0){
                var photo = new PhotoClass();
                photo.set("url", JSON.parse(httpResponse.text).url);
                photo.set("description", JSON.parse(httpResponse.text).explanation);
                photo.set("title", JSON.parse(httpResponse.text).title);
                photo.set("date", JSON.parse(httpResponse.text).date);
                photo.set("credit", "APOD");
                photo.save(null, {
                   success: function (photo) {
                       response.success();
                   },
                   error: function (error) {
                       response.error(error);
                   }
                });
              }
            },
            error: function(error) {
              console.log("Error: " + error.code + " " + error.message);
            }
          });

        }
      },
      error: function(httpResponse) {
        console.log('Request failed with response code ' + httpResponse.status);
      }
    });
  
  }
});

