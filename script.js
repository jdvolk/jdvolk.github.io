const profilePhoto = document.querySelector(".profile-photo");
profilePhoto.addEventListener("click", function() {
    profilePhoto.classList.toggle("clicked");
    setTimeout(function(){
        profilePhoto.classList.toggle("clicked");
    }, 1000);
});

