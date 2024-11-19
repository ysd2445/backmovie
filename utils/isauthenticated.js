import jwt from 'jsonwebtoken'
export const isAuthenticated = async(req,res,next)=>{
try {
    const token = req.cookies.token;
    if(!token){
       return res.status(401).json({
            sucess:false,
            message:"un authorized"
        })
    }
    const decode = jwt.verify(token,'shhhh');
    if(!decode){
        return  res.status(401).json({
            sucess:false,
            message:"un authorized"
        })
    }
    req.id = decode.userId;
    next()
} catch (error) {
    console.log(error);
    
}
}
