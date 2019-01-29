

const path = require('path');
const fs = require('fs');

const handlehomePage = (request , response)=>{
    const pathFile = path.join(__dirname, '..', 'public', 'index.html');
        fs.readFile(pathFile, (error, file) => {
            if (error) {
                console.log('error');
                response.end('error')
            }
            else {
                response.writeHead(200, { 'content-Type': 'text/html' });
                response.end(file);
            }
        })
}

const handleNotFond = (request , response)=>{
    const pathfile = path.join(__dirname, '..', 'public', 'pages', 'notFound.html');
        fs.readFile(pathfile, (error, file) => {
            if (error) {
                console.log('error');
                response.end('error')

            }
            else {
                response.writeHead(404, { 'content-Type': 'text/html' });
                response.end(file);
            }
        })
}
module.exports= {
    handlehomePage,
    handleNotFond,
}