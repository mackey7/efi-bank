
/// login page

const login = document.querySelector('#login');
const password = document.querySelector('#password');
const showPassword = document.querySelector('#showPassword');
const loginSubmit = document.querySelector("#loginSubmit");



showPassword.addEventListener('click', function () {
    const eyeButton = document.querySelector('.fa-eye');
    if (password.type === "password") {
        password.type = "text";
        eyeButton.style.color = "blue"

    }
    else {
        password.type = "password";
        eyeButton.style.color = "black"

    }
})
loginSubmit.addEventListener("click", function (e) {
    const infoContainer = document.querySelector('#infoContainer');
    e.preventDefault();
    if (login.value != 0 && password.value != 0) {
        window.location.assign("./dashboard.html");
    }
    else {
        infoContainer.classList.add('active');

    }


})









