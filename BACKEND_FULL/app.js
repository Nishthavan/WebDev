//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const posts = [];
const _ = require("lodash");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.listen(4000,function(){
  console.log("Server started at Port 4000");
})

//HOME
app.get("/",function(req,res){
  res.render("home",{homeStartingContent:homeStartingContent,
                     posts: posts});
})

//ABOUT
app.get("/about",function(req,res){
  res.render("about",{about:aboutContent});
})

//CONTACT
app.get("/contact",function(req,res){
  res.render("contact",{contact:contactContent});
})

//COMPOSE GET
app.get("/compose",function(req,res){
  res.render("compose");
})

//COMPOSE POST
app.post("/compose",function(req,res){
  const post = {
    Title: req.body.Cin_title,
    Post: req.body.Cin_post
  }
  posts.push(post);

  res.redirect("/")
})

//EXPRESS PARAMS
app.get("/posts/:t",function(req,res){
   const para = _.lowerCase(req.params.t);

   posts.forEach(function(post){
     if(para===_.lowerCase(post.Title)){
       res.render("post",{title: post.Title,
       content: post.Post});
     }
   });
})

// // TRUNCATING string
// String.prototype.trunc = String.prototype.trunc ||
//       function(n){
//           return (this.length > n) ? this.substr(0, n-1) + '&hellip;' : this;
//       };
