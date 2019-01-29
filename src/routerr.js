const handler = require('./handler');
const router = (request, response) => {
    const endpoint = request.url;
    if (endpoint === '/') {
       handler.handlehomePage(request, response);
    } else {
        handler.handleNotFond(request, response);
    }
}
module.exports=router;
