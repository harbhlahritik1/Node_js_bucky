var connect = require('connect');
var http = require('http');

var app = connect();

/*
function doFirst(request, response, next) {
  console.log("Request received...1");
  next();
}

function doSecond(request, response, next) {
  console.log("Request received...2");
  next();
}

app.use(doFirst);
app.use(doSecond);
*/

function profile(request, response){
  console.log("User requested profile");
}

function forum(request, response){
  console.log("User requested forum");
}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8000);
console.log("Server is running...........");



/*

var http = require('http');
var fs = require('fs');

//404 response
function send404response(response){
  response.writeHead(404, {"Context-Type": "text/plain"});
  response.write("Error 404: Page not found!");
  response.end();
}

//handle a user request
function onRequest(request,response){

  if( request.method == 'GET' && request.url == '/' ){
    response.writeHead(200, {"Context-Type": "text/html"});
    fs.createReadStream("./index.html").pipe(response);
  }else{
    send404response(response);
  }

}

http.createServer(onRequest).listen(8000);
console.log("Server is now running.....");

*/



/*

var http = require('http');

function onRequest(request,response){
  console.log("A user made a request" + request.url);
  response.writeHead(200, {"Context-Type": "text/plain"});
  response.write("Here is some response");
  response.end();
}

http.createServer(onRequest).listen(8000);
console.log("Server is now running.....");

*/
