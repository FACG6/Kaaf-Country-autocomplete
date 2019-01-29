const http = require('http');
const router = require('./routerr');
const server = http.createServer(router);
const port = 5000;
server.listen(port, ()=>{
    console.log(`server running on localhost:${port}`);
});