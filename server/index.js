import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use("/users", userRouter);

app.listen(5000, () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log('Connected to Mongoose'))
    .catch((error) => console.log(error))
})


console.log('server start');