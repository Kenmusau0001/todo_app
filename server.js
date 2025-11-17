require( 'dotenv'). config();
const express = rqequire('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

app.get('/',(req, res)=>{
    res.json({message: 'Todo app running'});
})
const PORT = process.env.PORT || 5000;
connectDB(). then(() =>{
    app.listen(PORT, () => console.log( 'server is running on port ${PORT}'));
});