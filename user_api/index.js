import express from "express"
import mongoose from "mongoose";
import dotenv from  'dotenv';

import usersRoutes from './routes/user.routes.js';



// Load env variable
dotenv.config({path:[".env.local"]});

// create express app
const app = express();


// use middlewares
app.use(express.json());

// use routes
app.use('/users', usersRoutes)

// make connection to database
await mongoose.connect(process.env.MONGO_URI);

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
console.log(`Express server is running on ${PORT}`)
})

