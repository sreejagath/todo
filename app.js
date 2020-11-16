var express = require('express');
var app = express();

app.set("views engine","ejs")
//routes

app.get("/",function(req,res){
    res.render("index.ejs");
});

//manage route error
app.get("*",function(req,res){
    res.send("Invalid Page")
})

//server 

app.listen(3000,function(){
    console.log("Server Connected Successfully");
});