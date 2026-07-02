import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {

    console.log({
        cloud: process.env.CLOUDINARY_NAME,
        key: process.env.CLOUDINARY_API_KEY,
        secret: process.env.CLOUDINARY_SECRET_KEY
    });

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });

    console.log(cloudinary.config());
};

export default connectCloudinary;