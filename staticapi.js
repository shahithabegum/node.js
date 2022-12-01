//import express
const express=require('express');
//import middleware
const morgon=require('morgan');
// import mongoose for db connection
const momgoose=require('mongoose');
const { default: mongoose } = require('mongoose');
//initiate express
const app=express();
//middleware
app.use(morgon('dev'));
//Body-parser
app.use(express.json());
const persons=[
    {
    id:1,
    name:"shaju"
},{
    id:2,
    name:"fazil"
},{
    id:3,
    name:"zia"
}
]
//get all
app.get('/',(req,res)=>{
    res.status(200).json(persons)
})
//getbyid
app.get('/:id',async (req,res)=>{
    const getOne= await persons.filter(e => e.id==req.params.id)
    res.status(200).json(getOne);
})
//post 
app.post('/',(req,res)=>{
    const add=persons.push(req.body);
    res.status(200).json(req.body)
})

//create a port
app.listen(2000,()=>{
    console.log("server started on 2000")
})

//DB Connection
// momgoose.set('userNewUrl',true);
// momgoose.set('userUndefinedTopology',true);
mongoose.connect('mongodb://localhost:27017/expressdemo',(err)=>{
    if(err){console.log("DB Not connrcted")}
    console.log("database connected")
});