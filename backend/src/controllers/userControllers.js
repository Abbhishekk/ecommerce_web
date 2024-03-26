import ApiErr from "../utils/APIError.js";
import ApiResponse from "../utils/APIResponse.js";
import userModel from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generateAccessTokenandRefreshToken = async(userId) => {
    try {
       
        const User = await userModel.findById({_id: userId})
        
        const accessToken= User.generateAccessToken();
        const refreshToken= User.generateRefreshToken();

        User.refreshtoken=refreshToken;
        await User.save({validateBeforeSave:false}); // to just not save password everytime

        return {
            accessToken,
            refreshToken
        }


    } catch (error) {
        return new ApiErr(500, "Something went wrong");
    }
};
export const login = (req,res)=>{
    console.log("Login");
    res.send("Login")
}



export const signup = async(req,res) => {
    
    const {firstName, lastName, email, password, rePassword} = req.body;
    if([firstName, lastName, email, password, rePassword].some((field) => field?.trim() === "")){
        return res.status(400).json({message: "All fields are required"})
    }
    if(password !== rePassword){
        return new ApiErr(400, "Passwords do not match")
    }
    const existingUser = await userModel.findOne({
        $or: [{
            email: email
        }]
    });
    console.log(existingUser);
    if(existingUser ){
        console.log("User already exists");
        return res.status(400).json(new ApiErr(400, "User already exists", [],"","User with that email already exists"))
    }

    try {
        const localFilePath = req.files?.avatar[0]?.path;
        if(!localFilePath){
            return res.status(400).json(new ApiErr(400, "Image is required", [],"","Image is required"))
        }
      
        const avatar = await uploadOnCloudinary(localFilePath);
       
        const user = await userModel.create({
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            avatar: avatar.secure_url,
            role: "user"
        })
       
        const createdUser = await userModel.findById({_id: user._id}).select(
            "-password -refreshtoken"
        )
       
        if(!createdUser){
            return res.status(500).json( new ApiResponse(500, "Something went wrong registering"));
         }
         const {accessToken, refreshToken}=await generateAccessTokenandRefreshToken(user._id);
         
         return res
         .status(200)
         .json(
             new ApiResponse(201, {user: createdUser, accessToken: accessToken, refreshToken: refreshToken},"User created successfully")
         )
    } catch (error) {
        return new ApiErr(400, error)
    }
   
}

