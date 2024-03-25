import user from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/APIError.js";

export const verifyjwt= asyncHandler(async(req,res,next)=>{
    try {
       
        const token = req.cookies?.accesstoken || req.header("Authorization")?.replace("Bearer ","")
        // console.log(token);

        if(!token){
            throw new ApiError(401,"Unauthorized")
        }
        
        const decoded = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        const User= await user.findById(decoded?._id).select("-password -refreshtoken")

        if(!User){
            throw new ApiError(401,"Unauthorized");
        }
        req.user=User;
        next();
    } catch (error) {
        throw new ApiError(401, "Invalid access token")
    }
    
})