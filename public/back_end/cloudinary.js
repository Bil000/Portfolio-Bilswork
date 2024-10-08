const cloudinary = require("cloudinary").v2
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  
    secure: true,
});

function cloudinaryUrlPath() {
    try {
        const link = [];
        link.push(cloudinary.url("background_profile_ktqoeb", {
            transformation: [
                { fetch_format: "auto" },
                { crop: "fill", gravity: "auto" },
            ],
        }));
        link.push(cloudinary.url( "lxezlt2nprnczypp2zcp", {
            transformation: [
                { fetch_format: "auto" },
                { crop: "fill", gravity: "auto" },
            ],
        }));
        return link;
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = cloudinaryUrlPath;

