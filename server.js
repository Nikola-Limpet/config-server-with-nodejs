const http = require('http');
const fileSystem = require('fs');
const PORT = 3000;

// create a server object
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' }); // set the content type of the response
  fileSystem.createReadStream('index.html').pipe(res); // pipe the index.html file to the response

});

server.listen(PORT);
console.log(`Server running at http://localhost:${PORT}`);