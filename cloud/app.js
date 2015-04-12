
// These two lines are required to initialize Express in Cloud Code.
express = require('express');
app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/', function(req, res) {
  res.render('hello', { message: 'Congrats, you just set up your app!' });
});

app.get('/search', function(req, res) {
  res.render('search', { tag: req.query.tag });
});

app.get('/explore', function(req, res) {
	var data;
	Parse.Cloud.run('getAll', req.body, {
	   success: function(result) {
	     data = result;

	     res.render('explore', { data:  data});
	   },
	   error: function(error) {
	   	res.render('explore', { data:  "error"});
	   }
	});
 
});


app.get('/admin', function(req, res) {
	Parse.Cloud.run('saveData', req.body, {
	   success: function(result) {
	     // res.render('admin', { data:  data});
	   },
	   error: function(error) {
	   	// res.render('admin', { data:  "error"});
	   }
	});
 
});

app.get('/story', function(req, res) {
	res.render('story', {}); 
});




// app.post('/explore', function(req, res){
// 	explore.list(req, res);
// });

// // Example reading from the request query string of an HTTP get request.
// app.get('/test', function(req, res) {
//   // GET http://example.parseapp.com/test?message=hello
//   res.send(req.query.message);
// });

// // Example reading from the request body of an HTTP post request.
// app.post('/test', function(req, res) {
//   // POST http://example.parseapp.com/test (with request body "message=hello")
//   res.send(req.body.message);
// });

// Attach the Express app to Cloud Code.
app.listen();
