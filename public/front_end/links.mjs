import cloudinaryUrlPath from "../back_end/cloudinary.js";
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const profile = document.getElementById("profile");
        let url = await cloudinaryUrlPath("../archive/profile.gif");
        if (url) {
            profile.src = url;
        }
        else {
            console.log(error)
        }

        } catch (error) 
        { console.log(error) }
    
});

//trying to resolve 404 error when passing the image src though the function callback