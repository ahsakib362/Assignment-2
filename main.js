var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url=="/"){
        fs.readFile('home.html',function(error,data){

                res.writeHead(200,{"Content-Type":"text/html"});
                res.write(data);
                res.end();
            
        });
    }
    else if(req.url=="/about"){
        let aboutPage = fs.readFileSync('about.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(aboutPage);
        res.end();
    }
    else if(req.url=="/contact"){
        fs.readFile('contact.html',function(error,data){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
            res.end();
        });
    }
    else if(req.url=="/services"){
        let services = fs.readFileSync('service.html')
        res.write(services);
        res.end();
    }
});

server.listen(8080);
console.log("Server Run Successfully");