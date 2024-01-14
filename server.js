const express=require("express");
var cors=require('cors');
const app=express();
app.use(cors());
require('dotenv').config();
const dbconfig=require("./config/dbconfig");
app.use(express.json());
const userRoutes=require('./routes/userRoutes');
const adminRoute=require('./routes/adminRoute');
const doctorRoute=require('./routes/doctorRoute')
// console.log(process.env.MONGO_URL)
app.use('/api/admin',adminRoute);
app.use('/api/user',userRoutes);
app.use('/api/doctor',doctorRoute);
const port=process.env.PORT || 5000;
app.listen(port,()=>console.log(`listening on port ${port}`)); 
app.use(express.urlencoded({extended:true}));
app.use(express.json);