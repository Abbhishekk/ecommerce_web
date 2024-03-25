import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


          
cloudinary.config({ 
  cloud_name: 'dstvq5omq', 
  api_key: '362548498491623', 
  api_secret: '_ONdxmmLSMyYGe3jOOKtdix2vjo' 
});

export const uploadOnCloudinary = async (localFilePath) => {
    try {
        // console.log("uploading file on cloudinary ", localFilePath);
        if (!localFilePath) return null
        //upload the file on cloudinary
        // console.log("After confirming local file path ", localFilePath);
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        },(error, result)=>{console.log(result, error);});
        // file has been uploaded successfull
        // console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        // console.log(error);
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}


