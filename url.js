var url = require('url');
var http = require('http');

var PORT = 8080;

var server = http.createServer();

server.listen(PORT, function(){
  console.log("I'm working...");
});

function handlRequest(request, response){
  var url_parts = url.parse(request.url);

  switch(url_parts.pathname){
    case "/":
    case "/index":
      display_root(url_parts.pathname, request, response);
      break;
    case "/portfolio":
      display_portfolio(url_parts.pathname, request, response);
      break;
    case "/edit":
      display_edit(url_parts.pathname, request, response);
      break;
    default:
      display_404(url_parts.pathname, request, response);
  }
}

function display_root(url, req, res){
  var myHTML = '<html>';
  myHTML += '<body><h1>Home Page</h1>';
  myHTML += '<a href="/portfolio">Portfolio</a>';
  myHTML += '</body></html>';
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(myHTML);
}

function display_portfolio(url, req, res){
  var myHTML = '<html>';
  myHTML += '<body><h1>My Portfolio</h1>';
  myHTML += '<a href="/index">Go Home</a>';
  myHTML += '</body></html>';
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(myHTML);
}

function display_404(url, req, res){
  res.writeHead(404, {'Content-Type':'text/html'});
  res.write('<h1>Not Found</h1>');
  res.end("The page you were looking for: " + url + " can not be found ");
}