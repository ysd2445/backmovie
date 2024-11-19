import bycrypt from 'bcryptjs'
import User from "../models/usermodel.js";
import jwt from 'jsonwebtoken'
export const signUp = async (req,res)=>{
try {
    
    console.log(req.body);
    const {username,email,password} = req.body;
    
    const user = await User.findOne({email})
    if(user){
        return res.status(401).json({
            sucess:false,
            message:"user Already exists"
        })
    }
    const hashedPassword = await bycrypt.hash(password,10)
    console.log(hashedPassword);
    
    await User.create({
        username,
        email,
        password:hashedPassword
    })
    return res.status(200).json({
        sucess:true,
        message:' User Created Sucessfully'
    })

} catch (error) {
 console.log(error);
    
}
} 
export const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user){
return res.status(401).json({
    sucess:false,
    message:"Email and password are in correct"
})
}
const compare = await  bycrypt.compare(password,user?.password)
if(!compare){
   return  res.status(401).json({
        sucess:false,
        message:" password is incorrect"
    })
}
const token = jwt.sign({userId:user._id},"shhhh")
res.cookie("token",token)
console.log(res.cookies);

  return  res.status(200).json({
        sucess:true,
        message:"Login Sucessfully",
        user,
    })

    } catch (error) {
        console.log(error);
        
    }
}
 
export const Logout = async(req,res)=>{
    try {
        res.cookie("token","")
console.log(res.cookie);

  return  res.status(200).json({
        sucess:true,
        message:"Logout Sucessfully",
    
    })
    } catch (error) {
        console.log(error);
        
    }
}