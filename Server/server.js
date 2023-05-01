var http = require('http');
var fs = require('fs');
var path = require('path');
var publicDir = path.join(__dirname, 'public');
var server = http.createServer((req, res) =>{
    let filePath;
        if (req.url === '/') {
        filePath = path.join(publicDir, 'index.html');
    } else {
        filePath = path.join(publicDir, req.url);
    }
        fs.readFile(filePath, (err, data) =>{
            if(err){
                res.writeHead(404, {'content-type': 'text/html'});
                res.write('404 Not Found');
                res.end();
            } else{
                res.writeHead(200, {'content-type' : 'text/html'});
                res.write(data);
                res.end()
            }
        })

})
server.listen(3000);
console.log('Server listening on port 3000');