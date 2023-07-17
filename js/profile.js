let btnLogOutProfile = document.querySelectorAll(".log-out");








let profileContent = document.querySelector(".profile");

let profileName = document.querySelector(".profile .name span");

let profileMail = document.querySelector(".profile .email span");




// set profile Img 
if (localStorage.getItem('profileImage')) {

    var img = document.createElement('img');

    img.className = 'img-profile';

    profileName.innerHTML = localStorage.getItem("userValue");

    profileMail.innerHTML = localStorage.getItem("userEmail");

    img.src = localStorage.getItem('profileImage');

    profileContent.appendChild(img);
    };


























btnLogOutProfile.forEach(btn => {
    btn.addEventListener("click", e => {
        localStorage.clear()
        window.location = 'sing-up.html'
    })
})