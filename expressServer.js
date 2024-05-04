const express = require('express');
const path = require('path');
const app = express();

app.get('/',function(req,res){
    res.send("Hi from Express")
})

app.get('/html',function(req,res){
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(3000)   