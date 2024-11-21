import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const COnnectionDB = async () => {

    await mongoose.connect('mongodb+srv://shivam:Yshiv*123@cluster0.bwxi8.mongodb.net/').then(() => {
        console.log('connected')
    })
}