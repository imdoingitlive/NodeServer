// Requiring dependencies
var http = require('http');
var fs = require('fs');
var url = require('url');

// Set our port to 80
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
  var url_parts = url.parse(req.url);

  switch(url_parts.pathname){
    case "/":
    case "/index":
      fs.readFile("index.html", function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      });
      break;
    case "/favFood":
      fs.readFile("favFood.html", function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      });
      break;
    case "/favMovies":
      fs.readFile("favMovies.html", function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      });
      break;
    case "/cssFrameworks":
      fs.readFile("cssFrameworks.html", function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
      });
      break;
    default:
      display_404(url_parts.pathname, req, res);
  }
};

// Starts our server.
server.listen(PORT, function(){
  console.log("Server is listening on PORT: " + PORT);
});

function display_404(url, req, res){
  res.writeHead(404, {'Content-Type':'text/html'});
  res.write('<h1>Not Found</h1>');
  res.end("The page you were looking for: " + url + " can not be found ");
}