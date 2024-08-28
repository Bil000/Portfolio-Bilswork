import * as dotenv from "dotenv";
import status from "statuses";
dotenv.config();
import * as cloudinary from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    secure: true,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function cloudinaryUrlPath (pathUrl)  {
    try {
        const uploadResult = await cloudinary.uploader.upload(pathUrl);
        const url = cloudinary.url(uploadResult.public_id, {
            transformation: [
                { quality: "auto", fetch_format: "auto" },
                { crop: "fill", gravity: "auto" },
            ],

        });
        console.log(status(200));
        return url;
    } catch (error) {
        console.log(status(404), error);
    }
};

