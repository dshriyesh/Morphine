// take file from local file system
// upload it on server
// upload it on cloudinary
// after successful upload remove file from cloudinary

import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME ,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async(localFilePath)=>{
      try {
            if(!localFilePath){
                  return null
            }
            const response = await cloudinary.uploader.upload(localFilePath, {
                  resource_type: 'auto'
            })
            //file uploaded
            console.log("file uploaded on cloudinary",response.url);
            fs.unlinkSync(localFilePath)
            return response
      } catch (error) {
            fs.unlinkSync(localFilePath) // remove the locally saved temporary file as upload operation got failed
            return null;
      }
}

export {uploadOnCloudinary}


/*
User uploads photo
      ↓
Backend receives file
      ↓
Uploads to Cloudinary → gets back a URL
      ↓
Saves URL in MongoDB linked to a Space
      ↓
Only members of that Space can fetch those URLs

*/