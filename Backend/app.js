

const express = require("express");
const body = require("body-parser");
const request = require("request");
const http = require("https");

const app = express();
app.use(express.static("public_Folder"))
app.use(body.urlencoded({extended: true}));

app.listen(process.env.PORT||7777,function(){
  console.log("Working !!");
});

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  const fname = req.body.Fname;
  const lname = req.body.Lname;
  const email = req.body.Email;

  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: fname,
        LNAME: lname
      }
    }]
  };

  const jsondata = JSON.stringify(data);
  const url = "https://us4.api.mailchimp.com/3.0/lists/96bb8e740c";
  const options = {
    method: "POST",
    auth: "Nishthavan:a1294bd551255a85a96d8f7dce5fc183-us4"
  }

  const request = http.request(url,options,function(response){

       if(response.statusCode===200){
         res.sendFile(__dirname + "/success.html");
       }
       else{
         res.sendFile(__dirname + "/failure.html");
       }
       response.on("data",function(data){
         console.log(JSON.parse(data));
       })
  });
 request.write(jsondata);
 request.end();
});








//LIST ID --> 96bb8e740c
//API--> a1294bd551255a85a96d8f7dce5fc183-us4
