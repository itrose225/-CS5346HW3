const http = require("http");

const host = 'localhost';
const port = 8000;

// Create a request listener
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Howdy, this is Isaac Rose's HW3 Webpage!");
};

// Create a server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});