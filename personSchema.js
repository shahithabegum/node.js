const mongoose=require('mongoose');
 const personSchema=mongoose.Schema({
    Name:{
        type: String,
        required: true,
    },
    Age:{
        type : String,
        required: true
    },
    ctreatedDate:{
        type : Date,
        default: Date.now
    }
 })

 module.exports=mongoose.model('person',personSchema);