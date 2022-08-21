const mysql = require('mysql');
const express=require('express');

const app=express();

app.use("/assets",express.static("assets"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mangesh@1230'
});

connection.connect(function (error)
{
    if(error)throw error
    else console.log("connected to the database successfully!")
});

app.get("/", function(req, res){
  res.sendFile(__dirname+'/Home.html');

})


app.get("/home",(req,res) => {
   res.sendFile(__dirname+'/Home.html');
})


app.get('/profile', function (req, res) {

  res.sendFile( __dirname + "/profile.html" );
})





app.get("/login",(req,res)=>{
  res.sendFile(__dirname+'/login.html');
})

app.get("/forgot_pw",(req,res)=>{
  res.sendFile(__dirname+'/forgot_pw.html');
})





app.listen(4500);