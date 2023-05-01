var fs = require('fs');
var http = require('http');
var server = http.createServer(function (req, res){
    if(req.url="/"){

        fs.readFile('contact.html', function (error, data){
            if(data){
                res.writeHead(200, {'Content-type': 'text/html'});
                res.write(data);
                res.end();
            } else {
                res.writeHead(200, {'Content-type': 'text/html'});
                res.write("404 Not Found");
                res.end();
            }
        });
    }
});
server.listen(3000);
console.log("Server is running");