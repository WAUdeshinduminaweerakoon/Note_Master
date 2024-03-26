const expre1ss = require( "express");
const app=express();
const mongoose=require("mongoose");
app.use(express.json());


//mongodb connection
mongoose.connect(env.mongodb.url,{
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