const http = require('http');
const router = require('./routerr');
const server = http.createServer(router);
const port = process.env.PORT || 5000;
// The process object is a global that provides information about, and control over, the current Node.js process. 
// As a global, it is always available to Node.js applications without using require().
// The process.env property returns an object containing the user environment
server.listen(port, () => {
    console.log(`server running on localhost:${port}`);
});