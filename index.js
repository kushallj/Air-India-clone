const express = require('express'); // this package return a function through which we can initiate a new application object 
// const { connect } = require('mongoose');
const User = require("./src/models/user");
const {connect} = require('./src/config/database')
const app = express() // executing the function return a new express function
const apiRouter = require("./src/routes/index")
const authRouter = require('./src/routes/authRoutes')
const bodyParser = require('body-parser')
const passport = require('passport')
require("./src/util/auth");

app.use(bodyParser.urlencoded({extended:false}))
app.use("/",authRouter)
app.use('/api',passport.authenticate('jwt',{session: false}),apiRouter);

app.use(function(err,req,res,next){
    res.status(err.status || 500);
    res.json({
        success: false,
        error: err
    });

})


app.listen(3000,async ()=>{
    //this callback will be executed every time the server start
    console.log("Server Started Succesfully");
    await connect()
    console.log("Mongo db connected successfully")
    console.log("Server Started Successfully");
    // let user = await User.create({
    //     email:"abc@xyz.com",
    //     password:12345,
    //     username:'abc'
    // });
    // console.log(user);
})
