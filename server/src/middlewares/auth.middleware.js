import { User } from "../model/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoken"

export const verifyJwt = AsyncHandler(async(req,res,next)=>{
    try {
        const token = req.cookies?.accessToken || req.header('Authorization')?.replace("Bearer ", "")

        if(!token){
            throw new ApiError(400,"User data not found")
        }
        const decodedData = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        const user  = await User.findById(decodedData?._id).select('-password -refreshToken')

        if(!user){
            throw new ApiError(401,"Unathorized user")
        }
        req.user = user
        next()
        
    } catch (error) {
        throw new ApiError(501,error?.message || "Invalid access token")
    }
})