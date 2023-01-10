const express=require("express");
const bodyparse=require("body-parser");
const app=express();

app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});


app.post("/Booking",function(req,res){
    res.sendFile(__dirname+"/bookingpg.html")
})

app.listen(3000,function(){
    console.log("running at port 3000")
});





