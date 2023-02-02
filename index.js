const express = require('express') // this package return a function through which we can initiate a new application object 
const app = express() // executing the function return a new express function
const apiRouter = require("./src/routes/index")
app.use('/api',apiRouter);
app.get('/',(req,res)=>{
    res.send({
        success:true,
        message:"Sucessfully hitting the api",
        data:{}
    
})
})


app.listen(3000,()=>{
    //this callback will be executed every time the server start
    console.log("Server Started Succesfully");
})
