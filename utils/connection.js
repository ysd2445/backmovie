import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const COnnectionDB = async () => {

    await mongoose.connect(process.env.MONGOURI).then(() => {
        console.log('connected')
    })
}