var http = require("http");

http.createServer(function (request, response)
{
    console.log("Requested URL: " + request.url);
    var urlPath = returnLocation(request.url);
    console.log("Located URL: " + urlPath);

    if (urlPath !== null) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(urlPath);
    }
    else
    {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('URL Undefined');
    }

}).listen(80);


function returnLocation(url){

    switch (url)
    {
        case "/":
            return "http://www.apple.com";
            break;
        case "/jediah":
            return "http://darthjedi.logiodice.com";
            break;
        default:
            return null;
            break;


    }
}
console.log("Server running at http://127.0.0.1:80\n");
