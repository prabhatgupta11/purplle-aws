const express=require("express")
const app=express();
app.get("/home",(req,res)=>{
    res.status(200).json({
        msg:"welcome to home page"
    })
})

app.listen(4500,()=>{
    console.log("server is running at 4500")
})