const { application } = require('express');
const express=require('express');
const route=express.Router();
const data=require('./personSchema')

//post method
try{
route.post('/',async ( req,res)=>{
    const postPerson= await new data({
        Name:req.body.Name,
        Age:req.body.Age
    })
    const savePerson= await postPerson.save();
    res.status(200).json(savePerson);
})
}catch(err){
  res.json("err:",err)
}

//get method
try{
  route.get('/',async (req,res)=>{
    const getAll= await data.find();
    res.status(200).json(getAll)
  })
}catch(err){
    res.json("user not available",err)
}
//getById method
try{
    route.get('/:id',async (req,res)=>{
      const getById= await data.findById(req.params.id);
      res.status(200).json(getById)
    })
  }catch(err){
      res.json("user not available",err)
  }
  
  //update method
try{
    route.put('/:id',async (req,res)=>{
       
      const updateperson= await data.updateOne({_id:req.params.id},{$set:{Name:req.body.Name,Age:req.body.Age}});
      res.status(200).json("user updated sucessfully")
    })
  }catch(err){
      res.json("user not updated",err)
  }

  //delete method
try{
    route.delete('/:id',async (req,res)=>{
       
      const deleteperson= await data.remove({_id:req.params.id});
      res.status(200).json(deleteperson)
    })
  }catch(err){
      res.json("user not updated",err)
  }
   module.exports=route;