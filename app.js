const http = require("http");
const fs = require("fs");

function main(req, res) {
    if (req.url == "/") {
        res.writeHead(200, {"Content-type":"text/html"});
        let s = fs.readFileSync("index.html");
        res.end(s);
    } else if (req.url == "/sluzba") {
        res.writeHead(200, {"Content-type":"application/json"});
        let obj = {};
        obj.datum = "20.2.2020";
        obj.svatek = "Olda";
        res.end(JSON.stringify(obj));
    } else {
        res.end("Ziju...");
    }
}

let srv = http.createServer(main);
srv.listen(8080);
