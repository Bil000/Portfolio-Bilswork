document.addEventListener("DOMContentLoaded", () => {
    const cloudinary = (url) => {
        const cloudinary = require('cloudinary').v2;
        cloudinary.config({
            cloud_name: "dytmmuosl",
            secure: true,
        });
        url = cloudinary.url("", {
            transformation: [{
                fetch_format: "auto",
                quality: "auto",
            }]
        });
    }
//rewatch cloudinary tutorial about how to turn image files in ./archive to a compressed an responsive way for any browser and viewport
//Remember about getting the query method images to pass the compressed images into the srcs from img tags on index.html
});
    