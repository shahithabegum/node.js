//import express
const express=require('express');
//import middleware
const morgon=require('morgan');
// import mongoose for db connection
const mongoose=require('mongoose');
//env import
require('dotenv/config');
//initiate express
const app=express();
//middleware
app.use(morgon('dev'));
//Body-parser
app.use(express.json());
//import router
const personsrouter=require('./PersonRouter');
//execute router
app.use('/person',personsrouter);



//create a port
app.listen(2000,()=>{
    console.log("server started on 2000")
})

//DB Connection
//momgoose.set('userNewUrl',true);
//momgoose.set('userUndefinedTopology',true);
mongoose.connect(process.env.My_DBConnection,(err)=>{
    if(err){console.log("DB Not connrcted")}
    console.log("database connected")
});