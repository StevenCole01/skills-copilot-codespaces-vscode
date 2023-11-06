// Create a web server that's going to send a response of big image (bigger then 3MB) to any client that sends a request to your specified server:port. Use the best way for performance. (Try to solve this in many different ways and inspect the loading time in the browser and send many requests to see the performance differences)

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/png'});
    var readStream = fs.createReadStream(__dirname + '/bigImage.png');
    readStream.pipe(res);
}).listen(3000);
console.log('Server running at http://localhost:3000/');

// Path: comments.js
// Create a web server that's going to send a response of big image (bigger then 3MB) to any client that sends a request to your specified server:port. Use the best way for performance. (Try to solve this in many different ways and inspect the loading time in the browser and send many requests to see the performance differences)

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/png'});
    var readStream = fs.createReadStream(__dirname + '/bigImage.png');
    readStream.pipe(res);
}).listen(3000);
console.log('Server running at http://localhost:3000/');

// Path: comments.js
// Create a web server that's going to send a response of big image (bigger then 3MB) to any client that sends a request to your specified server:port. Use the best way for performance. (Try to solve this in many different ways and inspect the loading time in the browser and send many requests to see the performance differences)

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/png'});
    var readStream = fs.createReadStream(__dirname + '/bigImage.png');
    readStream.pipe(res);
}).listen(3000);
console.log('Server running at http://localhost:3000/');

// Path: comments.js
// Create a web server that's going to send a response of big image (bigger then 3MB) to any client that sends a request to your specified server:port