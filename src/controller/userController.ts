
import  {Request,Response}  from "express"

 export  const userController = (req:Request,res:Response)=>{
     console.log("UserCreated");

     return res.status(400).json({
        success : true,
        message : "User Created Sucessfuly"
     })
     
}