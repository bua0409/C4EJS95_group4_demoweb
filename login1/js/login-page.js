const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.getElementById("username-field").value;
    const password = document.getElementById("password-field").value;

    for (const user of listUser) {
        if (user.user === username && user.pass === password) {
            if (user.role === "hotel") {
                addClass();
                removeClass();
            } else if(user.role === "user") {
                addClass();
                removeClass();
            }
        }
        else {
            loginErrorMsg.style.opacity = 1;
        }
    }
})