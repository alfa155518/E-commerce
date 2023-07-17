// *** All Variables *** //

let inputUser = document.querySelector(".user");

let inputPassword = document.querySelector(".password");

let inputEmail= document.querySelector(".email");






let btnSend = document.querySelector(".send");

let errorMessage = document.createElement("div");

errorMessage.innerHTML = 'You Must Write Correct Data'

errorMessage.className = 'error-message'


btnSend.addEventListener("click", check);


function check(e) {
    e.preventDefault();
    if (inputUser.value == '' || inputUser.value == null || inputPassword.value == '' || inputPassword.value == null || inputEmail.value == '' || inputEmail.value == null) {
        
        document.body.append(errorMessage)

    } else {
        errorMessage.remove()
        localStorage.setItem("userValue", inputUser.value);

        localStorage.setItem("userPassword", inputPassword.value);

        localStorage.setItem("userEmail", inputEmail.value);

        saveImage()

        window.location = 'sing-in.html'
    };
};




function saveImage() {
    let inputFile = document.getElementById("file-upload");

    let fr = new FileReader();

    fr.addEventListener("load", e => {
        localStorage.setItem("profileImage", fr.result);
    });

    fr.readAsDataURL(inputFile.files[0]);
}



















// function saveImage() {
//     var fileInput = document.getElementById('file-upload');

//     let fr = new FileReader();

//     fr.addEventListener("load", e => {
//         localStorage.setItem("profileImage", fr.result)
//     });

//     fr.readAsDataURL(fileInput.files[0]);
// };



























