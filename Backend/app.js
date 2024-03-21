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

//schema

const sch={
    firstname:String,
    lastname:String,
    email:String,
    password:String
}
const model=mongoose.model("user", sch);

//post
app.post("/post",async(req,res)=>{
    console.log("inside post function");

    const data = new model({
         firstname:req.body.firstname,
         lastname:req.body.lastname,
         email:req.body.email,
         password:req.body.password
    });
    console.log(data);

    const val = await data.save();
    res.json(val);


})

app.listen(3001,()=>{
    console.log("on port 3001")

})