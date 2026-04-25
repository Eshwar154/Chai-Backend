import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    //  Fix path issue (IMPORTANT)
    const resolvedPath = path.resolve(localFilePath);

    console.log("Uploading from:", resolvedPath);

    const response = await cloudinary.uploader.upload(resolvedPath, {
      resource_type: "auto",
    });

    console.log("Uploaded:", response.secure_url);

    // delete only AFTER success
    fs.unlinkSync(resolvedPath);

    return response;
  } catch (error) {
    console.log("Cloudinary Error:", error.message);

    //  safe delete
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

export { uploadOnCloudinary };