const mongoose = require('mongoose')


const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            serverselectionTimeoutms:5000,
        })
        console.log('mongoDB connected successfully');
    }
    catch(error){
        console.error('mogoDB connection faild:', error. message);
    }
};
module.exports=connectDB;