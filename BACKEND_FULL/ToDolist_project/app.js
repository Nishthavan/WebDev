

const express = require("express");
const body = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
const app = express();


var items = ["Playing football","Watching Football"]



app.use(body.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine','ejs');

app.listen(4000,function(){
  console.log("Working BERO!!!");
});

app.get("/",function(req,res){

  let day = date.getDay();

  res.render("list",{todayday:day,newitem:items});

});

app.post("/",function(req,res){
   items.push(req.body.input1);
  res.redirect("/");
})

app.get("/about",function(req,res){
  res.render("about");
})
