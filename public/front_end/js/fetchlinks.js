async function fetchCloudinaryUrls() {
    try {
        const response = await fetch('/generateImage');
        const data = await response.json();
        return data.url;
    } catch (error) {
        console.log('Error fetching Cloudinary URLs:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const url = await fetchCloudinaryUrls();
    const backgroundImage = document.getElementById('contentDivOne');
    const profileGifImage = document.getElementById('profile');
    backgroundImage.style.backgroundImage = 
       `linear-gradient(to bottom, transparent, #18191a),
        linear-gradient(to right, transparent, #18191a),
        linear-gradient(to left, transparent, #18191a),
        url(${url[0]})`;
    backgroundImage.style.backgroundSize = 'cover';
    profileGifImage.src = url[1];
    }
);