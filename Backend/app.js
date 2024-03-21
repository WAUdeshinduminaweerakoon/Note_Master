const express = require( "express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json());

//mongodb connection
mongoose.connect("mongodb+srv://udeshidumina:udesh123@cluster0.4jg3pk6.mongodb.net/Note_Master",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log("connected to DB")
    }else{
        console.log("error")
    }
})
app.listen(3001,()=>{
    console.log("on port 3001")
})