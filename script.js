import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import { COnnectionDB } from './utils/connection.js';
import bodyParser from 'body-parser';
import userRouter from './routes/userRouter.js'
const app = express()
dotenv.config()
app.use(express.urlencoded({extended:true}));
app.use(cookieParser()) 

app.use(express.json());
const corsOption={
origin:'http://localhost:5173',
credentials: true
}
app.use(cors(corsOption)) 

app.use("/api/user",
   userRouter 
)
COnnectionDB()
app.listen(3000,()=>{
    console.log('app is running on 3000');
    
})