document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`);
});

const profileImage = document.getElementById("profile-image");
const toggleButton = document.getElementById("toggle-button");

const originalImageSrc = profileImage.src;
const newImageSrc = "https://upload.wikimedia.org/wikipedia/commons/1/1d/Red_sea_coast%2C_Makadi_bay.jpg";

toggleButton.addEventListener("click", function () {
    if (profileImage.style.display === "none") {
        profileImage.src = originalImageSrc;
        profileImage.style.display = "block";
    } else {
        profileImage.src = newImageSrc;
        profileImage.style.display = "block";
    }
});

profileImage.addEventListener("mouseover", function () {
    if (profileImage.src === originalImageSrc) {
        profileImage.src = newImageSrc;
    } else {
        profileImage.src = originalImageSrc;
    }
});

profileImage.addEventListener("mouseout", function () {
    profileImage.src = originalImageSrc;
});
