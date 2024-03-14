const http = require("http");
const server = http.createServer((req,res) =>{
 //console.log(req.url);
 if(req.url =="/"){
    res.end('Hello guys are you happy');
 }else if(req.url == "/about"){
    res.end("hello guys are you not happy with ur performance")
 }else{
    res.end("Page does not exist");
 }
    
});

server.listen(8000,"127.0.0.1" , ()=>{
    console.log("listening to the port no 8000")
});