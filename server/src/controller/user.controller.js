import { User } from "../model/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import jwt from 'jsonwebtoken'
const generateAccessAndRefreshToken = async(userid)=>{
    try {
        const user = await User.findById(userid)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        
        await user.save({validateBeforeSave:false})
        return {accessToken,refreshToken}

    } catch (error) {
        throw new ApiError(500,"Something went wrong while generating token")
    }
}

const registerUser = AsyncHandler(async(req,res)=>{
    const {username,fullname,email,password} = req.body

    if([username,fullname,password,email].some((field)=>!field || field.trim()==="")){
        throw new ApiError(400,"All fields are required")
    }

    const userExist = await User.findOne({
        $or:[{username},{email}]
    })

    if(userExist){
        throw new ApiError(409,"User already exist")
    }

    const user = await User.create({
        username,
        fullname,
        email,
        password
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken") 

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering user")
    }

    return res.status(200)
    .json(new ApiResponse(200,createdUser,"User registered successfully"))

})

const loginUser = AsyncHandler(async(req,res)=>{
    // take credentials
    //check if credential format is correct
    // check if the user is registered
    // if not tell him to register
    // if yes , than allow access

    const {username,email,password} = req.body
    
    if(!(username || email)){
    throw new ApiError(400,"Username/email and password are required")
}

    const user = await User.findOne({
        $or:[{username},{email}]
    })

    if(!user){
        throw new ApiError(400,"User is not registered")
    }

    const passwordCheck = await user.isPasswordCorrect(password);

    if(!passwordCheck){
        throw new ApiError(401,"Password is incorrect")
    }

    // now while login we have to generate access and refresh token and store them
    const {accessToken,refreshToken} =await generateAccessAndRefreshToken(user._id)

    const login = await User.findById(user._id).select('-password -refreshToken')

    const options={
        httpOnly:true,
        secure:true
    }

    return res.status(200)
    .cookie('accessToken',accessToken,options)
    .cookie('refreshToken',refreshToken,options)
    .json(new ApiResponse(200,{
        user:login,accessToken,refreshToken
    },
    "User loggedIn successfully"
))
})

const logoutUser = AsyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                refreshToken:undefined
            }
        },
        {
            new:true
        }
    )

    const options = {
        httpOnly:true,
        secure:true
    }

    return res.status(200)
    .clearCookie('accessToken',options)
    .clearCookie('refreshToken',options)
    .json(new ApiResponse(200,{},"logged out successfully"))
})

const refreshAccessToken = AsyncHandler(async(req,res)=>{
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken){
        throw new ApiError(401,"Unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if(!user){
            throw new ApiError(401,"Invalid refresh token")
        }
    
        if(incomingRefreshToken !== user?.refreshToken){
            throw new ApiError(401,"Refresh Token is expired or used")
        }
    
        const options = {
            httpOnly:true,
            secure:true
        }
    
        const {accessToken,refreshToken} = await generateAccessAndRefreshToken(user._id)
    
        return res.status(200)
        .cookie('accessToken',accessToken,options)
        .cookie('refreshToken',refreshToken,options)
        .json(
            new ApiResponse(200,
                {accessToken, refreshToken:refreshToken},
                "Access token refreshed successfully"
            )
        )
    } catch (error) {
        throw new ApiError(401,error?.message || "Invalid refresh token")
    }
})


export {registerUser,loginUser,logoutUser,refreshAccessToken}

