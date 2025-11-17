const mongoose=require('mongoose');


const TaskSchema= new mongoose.schema(
    {
    title:{
        type:String,
        required:true,
        trim:true
    },
description:{
    type:String,
    trim:true
},
completed:{
    type:Boolean,
    defult:false
},

timestamp:true
}
);