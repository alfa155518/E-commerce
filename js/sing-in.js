// *** All Variables *** //

let inputUser = document.querySelector(".user");

let inputPassword = document.querySelector(".password");

let btnSend = document.querySelector(".send");

let errorMessage = document.createElement("div");

errorMessage.innerHTML = 'You Must Write Correct Data'

errorMessage.className = 'error-message'


btnSend.addEventListener("click", check);



function check(e) {
    e.preventDefault();
    if (inputUser.value == '' || inputUser.value == null || inputPassword.value == '' || inputPassword.value == null) {
        document.body.append(errorMessage)

    } else {
        if (inputUser.value === localStorage.getItem("userValue") && inputPassword.value === localStorage.getItem("userPassword") ) {
            errorMessage.remove()
            window.location = 'index.html'
        } else {
            document.body.append(errorMessage)
        }
    }

};