const http=require("http");

const server=http.createServer((req,res)=>{
    res.write("<html>");
    res.write("<h1>Hello Node!!!!</h1>");
    res.write("</html>");
    res.end();
})

server.listen(3000);