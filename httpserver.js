const http = require('http');

const app = http.createServer( function(request,response){
    response.write("from node js server")
    response.end();
})

app.listen(3000,function(){
    console.log("server started on port 3000")
})