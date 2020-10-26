const validateLogin = () => {
    if (!emailLogin || !passwordLogin) {
        submitLogin.disabled = true;
    }
    else for (const user of listUser) {
        if (user.email !== emailLogin || user.pass !== passwordLogin) { 
        alert("Enter the wrong email or password")
        
    }
}   


validateLogin();

const validateRegiter = () => {
    if (emailInput == "") {
        submitreg.disabled = true;
        return;
    } else if (passwordInput == "") {
        submitreg.disabled = true;
        return;
    } else if (passwordRetypeInput == "") {
        submitreg.disabled = true;
        return;
    } else if (passwordInput != passwordRetypeInput) {
        alert("Password don't match retype your Password.");
        return;
    } else if (usernameInput == "") {
        submitreg.disabled = true;
        return;
    } else if (phoneInput == "") {
        submitreg.disabled = true;
        return;
    } else {
        for (let i = 0; i < listUser.length; i++) {
            if (listUser[i].user === usernameInput.value) {
                alert("Account already exists");
                return;
            }
            if (listUser[i].email === emailInput.value) {
                alert(email + " is already register.");
                return;
            }
        }
    }
}

validateRegiter();
const validateForgot = () =>{
    for (const user of listUser) {
        if (emailForgot === "") {
            submitforgot.disabled = true;
            return;
        }
        if(user.email !== emailForgot ){
            alert("Email does not exist")
        }
}

validateForgot();